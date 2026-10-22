const fs = require('fs');

const html = fs.readFileSync('rad_content.html', 'utf16le');

// Let's dump the entire text cleaned
fs.writeFileSync('rad_clean.txt', html.replace(/<style[\s\S]*?<\/style>/gi, '')
                                      .replace(/<script[\s\S]*?<\/script>/gi, '')
                                      .replace(/<[^>]+>/g, '\n')
                                      .replace(/\n\s*\n/g, '\n'), 'utf8');

const vhtml = fs.readFileSync('valgkomiteen_content.html', 'utf16le');
fs.writeFileSync('valgkomiteen_clean.txt', vhtml.replace(/<style[\s\S]*?<\/style>/gi, '')
                                                .replace(/<script[\s\S]*?<\/script>/gi, '')
                                                .replace(/<[^>]+>/g, '\n')
                                                .replace(/\n\s*\n/g, '\n'), 'utf8');

console.log('Written rad_clean.txt and valgkomiteen_clean.txt');
