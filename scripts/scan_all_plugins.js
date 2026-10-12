const fs = require('fs');

const files = ['scripts/home.html', 'scripts/rad_styrer_og_utvalg.html', 'scripts/ledige_verv.html', 'scripts/news_archive_p1.html'];

const allPlugins = new Set();
const allThemes = new Set();

for (const file of files) {
  if (fs.existsSync(file)) {
    const html = fs.readFileSync(file, 'utf8');
    for (const m of html.matchAll(/\/wp-content\/plugins\/([a-zA-Z0-9_-]+)/g)) {
      allPlugins.add(m[1]);
    }
    for (const m of html.matchAll(/\/wp-content\/themes\/([a-zA-Z0-9_-]+)/g)) {
      allThemes.add(m[1]);
    }
  }
}

console.log('All Detected Themes:', Array.from(allThemes));
console.log('All Detected Plugins:', Array.from(allPlugins));
