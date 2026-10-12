const fs = require('fs');
const { JSDOM } = require('jsdom');
const html = fs.readFileSync('scripts/rad_styrer_og_utvalg.html', 'utf-8');
const dom = new JSDOM(html);
const doc = dom.window.document;

const tabTitles = Array.from(doc.querySelectorAll('.elementor-tab-desktop-title'));
const tabContents = Array.from(doc.querySelectorAll('.elementor-tab-content'));

tabTitles.forEach((tt, idx) => {
  const title = tt.textContent.trim();
  const content = tabContents[idx];
  console.log('--------------------------------------------------');
  console.log('TITLE:', title);
  if (content) {
    console.log('TEXT:', content.textContent.trim().replace(/\s+/g, ' ').slice(0, 300));
    const links = Array.from(content.querySelectorAll('a')).map(a => a.textContent.trim() + ' => ' + a.href);
    console.log('LINKS:', links);
  }
});
