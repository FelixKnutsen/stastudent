const fs = require('fs');

async function checkStyrerOgUtvalg() {
  const res = await fetch('https://www.uia.no/om-uia/styrer-og-utvalg/');
  console.log('Status of /om-uia/styrer-og-utvalg/:', res.status);
  const html = await res.text();
  fs.writeFileSync('scripts/uia_styrer_og_utvalg.html', html);

  const links = html.match(/href="([^"]+)"/g) || [];
  const clean = links.map(l => l.replace('href="', '').replace('"', ''));
  console.log('Links in /om-uia/styrer-og-utvalg/:');
  console.log([...new Set(clean)].filter(l => l.includes('styrer-og-utvalg') || l.includes('universitetsstyret') || l.includes('klagenemnd') || l.includes('laeringsmiljo') || l.includes('skikkethet') || l.includes('pris') || l.includes('valgstyre')));
}

checkStyrerOgUtvalg();
