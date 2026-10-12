const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function deeplyInspect(filename) {
  const html = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  console.log(`\n================ INSPECTING ${filename} ================`);
  // Check all images and their nearest text/title
  const imgs = Array.from(doc.querySelectorAll('img')).map(img => {
    let parent = img.closest('.elementor-widget, .elementor-column, .ha-card');
    let title = parent ? parent.textContent.trim().slice(0, 80).replace(/\s+/g, ' ') : '';
    return { src: img.src, alt: img.alt, title };
  });
  console.log(`Images with context (${imgs.length}):`);
  imgs.forEach((img, idx) => {
    if (!img.src.includes('cropped-STA-logo') && !img.src.includes('logo_transparent') && !img.src.includes('STA-logo')) {
      console.log(`[${idx}] ${img.title} (img: ${img.src})`);
    }
  });

  // Also check all accordion/toggle titles or text widgets
  const allWidgets = Array.from(doc.querySelectorAll('.elementor-widget')).map(w => ({
    type: w.getAttribute('data-widget_type'),
    text: w.textContent.trim().slice(0, 100).replace(/\s+/g, ' ')
  }));
  console.log(`Total widgets in page: ${allWidgets.length}`);
}

deeplyInspect('linjeforeninger.html');
deeplyInspect('studentaktiviteter.html');
