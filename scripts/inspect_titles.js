const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function inspectDetails(filename) {
  const html = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
  const dom = new JSDOM(html);
  const document = dom.window.document;

  console.log(`\n================== ${filename} ==================`);
  
  // Elementor or standard WordPress toggles
  // Check common classes
  const toggleTitles = Array.from(document.querySelectorAll('.elementor-tab-title, .et_pb_toggle_title, .vc_tta-panel-title, h2, h3, h4')).map(el => ({
    tag: el.tagName,
    class: el.className,
    text: el.textContent.trim().replace(/\s+/g, ' ')
  }));
  console.log('Sample titles/headings:');
  toggleTitles.forEach((t, i) => {
    if (t.text && t.text.length < 100) {
      console.log(`[${i}] <${t.tag} class="${t.class}"> ${t.text}`);
    }
  });
}

inspectDetails('linjeforeninger.html');
inspectDetails('studentaktiviteter.html');
