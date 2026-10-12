const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' });

  const desktopCheck = await page.evaluate(() => {
    const desktopNav = document.querySelector('.sta-desktop-nav');
    const mobileBtn = document.getElementById('sta-mobile-menu-trigger');
    const drawer = document.getElementById('sta-mobile-drawer');

    const dNavVisible = desktopNav && window.getComputedStyle(desktopNav).display !== 'none';
    const mBtnHidden = mobileBtn && window.getComputedStyle(mobileBtn).display === 'none';
    const drawerHidden = drawer && window.getComputedStyle(drawer).display === 'none';

    return {
      desktopNavVisible: dNavVisible,
      mobileToggleHidden: mBtnHidden,
      drawerHidden: drawerHidden,
      docWidth: document.documentElement.scrollWidth,
      vpWidth: 1280
    };
  });

  console.log('Desktop 1280x800 check:', desktopCheck);
  if (!desktopCheck.desktopNavVisible || !desktopCheck.mobileToggleHidden || !desktopCheck.drawerHidden) {
    console.error('Desktop nav check failed!');
    process.exit(1);
  }
  console.log('✅ Desktop navigation verified successfully without regression.');
  await browser.close();
})();
