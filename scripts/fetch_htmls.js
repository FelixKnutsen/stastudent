const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

async function main() {
  console.log('Fetching associations HTML...');
  const resAssoc = await fetch('https://stastudent.no/linjeforeninger/');
  const htmlAssoc = await resAssoc.text();
  fs.writeFileSync(path.join(__dirname, 'linjeforeninger.html'), htmlAssoc);

  console.log('Fetching activities HTML...');
  const resAct = await fetch('https://stastudent.no/studentaktiviteter/');
  const htmlAct = await resAct.text();
  fs.writeFileSync(path.join(__dirname, 'studentaktiviteter.html'), htmlAct);

  console.log('Both files fetched and written successfully.');
}

main().catch(console.error);
