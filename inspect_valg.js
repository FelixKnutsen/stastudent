const fs = require('fs');
const html = fs.readFileSync('valgkomiteen_content.html', 'utf16le');
console.log('HTML length: ' + html.length);
const imgRegex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi;
let m;
while ((m = imgRegex.exec(html)) !== null) {
  console.log('IMG: ' + m[1]);
}
console.log('CLEAN TEXT:');
console.log(html.replace(/<style[\s\S]*?<\/style>/gi, '')
                .replace(/<script[\s\S]*?<\/script>/gi, '')
                .replace(/<[^>]+>/g, ' ')
                .replace(/\s+/g, ' ')
                .trim());
