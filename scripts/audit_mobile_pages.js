const { chromium } = require('playwright');

const viewports = [
  { name: '320x700', width: 320, height: 700 },
  { name: '360x800', width: 360, height: 800 },
  { name: '375x812', width: 375, height: 812 },
  { name: '390x844', width: 390, height: 844 },
  { name: '430x932', width: 430, height: 932 },
  { name: '768x1024', width: 768, height: 1024 }
];

const pagesToTest = [
  '/',
  '/om-sta/',
  '/linjeforeninger/',
  '/studentaktiviteter/',
  '/studentparlamentet/',
  '/engasjer-deg/',
  '/nyheter/',
  '/sta-styret/',
  '/rad-styrer-og-utvalg/',
  '/trygg-organisasjon/',
  '/lokaler/'
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  console.log('🚀 Starting Comprehensive Mobile Responsive Audit across', pagesToTest.length, 'pages and', viewports.length, 'viewports...\n');

  const issuesFound = [];

  for (const vp of viewports) {
    console.log(`=== Testing Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });

    for (const urlPath of pagesToTest) {
      try {
        await page.goto(`http://localhost:8080${urlPath}`, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(300);

        const audit = await page.evaluate((vpWidth) => {
          const docWidth = document.documentElement.scrollWidth;
          const hasHorizontalOverflow = docWidth > vpWidth + 1; // 1px tolerance for rounding

          // Find specific elements overflowing the viewport
          const overflowingElements = [];
          if (hasHorizontalOverflow) {
            const allElements = document.querySelectorAll('*');
            allElements.forEach(el => {
              const rect = el.getBoundingClientRect();
              if (rect.right > vpWidth + 1 && rect.width > 0 && rect.height > 0) {
                // Ignore fixed/hidden elements
                const style = window.getComputedStyle(el);
                if (style.display !== 'none' && style.visibility !== 'hidden' && style.position !== 'fixed') {
                  overflowingElements.push({
                    tag: el.tagName,
                    id: el.id || '',
                    className: (el.className && typeof el.className === 'string') ? el.className.slice(0, 50) : '',
                    rectRight: Math.round(rect.right),
                    rectWidth: Math.round(rect.width)
                  });
                }
              }
            });
          }

          return {
            docWidth,
            vpWidth,
            hasHorizontalOverflow,
            overflowCount: overflowingElements.length,
            sampleOverflow: overflowingElements.slice(0, 5)
          };
        }, vp.width);

        if (audit.hasHorizontalOverflow) {
          console.warn(`  ⚠ [${vp.name}] ${urlPath}: Horizontal overflow detected! docWidth: ${audit.docWidth}px (vp: ${vp.width}px). Elements:`, audit.sampleOverflow);
          issuesFound.push({ viewport: vp.name, path: urlPath, audit });
        } else {
          // Clean
        }
      } catch (err) {
        console.error(`  ✕ [${vp.name}] ${urlPath} Error:`, err.message);
      }
    }
    await page.close();
  }

  console.log('\n======================================================');
  console.log(`Audit Complete! Total overflow issues found: ${issuesFound.length}`);
  if (issuesFound.length > 0) {
    console.log('Summary of paths with issues:');
    const pathMap = {};
    issuesFound.forEach(i => {
      pathMap[i.path] = (pathMap[i.path] || []).concat(i.viewport);
    });
    console.log(pathMap);
  } else {
    console.log('✅ ZERO HORIZONTAL OVERFLOW DETECTED across all pages and viewports!');
  }

  await browser.close();
})();
