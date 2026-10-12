const fs = require('fs');
const htmlAssoc = fs.readFileSync('scripts/linjeforeninger.html', 'utf-8');
const htmlAct = fs.readFileSync('scripts/studentaktiviteter.html', 'utf-8');

const pIdx = htmlAssoc.indexOf('Pixel');
console.log('Pixel context:', htmlAssoc.slice(pIdx - 400, pIdx + 400).match(/src="[^"]+"/g));

const kIdx = htmlAct.indexOf('Kristiansand Studentidrettslag');
console.log('KSI context:', htmlAct.slice(kIdx - 400, kIdx + 400).match(/src="[^"]+"/g));
