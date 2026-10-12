const fs = require('fs');
const htmlAct = fs.readFileSync('scripts/studentaktiviteter.html', 'utf-8');
const kIdx = htmlAct.indexOf('(KSI)');
console.log(htmlAct.slice(kIdx - 1500, kIdx));
