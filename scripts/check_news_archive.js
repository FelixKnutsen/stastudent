const fs = require('fs');

async function checkNewsArchive() {
  const res = await fetch('https://stastudent.no/category/nyheter/');
  const html = await res.text();
  fs.writeFileSync('scripts/news_archive_p1.html', html);
  console.log('Page 1 length:', html.length);

  // find pagination links
  const pageLinks = html.match(/https:\/\/stastudent\.no\/category\/nyheter\/page\/\d+\//gi) || [];
  console.log('Page links:', [...new Set(pageLinks)]);

  // check posts in sitemap
  const sitemapRes = await fetch('https://stastudent.no/post-sitemap.xml');
  const sitemapXml = await sitemapRes.text();
  fs.writeFileSync('scripts/post-sitemap.xml', sitemapXml);
  const posts = sitemapXml.match(/<loc>[^<]+<\/loc>/g) || [];
  console.log('Total post URLs in post-sitemap.xml:', posts.length);
}

checkNewsArchive();
