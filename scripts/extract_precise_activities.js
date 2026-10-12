const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function extractPreciseActivities() {
  const htmlNo = fs.readFileSync(path.join(__dirname, 'studentaktiviteter.html'), 'utf-8');
  const domNo = new JSDOM(htmlNo);
  const docNo = domNo.window.document;

  const htmlEn = fs.readFileSync(path.join(__dirname, 'studentaktiviteter_en.html'), 'utf-8');
  const domEn = new JSDOM(htmlEn);
  const docEn = domEn.window.document;

  // Let's find every column or ha-card
  const items = [];

  // 1. HA Cards
  const haCards = Array.from(docNo.querySelectorAll('.elementor-widget-ha-card, .ha-card'));
  haCards.forEach(card => {
    const title = card.querySelector('.ha-card-title, h2, h3, h4')?.textContent.trim().replace(/\s+/g, ' ');
    if (!title || title.includes('STA')) return;

    const img = card.querySelector('img')?.src;
    const desc = card.querySelector('.ha-card-content, .elementor-text-editor, p')?.textContent.trim().replace(/\s+/g, ' ');

    const links = Array.from(card.querySelectorAll('a')).map(a => a.href);
    let email = links.find(l => l.includes('@'))?.replace('mailto:', '').replace('http://', '').replace(/\/$/, '');
    let fb = links.find(l => l.includes('facebook') || l.includes('fb.com'));
    let ig = links.find(l => l.includes('instagram'));
    let web = links.find(l => !l.includes('facebook') && !l.includes('instagram') && !l.includes('@') && !l.includes('#') && l.startsWith('http'));

    items.push({
      title,
      img,
      desc,
      email,
      facebookUrl: fb,
      instagramUrl: ig,
      websiteUrl: web
    });
  });

  // 2. Regular Elementor columns that contain an H4
  const columns = Array.from(docNo.querySelectorAll('.elementor-column'));
  columns.forEach(col => {
    const h4 = col.querySelector('h4');
    if (!h4) return;
    const title = h4.textContent.trim().replace(/\s+/g, ' ');
    if (items.some(i => i.title.toLowerCase() === title.toLowerCase())) return;

    const img = col.querySelector('img')?.src;
    
    // Description: could be in .elementor-text-editor or .elementor-tabs
    let desc = '';
    let descEn = '';
    const tabs = col.querySelector('.elementor-tabs');
    if (tabs) {
      const contents = Array.from(tabs.querySelectorAll('.elementor-tab-content'));
      if (contents[0]) desc = contents[0].textContent.trim().replace(/\s+/g, ' ');
      if (contents[1]) descEn = contents[1].textContent.trim().replace(/\s+/g, ' ');
    } else {
      const textEditor = col.querySelector('.elementor-text-editor');
      if (textEditor) desc = textEditor.textContent.trim().replace(/\s+/g, ' ');
    }

    const links = Array.from(col.querySelectorAll('a')).map(a => a.href);
    let email = links.find(l => l.includes('@'))?.replace('mailto:', '').replace('http://', '').replace(/\/$/, '');
    let fb = links.find(l => l.includes('facebook') || l.includes('fb.com'));
    let ig = links.find(l => l.includes('instagram'));
    let web = links.find(l => !l.includes('facebook') && !l.includes('instagram') && !l.includes('@') && !l.includes('#') && l.startsWith('http'));

    items.push({
      title,
      img,
      desc,
      descEn: descEn || undefined,
      email,
      facebookUrl: fb,
      instagramUrl: ig,
      websiteUrl: web
    });
  });

  console.log(`Extracted items count: ${items.length}`);
  items.forEach((it, idx) => {
    console.log(`[${idx+1}] ${it.title}`);
    console.log(`     img: ${it.img ? it.img.slice(0, 50) : 'MISSING'}`);
    console.log(`     desc: ${it.desc ? it.desc.slice(0, 50) + '...' : 'MISSING'}`);
    console.log(`     email: ${it.email || 'NONE'}`);
  });

  fs.writeFileSync(path.join(__dirname, 'precise_activities.json'), JSON.stringify(items, null, 2));
}

extractPreciseActivities();
