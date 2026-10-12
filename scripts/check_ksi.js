const fs = require('fs');
const htmlAct = fs.readFileSync('scripts/studentaktiviteter.html', 'utf-8');

const kIdx = htmlAct.indexOf('(KSI)');
console.log('KSI idx:', kIdx);
if (kIdx !== -1) {
  console.log(htmlAct.slice(kIdx - 500, kIdx + 500));
}
