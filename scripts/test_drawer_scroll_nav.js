const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 812, height: 375 } });
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' });

  await page.click('#sta-mobile-menu-trigger');
  await page.click('.sta-mobile-accordion-toggle');
  await page.waitForTimeout(300);

  // Scroll the nav element!
  await page.evaluate(() => {
    const nav = document.querySelector('.sta-mobile-nav');
    nav.scrollTop = nav.scrollHeight;
  });
  await page.waitForTimeout(300);

  const afterScrollNav = await page.evaluate(() => {
    const lastSublink = document.querySelector('.sta-mobile-sublink:last-child');
    const rect = lastSublink.getBoundingClientRect();
    const nav = document.querySelector('.sta-mobile-nav');
    return {
      navScrollTop: nav.scrollTop,
      lastSublinkRect: {
        top: rect.top,
        bottom: rect.bottom,
        height: rect.height
      },
      windowHeight: window.innerHeight,
      isFullyVisible: rect.top >= 0 && rect.bottom <= window.innerHeight
    };
  });
  console.log('After scrolling .sta-mobile-nav:', afterScrollNav);

  await browser.close();
})();
