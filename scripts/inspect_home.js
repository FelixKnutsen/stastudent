const fs = require('fs');

async function inspectHome() {
  const res = await fetch('https://stastudent.no/');
  const html = await res.text();
  fs.writeFileSync('scripts/home.html', html);

  const imgs = html.match(/https:\/\/stastudent\.no\/wp-content\/uploads\/[^\s"']+\.(png|jpg|jpeg|svg|webp)/gi) || [];
  console.log('Unique images on homepage:', [...new Set(imgs)]);

  // Look for partner section
  const pIdx = html.toLowerCase().indexOf('samarbeid');
  console.log('samarbeid idx:', pIdx);
  if (pIdx !== -1) {
    console.log(html.slice(pIdx - 200, pIdx + 1500));
  }
}

inspectHome();
