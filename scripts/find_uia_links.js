const fs = require('fs');

async function findUiALinks() {
  const res = await fetch('https://www.uia.no/om-uia/organisasjon');
  const html = await res.text();
  fs.writeFileSync('scripts/uia_organisasjon.html', html);

  const links = html.match(/href="([^"]+)"/g) || [];
  const cleanLinks = links.map(l => l.replace('href="', '').replace('"', '')).filter(l => l.includes('styre') || l.includes('utvalg') || l.includes('nemnd') || l.includes('lmu') || l.includes('student'));
  console.log('Clean links found on uia.no/om-uia/organisasjon:');
  console.log([...new Set(cleanLinks)]);
}

findUiALinks();
