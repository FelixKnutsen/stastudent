const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();

  console.log('--- 1. Testing Initial State (before scroll) ---');
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' });

  const initialHeader = await page.evaluate(() => {
    const header = document.querySelector('.sta-header');
    const drawer = document.getElementById('sta-mobile-drawer');
    const backdrop = document.getElementById('sta-mobile-backdrop');
    const trigger = document.getElementById('sta-mobile-menu-trigger');

    const hStyle = window.getComputedStyle(header);
    const dStyle = window.getComputedStyle(drawer);
    const bStyle = window.getComputedStyle(backdrop);

    return {
      headerPosition: hStyle.position,
      headerTop: hStyle.top,
      headerZIndex: hStyle.zIndex,
      headerHeight: header.offsetHeight,
      headerOverflow: hStyle.overflow,
      drawerDisplay: dStyle.display,
      backdropDisplay: bStyle.display,
      triggerAriaExpanded: trigger.getAttribute('aria-expanded'),
      triggerAriaControls: trigger.getAttribute('aria-controls')
    };
  });
  console.log('Initial Header & Drawer:', initialHeader);

  console.log('\n--- 2. Open Menu at Top (y=0) ---');
  await page.click('#sta-mobile-menu-trigger');
  await page.waitForTimeout(300);

  const openedTop = await page.evaluate(() => {
    const drawer = document.getElementById('sta-mobile-drawer');
    const backdrop = document.getElementById('sta-mobile-backdrop');
    const trigger = document.getElementById('sta-mobile-menu-trigger');
    const dRect = drawer.getBoundingClientRect();
    const bRect = backdrop.getBoundingClientRect();
    const dStyle = window.getComputedStyle(drawer);
    const bStyle = window.getComputedStyle(backdrop);
    const bodyStyle = window.getComputedStyle(document.body);

    return {
      drawerRect: { x: dRect.x, y: dRect.y, width: dRect.width, height: dRect.height, top: dRect.top, bottom: dRect.bottom },
      backdropRect: { x: bRect.x, y: bRect.y, width: bRect.width, height: bRect.height },
      drawerDisplay: dStyle.display,
      drawerPosition: dStyle.position,
      drawerZIndex: dStyle.zIndex,
      backdropDisplay: bStyle.display,
      backdropPosition: bStyle.position,
      backdropZIndex: bStyle.zIndex,
      bodyOverflow: bodyStyle.overflow,
      triggerAriaExpanded: trigger.getAttribute('aria-expanded'),
      viewport: { innerWidth: window.innerWidth, innerHeight: window.innerHeight }
    };
  });
  console.log('Opened at Top:', openedTop);

  console.log('\n--- 3. Close Menu at Top ---');
  await page.click('#sta-mobile-drawer-close');
  await page.waitForTimeout(300);

  const closedTop = await page.evaluate(() => {
    const drawer = document.getElementById('sta-mobile-drawer');
    const bodyStyle = window.getComputedStyle(document.body);
    const trigger = document.getElementById('sta-mobile-menu-trigger');
    return {
      drawerDisplay: window.getComputedStyle(drawer).display,
      bodyOverflow: bodyStyle.overflow,
      triggerAriaExpanded: trigger.getAttribute('aria-expanded')
    };
  });
  console.log('Closed at Top:', closedTop);

  console.log('\n--- 4. Scroll Down 500px and Inspect ---');
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(300);

  const scrolledBeforeOpen = await page.evaluate(() => {
    const header = document.querySelector('.sta-header');
    const hRect = header.getBoundingClientRect();
    return {
      scrollY: window.scrollY,
      headerRect: { top: hRect.top, bottom: hRect.bottom, height: hRect.height }
    };
  });
  console.log('Scrolled 500px Before Menu Open:', scrolledBeforeOpen);

  console.log('\n--- 5. Open Menu While Scrolled 500px ---');
  await page.click('#sta-mobile-menu-trigger');
  await page.waitForTimeout(300);

  const openedScrolled = await page.evaluate(() => {
    const drawer = document.getElementById('sta-mobile-drawer');
    const backdrop = document.getElementById('sta-mobile-backdrop');
    const dRect = drawer.getBoundingClientRect();
    const bRect = backdrop.getBoundingClientRect();
    const bodyStyle = window.getComputedStyle(document.body);
    const trigger = document.getElementById('sta-mobile-menu-trigger');

    return {
      scrollY: window.scrollY,
      drawerRect: { x: dRect.x, y: dRect.y, width: dRect.width, height: dRect.height, top: dRect.top, bottom: dRect.bottom },
      backdropRect: { x: bRect.x, y: bRect.y, width: bRect.width, height: bRect.height, top: bRect.top, bottom: bRect.bottom },
      bodyOverflow: bodyStyle.overflow,
      triggerAriaExpanded: trigger.getAttribute('aria-expanded'),
      viewportHeight: window.innerHeight
    };
  });
  console.log('Opened While Scrolled 500px:', openedScrolled);

  console.log('\n--- 6. Test Accordion Submenu While Scrolled ---');
  const accordionBtn = page.locator('.sta-mobile-accordion-toggle');
  await accordionBtn.click();
  await page.waitForTimeout(300);

  const accordionExpanded = await page.evaluate(() => {
    const subnav = document.querySelector('.sta-mobile-subnav');
    const drawer = document.getElementById('sta-mobile-drawer');
    const btn = document.querySelector('.sta-mobile-accordion-toggle');
    const subnavItems = subnav.querySelectorAll('li');
    return {
      ariaExpanded: btn.getAttribute('aria-expanded'),
      subnavDisplay: window.getComputedStyle(subnav).display,
      subnavItemCount: subnavItems.length,
      drawerScrollHeight: drawer.scrollHeight,
      drawerClientHeight: drawer.clientHeight,
      isDrawerScrollable: drawer.scrollHeight > drawer.clientHeight
    };
  });
  console.log('Accordion Submenu Expanded:', accordionExpanded);

  // Close accordion
  await accordionBtn.click();
  await page.waitForTimeout(200);
  const accordionCollapsed = await page.evaluate(() => {
    const subnav = document.querySelector('.sta-mobile-subnav');
    const btn = document.querySelector('.sta-mobile-accordion-toggle');
    return {
      ariaExpanded: btn.getAttribute('aria-expanded'),
      subnavDisplay: window.getComputedStyle(subnav).display
    };
  });
  console.log('Accordion Submenu Collapsed:', accordionCollapsed);

  // Re-open accordion for link test
  await accordionBtn.click();
  await page.waitForTimeout(200);

  console.log('\n--- 7. Close Menu While Scrolled and Check Scroll Restoration ---');
  await page.click('#sta-mobile-drawer-close');
  await page.waitForTimeout(300);

  const closedScrolled = await page.evaluate(() => {
    return {
      scrollY: window.scrollY,
      bodyOverflow: window.getComputedStyle(document.body).overflow
    };
  });
  console.log('Closed While Scrolled:', closedScrolled);

  console.log('\n--- 8. Test Navigation Between Pages via Mobile Drawer ---');
  // Open menu, click a link, verify navigation and drawer state
  await page.click('#sta-mobile-menu-trigger');
  await page.waitForTimeout(300);

  // Click on "Verv" (/rad-styrer-og-utvalg)
  await page.click('.sta-mobile-nav-link[href*="rad-styrer-og-utvalg"]');
  await page.waitForLoadState('networkidle');

  const afterNavigation = await page.evaluate(() => {
    const drawer = document.getElementById('sta-mobile-drawer');
    const backdrop = document.getElementById('sta-mobile-backdrop');
    const trigger = document.getElementById('sta-mobile-menu-trigger');
    const bodyStyle = window.getComputedStyle(document.body);

    return {
      currentUrl: window.location.pathname,
      drawerDisplay: window.getComputedStyle(drawer).display,
      backdropDisplay: window.getComputedStyle(backdrop).display,
      bodyOverflow: bodyStyle.overflow,
      triggerAriaExpanded: trigger ? trigger.getAttribute('aria-expanded') : null
    };
  });
  console.log('After Page Navigation to /rad-styrer-og-utvalg/:', afterNavigation);

  // Re-open menu on the new page
  await page.click('#sta-mobile-menu-trigger');
  await page.waitForTimeout(300);
  const reOpenedOnNewPage = await page.evaluate(() => {
    const drawer = document.getElementById('sta-mobile-drawer');
    return {
      drawerDisplay: window.getComputedStyle(drawer).display,
      drawerRect: drawer.getBoundingClientRect()
    };
  });
  console.log('Re-opened on New Page:', reOpenedOnNewPage);
  await page.click('#sta-mobile-drawer-close');
  await page.waitForTimeout(200);

  console.log('\n--- 9. Test Viewport Resizing (Mobile -> Desktop -> Mobile) ---');
  // Open on mobile
  await page.click('#sta-mobile-menu-trigger');
  await page.waitForTimeout(200);
  console.log('Menu opened on 375px');

  // Resize to desktop (1280x800)
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.waitForTimeout(400);

  const desktopResizeState = await page.evaluate(() => {
    const drawer = document.getElementById('sta-mobile-drawer');
    const backdrop = document.getElementById('sta-mobile-backdrop');
    const trigger = document.getElementById('sta-mobile-menu-trigger');
    const desktopNav = document.querySelector('.sta-desktop-nav');
    return {
      drawerDisplay: window.getComputedStyle(drawer).display,
      backdropDisplay: window.getComputedStyle(backdrop).display,
      bodyOverflow: window.getComputedStyle(document.body).overflow,
      triggerDisplay: window.getComputedStyle(trigger).display,
      desktopNavDisplay: window.getComputedStyle(desktopNav).display
    };
  });
  console.log('State After Resizing to Desktop (1280px):', desktopResizeState);

  // Resize back to mobile (375x812)
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(400);

  const backToMobileState = await page.evaluate(() => {
    const drawer = document.getElementById('sta-mobile-drawer');
    const trigger = document.getElementById('sta-mobile-menu-trigger');
    return {
      drawerDisplay: window.getComputedStyle(drawer).display,
      triggerDisplay: window.getComputedStyle(trigger).display,
      triggerAriaExpanded: trigger.getAttribute('aria-expanded')
    };
  });
  console.log('State After Resizing Back to Mobile (375px):', backToMobileState);

  // Can we open it again?
  await page.click('#sta-mobile-menu-trigger');
  await page.waitForTimeout(200);
  const reOpenAfterResize = await page.evaluate(() => {
    const drawer = document.getElementById('sta-mobile-drawer');
    return { drawerDisplay: window.getComputedStyle(drawer).display };
  });
  console.log('Re-open after returning to mobile:', reOpenAfterResize);
  await page.click('#sta-mobile-drawer-close');

  console.log('\n--- 10. Test Landscape Mobile Viewport (812x375) ---');
  await page.setViewportSize({ width: 812, height: 375 });
  await page.waitForTimeout(300);

  await page.click('#sta-mobile-menu-trigger');
  await page.waitForTimeout(200);

  // Expand accordion
  await page.click('.sta-mobile-accordion-toggle');
  await page.waitForTimeout(200);

  const landscapeState = await page.evaluate(() => {
    const drawer = document.getElementById('sta-mobile-drawer');
    const nav = document.querySelector('.sta-mobile-nav');
    const dRect = drawer.getBoundingClientRect();
    const lastSublink = drawer.querySelector('.sta-mobile-sublink:last-child');
    const lRect = lastSublink ? lastSublink.getBoundingClientRect() : null;

    return {
      viewport: { width: window.innerWidth, height: window.innerHeight },
      drawerRect: { top: dRect.top, bottom: dRect.bottom, height: dRect.height },
      navScrollHeight: nav ? nav.scrollHeight : 0,
      navClientHeight: nav ? nav.clientHeight : 0,
      canScrollInsideNav: nav ? nav.scrollHeight > nav.clientHeight : false,
      lastSublinkFound: !!lastSublink,
      lastSublinkBottom: lRect ? lRect.bottom : null
    };
  });
  console.log('Landscape Mobile State:', landscapeState);

  // Scroll down inside nav to reach bottom item
  await page.evaluate(() => {
    const nav = document.querySelector('.sta-mobile-nav');
    if (nav) nav.scrollTop = nav.scrollHeight;
  });
  await page.waitForTimeout(200);

  const landscapeScrolledState = await page.evaluate(() => {
    const lastSublink = document.querySelector('.sta-mobile-sublink:last-child');
    const rect = lastSublink.getBoundingClientRect();
    return {
      lastSublinkVisibleInViewport: rect.top >= 0 && rect.bottom <= window.innerHeight,
      rect
    };
  });
  console.log('Landscape Drawer Scrolled to Bottom:', landscapeScrolledState);

  await browser.close();
  console.log('\nAudit test script complete!');
})();
