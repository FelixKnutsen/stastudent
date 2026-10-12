const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const res1 = await page.goto('http://localhost:8080/en/', { waitUntil: 'domcontentloaded' });
  console.log('/en/ status:', res1.status(), 'title:', await page.title());

  const res2 = await page.goto('http://localhost:8080/?lang=en', { waitUntil: 'domcontentloaded' });
  console.log('/?lang=en status:', res2.status(), 'title:', await page.title());

  await browser.close();
})();
