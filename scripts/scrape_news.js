const fs = require('fs');
const { JSDOM } = require('jsdom');

async function scrapeArchivePages() {
  const allArticles = [];

  for (let pageNum = 1; pageNum <= 19; pageNum++) {
    const url = pageNum === 1 
      ? 'https://stastudent.no/category/nyheter/' 
      : `https://stastudent.no/category/nyheter/page/${pageNum}/`;
    
    console.log(`Fetching page ${pageNum}: ${url}`);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log(`Page ${pageNum} returned ${res.status}`);
        break;
      }
      const html = await res.text();
      const dom = new JSDOM(html);
      const doc = dom.window.document;

      // In WordPress Hestia theme or Elementor, articles are inside <article> or similar
      const articleEls = Array.from(doc.querySelectorAll('article'));
      console.log(`  Found ${articleEls.length} articles on page ${pageNum}`);

      articleEls.forEach((art, idx) => {
        const titleEl = art.querySelector('h1, h2, .entry-title');
        const title = titleEl ? titleEl.textContent.trim().replace(/\s+/g, ' ') : '';
        const link = art.querySelector('a')?.href || titleEl?.querySelector('a')?.href || '';
        
        const dateEl = art.querySelector('time, .entry-date, .posted-on, .date');
        const date = dateEl ? dateEl.textContent.trim() : '';

        const imgEl = art.querySelector('img');
        const img = imgEl ? imgEl.src : '';

        const excerptEl = art.querySelector('.entry-summary, .entry-content, p');
        const excerpt = excerptEl ? excerptEl.textContent.trim().replace(/\s+/g, ' ') : '';

        // extract slug from link
        let slug = '';
        if (link) {
          const match = link.match(/stastudent\.no(?:\/\d{4}\/\d{2}\/\d{2})?\/([^\/]+)\/?$/);
          slug = match ? match[1] : '';
        }

        if (title) {
          allArticles.push({
            pageNum,
            title,
            link,
            slug: slug || `article-${pageNum}-${idx}`,
            date,
            imageUrl: img,
            excerpt: excerpt.slice(0, 300)
          });
        }
      });
    } catch (err) {
      console.error(`Error on page ${pageNum}:`, err.message);
    }
  }

  console.log(`\nTotal articles extracted: ${allArticles.length}`);
  fs.writeFileSync('scripts/all_news_articles.json', JSON.stringify(allArticles, null, 2));
}

scrapeArchivePages();
