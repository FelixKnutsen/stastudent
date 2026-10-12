const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function analyzeHTML(filename) {
  const html = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
  const dom = new JSDOM(html);
  const document = dom.window.document;

  console.log(`=== ANALYZING ${filename} ===`);
  
  // Look for headings h1, h2, h3, h4
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
    tag: h.tagName,
    text: h.textContent.trim(),
    classes: h.className
  }));
  console.log(`Found ${headings.length} headings.`);
  
  // Look for tabs / toggles / accordions
  const tabs = Array.from(document.querySelectorAll('[class*="tab"], [class*="toggle"], [class*="accordion"]')).map(el => ({
    tag: el.tagName,
    class: el.className,
    text: el.textContent.trim().slice(0, 50)
  }));
  console.log(`Found ${tabs.length} tab/toggle/accordion elements.`);

  // Look for image elements
  const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
    src: img.src,
    alt: img.alt
  }));
  console.log(`Found ${imgs.length} images.`);

  return { document, html };
}

analyzeHTML('linjeforeninger.html');
analyzeHTML('studentaktiviteter.html');
