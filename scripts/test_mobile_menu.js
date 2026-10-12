const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
  });
  const page = await context.newPage();

  console.log('📱 Navigating to http://localhost:8080/ at 375x812...');
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' });

  // Check header bounding box
  const headerBox = await page.locator('.sta-header').boundingBox();
  console.log('Header bounding box:', headerBox);

  // Check drawer before click
  const drawerBefore = await page.evaluate(() => {
    const el = document.getElementById('sta-mobile-drawer');
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    return {
      rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
      display: style.display,
      visibility: style.visibility,
      transform: style.transform,
      position: style.position,
      zIndex: style.zIndex
    };
  });
  console.log('Drawer BEFORE click:', drawerBefore);

  // Click mobile menu trigger
  console.log('Clicking #sta-mobile-menu-trigger...');
  await page.click('#sta-mobile-menu-trigger');

  // Check drawer after click
  const drawerAfter = await page.evaluate(() => {
    const el = document.getElementById('sta-mobile-drawer');
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    const parent = el.parentElement;
    const parentStyle = window.getComputedStyle(parent);
    return {
      rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
      display: style.display,
      visibility: style.visibility,
      transform: style.transform,
      position: style.position,
      zIndex: style.zIndex,
      classes: el.className,
      parentElement: parent.tagName + '.' + parent.className,
      parentBackdropFilter: parentStyle.backdropFilter || parentStyle.webkitBackdropFilter
    };
  });
  console.log('Drawer AFTER click:', drawerAfter);

  await page.screenshot({ path: 'scripts/mobile-menu-current.png', fullPage: false });
  console.log('📸 Screenshot saved to scripts/mobile-menu-current.png');

  await browser.close();
})();
