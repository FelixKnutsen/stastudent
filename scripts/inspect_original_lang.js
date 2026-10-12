const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://stastudent.no/', { waitUntil: 'domcontentloaded' });

  const originalLangInfo = await page.evaluate(() => {
    // Look for language switcher links/buttons
    const links = Array.from(document.querySelectorAll('a, button')).filter(el => {
      const text = el.textContent.toLowerCase();
      const href = el.getAttribute('href') || '';
      return text.includes('english') || text.includes('norsk') || href.includes('lang=') || href.includes('/en');
    });

    return links.map(el => ({
      text: el.textContent.trim(),
      tag: el.tagName,
      href: el.getAttribute('href'),
      className: el.className
    }));
  });

  console.log('Original stastudent.no language switcher elements:', originalLangInfo);

  // If there is an English link, click it and see where it goes
  const enLink = await page.$('a[href*="/en"], a:has-text("English")');
  if (enLink) {
    const href = await enLink.getAttribute('href');
    console.log('Found English link:', href);
    await enLink.click();
    await page.waitForLoadState('domcontentloaded');
    console.log('Navigated URL on original:', page.url());
  }

  await browser.close();
})();
