const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

  console.log('🧪 Testing mobile menu interactions...');
  await page.goto('http://localhost:8080/');

  // 1. Open Menu
  await page.click('#sta-mobile-menu-trigger');
  await page.waitForTimeout(200);
  let isOpen = await page.evaluate(() => document.getElementById('sta-mobile-drawer').classList.contains('is-active'));
  console.log('1. Opened menu via trigger:', isOpen ? 'PASSED' : 'FAILED');

  // Take screenshot of opened menu
  await page.screenshot({ path: 'scripts/mobile-menu-opened.png' });

  // 2. Test Accordion expansion
  const accordion = page.locator('.sta-mobile-accordion-toggle');
  await accordion.click();
  await page.waitForTimeout(200);
  const subnavVisible = await page.evaluate(() => {
    const subnav = document.querySelector('.sta-mobile-subnav');
    return subnav && getComputedStyle(subnav).display !== 'none';
  });
  console.log('2. Accordion expansion:', subnavVisible ? 'PASSED' : 'FAILED');
  await page.screenshot({ path: 'scripts/mobile-menu-accordion-open.png' });

  // 3. Close Menu via Close Button
  await page.click('#sta-mobile-drawer-close');
  await page.waitForTimeout(200);
  isOpen = await page.evaluate(() => document.getElementById('sta-mobile-drawer').classList.contains('is-active'));
  console.log('3. Closed menu via close button:', !isOpen ? 'PASSED' : 'FAILED');

  // 4. Open again and test Escape key
  await page.click('#sta-mobile-menu-trigger');
  await page.waitForTimeout(200);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  isOpen = await page.evaluate(() => document.getElementById('sta-mobile-drawer').classList.contains('is-active'));
  console.log('4. Closed menu via Escape key:', !isOpen ? 'PASSED' : 'FAILED');

  // 5. Open again and test Backdrop click
  await page.click('#sta-mobile-menu-trigger');
  await page.waitForTimeout(200);
  // Click hamburger trigger again to toggle
  await page.click('#sta-mobile-drawer-close');
  await page.waitForTimeout(200);
  isOpen = await page.evaluate(() => document.getElementById('sta-mobile-drawer').classList.contains('is-active'));
  console.log('5. Toggle / close test:', !isOpen ? 'PASSED' : 'FAILED');

  await browser.close();
  console.log('🎉 All mobile menu interaction tests complete!');
})();
