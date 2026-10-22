const fs = require('fs');

let html = '';
try {
  html = fs.readFileSync('rad_content.html', 'utf16le');
} catch (e) {
  html = fs.readFileSync('rad_content.html', 'utf8');
}
let valgHtml = '';
try {
  valgHtml = fs.readFileSync('valgkomiteen_content.html', 'utf16le');
} catch (e) {
  valgHtml = fs.readFileSync('valgkomiteen_content.html', 'utf8');
}

console.log('--- RAD CONTENT DUMP ---');
// Match all headings and text blocks
const headingRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
let match;
let lastIndex = 0;
while ((match = headingRegex.exec(html)) !== null) {
  const headingText = match[2].replace(/<[^>]+>/g, '').trim();
  console.log(`\n### [H${match[1]}] ${headingText}`);
  
  // Get text up to next heading
  const nextHeading = html.indexOf('<h', match.index + match[0].length);
  const chunk = nextHeading !== -1 
    ? html.substring(match.index + match[0].length, nextHeading)
    : html.substring(match.index + match[0].length);
  
  // Extract paragraphs, list items, links
  const pRegex = /<(p|li|div)[^>]*>([\s\S]*?)<\/\1>/gi;
  let pm;
  while ((pm = pRegex.exec(chunk)) !== null) {
    const text = pm[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length > 2) {
      console.log(`  - ${text}`);
    }
  }

  // Extract links
  const aRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let am;
  while ((am = aRegex.exec(chunk)) !== null) {
    const ltext = am[2].replace(/<[^>]+>/g, '').trim();
    console.log(`    * LINK: "${ltext}" -> ${am[1]}`);
  }
}

console.log('\n=============================================');
console.log('--- VALGKOMITEEN CONTENT DUMP ---');
let vmatch;
while ((vmatch = headingRegex.exec(valgHtml)) !== null) {
  const headingText = vmatch[2].replace(/<[^>]+>/g, '').trim();
  console.log(`\n### [H${vmatch[1]}] ${headingText}`);
  const nextHeading = valgHtml.indexOf('<h', vmatch.index + vmatch[0].length);
  const chunk = nextHeading !== -1 
    ? valgHtml.substring(vmatch.index + vmatch[0].length, nextHeading)
    : valgHtml.substring(vmatch.index + vmatch[0].length);
  
  const pRegex = /<(p|li)[^>]*>([\s\S]*?)<\/\1>/gi;
  let pm;
  while ((pm = pRegex.exec(chunk)) !== null) {
    const text = pm[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length > 2) {
      console.log(`  - ${text}`);
    }
  }
  const aRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let am;
  while ((am = aRegex.exec(chunk)) !== null) {
    const ltext = am[2].replace(/<[^>]+>/g, '').trim();
    console.log(`    * LINK: "${ltext}" -> ${am[1]}`);
  }
}
