const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

  await page.goto('http://localhost:8080/studentaktiviteter/');
  const overflow = await page.evaluate(() => {
    const vp = 375;
    const elements = [];
    document.querySelectorAll('*').forEach(el => {
      if (el.scrollWidth > vp + 1 && el.tagName !== 'HTML' && el.tagName !== 'BODY') {
        elements.push({
          tag: el.tagName,
          id: el.id,
          className: el.className,
          scrollWidth: el.scrollWidth,
          offsetWidth: el.offsetWidth,
          text: el.innerText ? el.innerText.slice(0, 40).replace(/\n/g, ' ') : ''
        });
      }
    });
    return elements;
  });

  console.log('AKTIVITETER SCROLLWIDTH ELEMENTS:', JSON.stringify(overflow, null, 2));
  await browser.close();
})();
