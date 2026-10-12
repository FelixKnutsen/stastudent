const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

  await page.goto('http://localhost:8080/');

  const cssCheck = await page.evaluate(() => {
    const sheet = Array.from(document.styleSheets).find(s => s.href && s.href.includes('main.css'));
    if (!sheet) return { error: 'main.css sheet not found' };
    try {
      const rulesCount = sheet.cssRules.length;
      const lastRule = sheet.cssRules[rulesCount - 1].cssText;
      const sampleRules = Array.from(sheet.cssRules).slice(-10).map(r => r.selectorText || r.cssText.slice(0, 50));
      return { rulesCount, lastRule, sampleRules };
    } catch (e) {
      return { error: e.message };
    }
  });

  console.log('CSS CHECK:', cssCheck);
  await browser.close();
})();
