const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function auditPage(filename) {
  const html = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  console.log(`\n============================ ${filename} ============================`);

  // Let's find every element that has text that looks like an association/activity title
  // Look at all .elementor-tab-title, .elementor-toggle-title, .elementor-widget-heading
  // Look at all links (a tags)
  // Look at all images
  // Look at all .elementor-widget
  const widgets = Array.from(doc.querySelectorAll('.elementor-widget'));
  console.log(`Total widgets: ${widgets.length}`);

  // Group by widget type
  const typeCounts = {};
  widgets.forEach(w => {
    const t = w.getAttribute('data-widget_type') || 'unknown';
    typeCounts[t] = (typeCounts[t] || 0) + 1;
  });
  console.log('Widget types:', typeCounts);

  // Check all headings
  const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
    tag: h.tagName,
    text: h.textContent.trim().replace(/\s+/g, ' '),
    class: h.className
  }));
  console.log(`Total headings: ${headings.length}`);
  headings.forEach(h => {
    if (h.tag !== 'H1' && !h.text.includes('STA') && !h.text.includes('Studentorganisasjonen') && !h.text.includes('Meny')) {
      // console.log(`  <${h.tag}>: ${h.text}`);
    }
  });

  // Let's inspect all tabs / toggles content
  const tabTitles = Array.from(doc.querySelectorAll('.elementor-tab-title, .elementor-toggle-title')).map(t => t.textContent.trim().replace(/\s+/g, ' '));
  console.log(`Tab/toggle titles count: ${tabTitles.length}`);
  console.log('Sample tab/toggle titles:', tabTitles.slice(0, 20));

  // Let's inspect all email addresses found on the page!
  const emails = html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
  const uniqueEmails = [...new Set(emails)];
  console.log(`Unique emails found (${uniqueEmails.length}):`, uniqueEmails);

  // Let's inspect all facebook URLs found
  const fbLinks = html.match(/https?:\/\/(www\.)?(facebook|fb)\.com\/[a-zA-Z0-9._-]+/g) || [];
  const uniqueFb = [...new Set(fbLinks)];
  console.log(`Unique Facebook links (${uniqueFb.length})`);

  // Let's inspect all instagram URLs found
  const igLinks = html.match(/https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._-]+/g) || [];
  const uniqueIg = [...new Set(igLinks)];
  console.log(`Unique Instagram links (${uniqueIg.length})`);
}

auditPage('linjeforeninger.html');
auditPage('studentaktiviteter.html');
