const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const pages = [
    '/',
    '/om-sta/',
    '/sta-styret/',
    '/studentparlamentet/',
    '/linjeforeninger/',
    '/studentaktiviteter/',
    '/lokaler/',
    '/engasjer-deg/'
  ];

  for (const p of pages) {
    console.log(`\n=== Testing ${p} ===`);
    // Norwegian
    await page.goto(`http://localhost:8080${p}`, { waitUntil: 'domcontentloaded' });
    const noTitle = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      const btn = document.querySelector('.sta-lang-btn');
      return {
        h1: h1 ? h1.innerText.replace(/\n/g, ' ') : null,
        btnText: btn ? btn.innerText : null,
        btnHref: btn ? btn.getAttribute('href') : null
      };
    });
    console.log('NO:', noTitle);

    // English
    await page.goto(`http://localhost:8080${p}?lang=en`, { waitUntil: 'domcontentloaded' });
    const enTitle = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      const btn = document.querySelector('.sta-lang-btn');
      const cookie = document.cookie;
      return {
        h1: h1 ? h1.innerText.replace(/\n/g, ' ') : null,
        btnText: btn ? btn.innerText : null,
        btnHref: btn ? btn.getAttribute('href') : null,
        cookie
      };
    });
    console.log('EN:', enTitle);
  }

  await browser.close();
})();
