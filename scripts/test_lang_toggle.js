const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('--- Testing WordPress http://localhost:8080/ ---');
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' });

  // Get initial lang button href and text
  const initial = await page.evaluate(() => {
    const btn = document.querySelector('.sta-lang-btn');
    const heroTitle = document.querySelector('.sta-hero-title');
    const navLinks = Array.from(document.querySelectorAll('.sta-nav-link')).map(a => a.textContent.trim());
    return {
      btnText: btn ? btn.textContent.trim() : null,
      btnHref: btn ? btn.getAttribute('href') : null,
      heroTitle: heroTitle ? heroTitle.textContent.trim() : null,
      navLinks
    };
  });
  console.log('Initial (WP):', initial);

  // Click the lang button
  console.log('Clicking language button on WP...');
  await page.click('.sta-lang-btn');
  await page.waitForLoadState('networkidle');

  const afterClick = await page.evaluate(() => {
    const btn = document.querySelector('.sta-lang-btn');
    const heroTitle = document.querySelector('.sta-hero-title');
    const navLinks = Array.from(document.querySelectorAll('.sta-nav-link')).map(a => a.textContent.trim());
    return {
      currentUrl: window.location.href,
      btnText: btn ? btn.textContent.trim() : null,
      btnHref: btn ? btn.getAttribute('href') : null,
      heroTitle: heroTitle ? heroTitle.textContent.trim() : null,
      navLinks
    };
  });
  console.log('After Click (WP):', afterClick);

  await browser.close();
})();
