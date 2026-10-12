const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });

  // Inspect Home
  const pageHome = await browser.newPage({ viewport: { width: 320, height: 700 } });
  await pageHome.goto('http://localhost:8080/', { waitUntil: 'networkidle' });

  const homeDetails = await pageHome.evaluate(() => {
    const wideElements = [];
    document.querySelectorAll('*').forEach(el => {
      const sw = el.scrollWidth;
      const cw = el.clientWidth;
      const rect = el.getBoundingClientRect();
      if (sw > 320 || rect.width > 320 || rect.right > 320) {
        wideElements.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          scrollWidth: sw,
          clientWidth: cw,
          width: Math.round(rect.width),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          styleInline: el.getAttribute('style') || ''
        });
      }
    });
    return wideElements;
  });
  console.log('HOME wide elements (> 320):');
  homeDetails.forEach(el => console.log(el));

  // Inspect Styret
  const pageStyret = await browser.newPage({ viewport: { width: 320, height: 700 } });
  await pageStyret.goto('http://localhost:8080/sta-styret/', { waitUntil: 'networkidle' });

  const styretDetails = await pageStyret.evaluate(() => {
    const wideElements = [];
    document.querySelectorAll('*').forEach(el => {
      const sw = el.scrollWidth;
      const rect = el.getBoundingClientRect();
      if (sw > 320 || rect.width > 320 || rect.right > 320) {
        wideElements.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          scrollWidth: sw,
          width: Math.round(rect.width),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          styleInline: el.getAttribute('style') || '',
          parentTag: el.parentElement ? el.parentElement.tagName : '',
          parentClass: el.parentElement ? el.parentElement.className : '',
          gridStyle: el.parentElement ? window.getComputedStyle(el.parentElement).gridTemplateColumns : ''
        });
      }
    });
    return wideElements;
  });
  console.log('\nSTYRET wide elements (> 320):');
  styretDetails.slice(0, 10).forEach(el => console.log(el));

  await browser.close();
})();
