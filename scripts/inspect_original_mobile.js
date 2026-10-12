const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
  });
  const page = await context.newPage();

  console.log('🌐 Visiting https://stastudent.no/ at 375x812...');
  try {
    await page.goto('https://stastudent.no/', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);

    const originalData = await page.evaluate(() => {
      // Find hamburger button or menu toggle
      const buttons = Array.from(document.querySelectorAll('button, a, div[role="button"], span.menu-toggle, .navbar-toggle, [aria-label*="meny" i], [aria-label*="menu" i]'));
      const menuCandidates = buttons.map(b => ({
        tag: b.tagName,
        id: b.id,
        className: b.className,
        ariaLabel: b.getAttribute('aria-label'),
        rect: b.getBoundingClientRect()
      })).filter(b => b.rect.y < 120 && b.rect.width > 0);

      // Find mobile nav container
      const navElements = Array.from(document.querySelectorAll('nav, .mobile-menu, .drawer, [class*="menu" i], [class*="nav" i]')).slice(0, 10).map(n => ({
        tag: n.tagName,
        id: n.id,
        className: n.className,
        rect: n.getBoundingClientRect()
      }));

      return { menuCandidates, navElements };
    });

    console.log('Original Header/Menu candidates:', JSON.stringify(originalData, null, 2));

    await page.screenshot({ path: 'scripts/original-mobile-home.png', fullPage: false });
    console.log('📸 Original screenshot saved to scripts/original-mobile-home.png');

    // Try clicking menu toggle if found
    const toggle = page.locator('button.menu-toggle, .navbar-toggle, [aria-label*="meny" i], [class*="hamburger" i], [class*="menu-btn" i]').first();
    if (await toggle.count() > 0) {
      await toggle.click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'scripts/original-mobile-menu-opened.png', fullPage: false });
      console.log('📸 Original opened menu screenshot saved to scripts/original-mobile-menu-opened.png');
    }
  } catch (err) {
    console.error('Error inspecting stastudent.no:', err.message);
  }

  await browser.close();
})();
