const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Mini static server for public_html testing
function startStaticServer(dir, port) {
  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    let filePath = path.join(dir, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found: ' + reqPath);
      return;
    }

    const ext = path.extname(filePath);
    let contentType = 'text/html';
    if (ext === '.css') contentType = 'text/css';
    if (ext === '.js') contentType = 'application/javascript';
    if (ext === '.svg') contentType = 'image/svg+xml';
    if (ext === '.png') contentType = 'image/png';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fs.readFileSync(filePath));
  });

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

(async () => {
  console.log('🧪 Starting Language Switcher Verification Pass...');
  const browser = await chromium.launch({ headless: true });

  try {
    // =========================================================================
    // PART 1: TEST WORDPRESS (http://localhost:8080)
    // =========================================================================
    console.log('\n--- PART 1: WordPress Local Server (http://localhost:8080) ---');
    const page = await browser.newPage();
    // Clear cookies
    await page.context().clearCookies();

    // 1. Visit Homepage (Norwegian)
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' });
    const noState = await page.evaluate(() => {
      const btn = document.querySelector('.sta-desktop-nav ~ * .sta-lang-btn, .sta-header .sta-lang-btn');
      const navLinks = Array.from(document.querySelectorAll('.sta-desktop-nav .sta-nav-link')).map(a => a.textContent.trim());
      const vervTitle = document.querySelector('.sta-verv-banner-title');
      return {
        btnText: btn ? btn.textContent.trim() : null,
        btnHref: btn ? btn.getAttribute('href') : null,
        navLinks,
        vervTitle: vervTitle ? vervTitle.textContent.trim() : null
      };
    });
    console.log('1. Homepage (Norwegian):', noState);

    if (!noState.btnText.includes('English')) throw new Error('Expected button to say English on Norwegian page');
    if (!noState.navLinks.includes('Hjem')) throw new Error('Expected Norwegian nav links');

    // 2. Click Language Switcher to switch to English
    console.log('2. Clicking language button to switch to English...');
    await page.click('.sta-header .sta-lang-btn');
    await page.waitForLoadState('networkidle');

    const enState = await page.evaluate(() => {
      const btn = document.querySelector('.sta-desktop-nav ~ * .sta-lang-btn, .sta-header .sta-lang-btn');
      const navLinks = Array.from(document.querySelectorAll('.sta-desktop-nav .sta-nav-link')).map(a => a.textContent.trim());
      const vervTitle = document.querySelector('.sta-verv-banner-title');
      return {
        url: window.location.href,
        btnText: btn ? btn.textContent.trim() : null,
        btnHref: btn ? btn.getAttribute('href') : null,
        navLinks,
        vervTitle: vervTitle ? vervTitle.textContent.trim() : null
      };
    });
    console.log('2. After switching to English:', enState);

    if (!enState.url.includes('/en')) throw new Error('Expected URL to contain /en/');
    if (!enState.btnText.includes('Norsk')) throw new Error('Expected button to offer switching to Norwegian');
    if (!enState.navLinks.includes('Home')) throw new Error('Expected English nav links');

    // 3. Click Language Switcher again to switch back to Norwegian
    console.log('3. Clicking language button to switch back to Norwegian...');
    await page.click('.sta-header .sta-lang-btn');
    await page.waitForLoadState('networkidle');

    const backToNo = await page.evaluate(() => {
      const btn = document.querySelector('.sta-desktop-nav ~ * .sta-lang-btn, .sta-header .sta-lang-btn');
      const navLinks = Array.from(document.querySelectorAll('.sta-desktop-nav .sta-nav-link')).map(a => a.textContent.trim());
      return {
        url: window.location.href,
        btnText: btn ? btn.textContent.trim() : null,
        navLinks
      };
    });
    console.log('3. After switching back to Norwegian:', backToNo);
    if (!backToNo.navLinks.includes('Hjem')) throw new Error('Expected Norwegian nav links after toggle back');

    // 4. Test Mobile Drawer Language Switcher on WordPress
    console.log('4. Testing Mobile Drawer Language Switcher on WordPress...');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' });
    
    // Open drawer
    await page.click('#sta-mobile-menu-trigger');
    await page.waitForSelector('#sta-mobile-drawer.is-active');

    // Click mobile drawer language button
    await page.click('#sta-mobile-drawer .sta-lang-btn');
    await page.waitForLoadState('networkidle');

    const mobileEnState = await page.evaluate(() => {
      return {
        url: window.location.href,
        drawerBtn: document.querySelector('#sta-mobile-drawer .sta-lang-btn') ? document.querySelector('#sta-mobile-drawer .sta-lang-btn').textContent.trim() : null
      };
    });
    console.log('4. Mobile after toggle to English:', mobileEnState);
    if (!mobileEnState.url.includes('/en')) throw new Error('Expected mobile toggle to switch to /en/');

    await page.close();

    // =========================================================================
    // PART 2: TEST VERCEL STATIC BUILD (public_html/ on port 3000)
    // =========================================================================
    console.log('\n--- PART 2: Vercel Static Build (public_html/) ---');
    const staticDir = path.resolve(__dirname, '../sta-wordpress/public_html');
    const staticServer = await startStaticServer(staticDir, 3000);

    const staticPage = await browser.newPage();
    await staticPage.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

    const staticNo = await staticPage.evaluate(() => {
      const btn = document.querySelector('.sta-header .sta-lang-btn');
      const navLinks = Array.from(document.querySelectorAll('.sta-desktop-nav .sta-nav-link')).map(a => a.textContent.trim());
      return {
        btnText: btn ? btn.textContent.trim() : null,
        navLinks
      };
    });
    console.log('1. Static Homepage (Norwegian):', staticNo);

    // Click language button on static site
    console.log('2. Clicking language button on static site...');
    await staticPage.click('.sta-header .sta-lang-btn');
    await staticPage.waitForLoadState('networkidle');

    const staticEn = await staticPage.evaluate(() => {
      const btn = document.querySelector('.sta-header .sta-lang-btn');
      const navLinks = Array.from(document.querySelectorAll('.sta-desktop-nav .sta-nav-link')).map(a => a.textContent.trim());
      const vervTitle = document.querySelector('.sta-verv-banner-title');
      return {
        url: window.location.href,
        btnText: btn ? btn.textContent.trim() : null,
        navLinks,
        vervTitle: vervTitle ? vervTitle.textContent.trim() : null
      };
    });
    console.log('2. Static site in English:', staticEn);
    if (!staticEn.url.includes('/en')) throw new Error('Expected static site URL to switch to /en/');
    if (!staticEn.navLinks.includes('Home')) throw new Error('Expected English nav links on static site');

    // Navigate to /en/lokaler/ on static site
    console.log('3. Checking /en/lokaler/ on static site...');
    await staticPage.goto('http://localhost:3000/en/lokaler/', { waitUntil: 'networkidle' });
    const lokalerEn = await staticPage.evaluate(() => {
      const h1 = document.querySelector('h1');
      const btn = document.querySelector('.sta-header .sta-lang-btn');
      return {
        url: window.location.href,
        h1: h1 ? h1.textContent.trim() : null,
        btnText: btn ? btn.textContent.trim() : null
      };
    });
    console.log('3. Static /en/lokaler/:', lokalerEn);
    if (!lokalerEn.h1.includes('Premises')) throw new Error('Expected /en/lokaler/ to have English heading');

    // Click language button on /en/lokaler/ to switch back to Norwegian /lokaler/
    console.log('4. Clicking language button on /en/lokaler/ to switch back to Norwegian...');
    await staticPage.click('.sta-header .sta-lang-btn');
    await staticPage.waitForLoadState('networkidle');

    const lokalerNo = await staticPage.evaluate(() => {
      const h1 = document.querySelector('h1');
      return {
        url: window.location.href,
        h1: h1 ? h1.textContent.trim() : null
      };
    });
    console.log('4. Static site back to Norwegian /lokaler/:', lokalerNo);
    if (lokalerNo.url.includes('/en/')) throw new Error('Expected /lokaler/ without /en/');

    await staticPage.close();
    staticServer.close();

    console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY! Both dynamic WordPress and static Vercel switch languages perfectly!');
  } finally {
    await browser.close();
  }
})();
