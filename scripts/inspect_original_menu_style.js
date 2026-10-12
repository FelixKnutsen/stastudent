const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();

  await page.goto('https://stastudent.no/', { waitUntil: 'domcontentloaded' });
  await page.click('button.navbar-toggle');
  await page.waitForTimeout(1000);

  const menuInfo = await page.evaluate(() => {
    const nav = document.querySelector('#main-navigation, .navbar-collapse');
    if (!nav) return 'Not found';
    const s = window.getComputedStyle(nav);
    const rect = nav.getBoundingClientRect();
    return {
      rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
      display: s.display,
      position: s.position,
      top: s.top,
      backgroundColor: s.backgroundColor,
      overflow: s.overflow,
      zIndex: s.zIndex
    };
  });
  console.log('Original Opened Nav Info:', menuInfo);
  await browser.close();
})();
