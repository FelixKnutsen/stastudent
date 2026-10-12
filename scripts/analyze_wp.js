const fs = require('fs');

const html = fs.readFileSync('scripts/home.html', 'utf8');

const gen = html.match(/name="generator" content="([^"]+)"/i);
console.log('WordPress Generator:', gen ? gen[1] : 'Not specified in meta');

const themes = new Set();
for (const m of html.matchAll(/\/wp-content\/themes\/([a-zA-Z0-9_-]+)/g)) {
  themes.add(m[1]);
}
console.log('Themes detected:', Array.from(themes));

const plugins = new Set();
for (const m of html.matchAll(/\/wp-content\/plugins\/([a-zA-Z0-9_-]+)/g)) {
  plugins.add(m[1]);
}
console.log('Plugins detected:', Array.from(plugins));
