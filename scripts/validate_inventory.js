const acts = require('./extracted_activities.json');
console.log('Total activities:', acts.length);
let missingImg = 0;
let missingDesc = 0;
let missingEmail = 0;

acts.forEach((a, i) => {
  console.log(`${i+1}. [${a.category}] ${a.name}`);
  if (!a.imageUrl) { missingImg++; console.log(`   MISSING IMAGE`); }
  if (!a.description) { missingDesc++; console.log(`   MISSING DESC`); }
  console.log(`   img: ${a.imageUrl ? a.imageUrl.slice(0, 60) : 'NONE'}`);
  console.log(`   desc: ${a.description ? a.description.slice(0, 60) + '...' : 'NONE'}`);
  console.log(`   email: ${a.email || 'NONE'}`);
  console.log(`   fb: ${a.facebookUrl || 'NONE'}`);
  console.log(`   ig: ${a.instagramUrl || 'NONE'}`);
});

console.log(`\nSummary: Total: ${acts.length}, Missing Img: ${missingImg}, Missing Desc: ${missingDesc}`);
