const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();

  await page.goto('https://stastudent.no/', { waitUntil: 'networkidle' });

  const beforeScroll = await page.evaluate(() => {
    const header = document.querySelector('header, .site-header, nav.navbar');
    const toggle = document.querySelector('button.navbar-toggle, .navbar-toggler, .menu-toggle');
    const headerStyle = header ? window.getComputedStyle(header) : null;
    const toggleStyle = toggle ? window.getComputedStyle(toggle) : null;
    return {
      headerTag: header ? header.tagName : null,
      headerClass: header ? header.className : null,
      headerPosition: headerStyle ? headerStyle.position : null,
      headerTop: headerStyle ? headerStyle.top : null,
      headerZIndex: headerStyle ? headerStyle.zIndex : null,
      headerHeight: header ? header.getBoundingClientRect().height : null,
      toggleRect: toggle ? toggle.getBoundingClientRect() : null
    };
  });
  console.log('Original Header Before Scroll:', beforeScroll);

  // Scroll down 400px
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(300);

  const afterScroll = await page.evaluate(() => {
    const header = document.querySelector('header, .site-header, nav.navbar');
    const rect = header ? header.getBoundingClientRect() : null;
    const headerStyle = header ? window.getComputedStyle(header) : null;
    return {
      scrollY: window.scrollY,
      headerPosition: headerStyle ? headerStyle.position : null,
      headerRect: rect
    };
  });
  console.log('Original Header After Scroll 400px:', afterScroll);

  // Click toggle button
  await page.click('button.navbar-toggle');
  await page.waitForTimeout(600);

  const menuState = await page.evaluate(() => {
    const nav = document.querySelector('#main-navigation, .navbar-collapse');
    const toggle = document.querySelector('button.navbar-toggle');
    const header = document.querySelector('header, .site-header, nav.navbar');
    const navStyle = nav ? window.getComputedStyle(nav) : null;
    const navRect = nav ? nav.getBoundingClientRect() : null;
    const toggleRect = toggle ? toggle.getBoundingClientRect() : null;
    const headerRect = header ? header.getBoundingClientRect() : null;
    const bodyOverflow = window.getComputedStyle(document.body).overflow;

    return {
      navRect,
      toggleRect,
      headerRect,
      navPosition: navStyle ? navStyle.position : null,
      navTop: navStyle ? navStyle.top : null,
      navZIndex: navStyle ? navStyle.zIndex : null,
      bodyOverflow,
      toggleAriaExpanded: toggle ? toggle.getAttribute('aria-expanded') : null
    };
  });
  console.log('Original Menu State after toggle while scrolled:', menuState);

  // Click toggle again
  await page.click('button.navbar-toggle');
  await page.waitForTimeout(400);

  const menuClosed = await page.evaluate(() => {
    const nav = document.querySelector('#main-navigation, .navbar-collapse');
    return {
      navDisplay: nav ? window.getComputedStyle(nav).display : null,
      navHeight: nav ? nav.getBoundingClientRect().height : null
    };
  });
  console.log('Original Menu State after 2nd toggle:', menuClosed);

  await browser.close();
})();
