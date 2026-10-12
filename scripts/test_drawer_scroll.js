const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 812, height: 375 } });
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' });

  await page.click('#sta-mobile-menu-trigger');
  await page.click('.sta-mobile-accordion-toggle');
  await page.waitForTimeout(300);

  const scrollInfo = await page.evaluate(() => {
    const drawer = document.getElementById('sta-mobile-drawer');
    const nav = document.querySelector('.sta-mobile-nav');
    const header = document.querySelector('.sta-mobile-drawer-header');
    const lastSublink = document.querySelector('.sta-mobile-sublink:last-child');

    return {
      drawer: {
        scrollHeight: drawer.scrollHeight,
        clientHeight: drawer.clientHeight,
        offsetHeight: drawer.offsetHeight,
        overflowY: window.getComputedStyle(drawer).overflowY
      },
      nav: {
        scrollHeight: nav.scrollHeight,
        clientHeight: nav.clientHeight,
        offsetHeight: nav.offsetHeight,
        overflowY: window.getComputedStyle(nav).overflowY
      },
      header: {
        offsetHeight: header.offsetHeight
      },
      lastSublinkRect: lastSublink.getBoundingClientRect(),
      windowHeight: window.innerHeight
    };
  });
  console.log('Scroll Info in Landscape 812x375:', scrollInfo);
  await browser.close();
})();
