const fs = require('fs');

const articles = JSON.parse(fs.readFileSync('scripts/all_news_articles.json', 'utf8'));

// Preserve full content for the top articles if they match
const existingContent = {
  'stem-i-studentvalget-2026-na': 'Studentvalget er nå offisielt åpnet. Alle registrerte studenter ved Universitetet i Agder har rett til å stemme. Valget avgjør representantene til Studentparlamentet og universitetsstyret for neste akademiske år. Stem digitalt via studentvalget.no eller på de fysiske valgteltene på campus i Kristiansand og Grimstad.',
  'utlysning-av-valg-til-rad-styrer-og-utvalg-rsu-2026': 'STA utlyser nå ledige verv til Råd, Styrer og Utvalg for perioden 2026/2027. Som studentrepresentant får du delta i beslutningsprosesser og fremme studentenes interesser overfor universitetet. Alle studenter ved UiA kan stille som kandidat.',
  'studentvalget-2026': 'Valget til Studentparlamentet er den viktigste demokratiske prosessen for UiA-studenter. Her velges representantene som fremmer studentenes saker lokalt, regionalt og nasjonalt. Kandidater stiller til valg fra sitt fakultet.'
};

// Convert to NewsArticle objects
const fullArticles = articles.map((a, idx) => {
  // Extract date from URL if possible (e.g. /2026/04/13/)
  const match = a.link.match(/\/(\d{4})\/(\d{2})\/(\d{2})\//);
  let publishedAt = '2026-01-01T12:00:00Z';
  if (match) {
    publishedAt = `${match[1]}-${match[2]}-${match[3]}T12:00:00Z`;
  }
  return {
    id: String(idx + 1),
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    content: existingContent[a.slug] || (a.excerpt + ' Les mer om denne saken på stastudent.no.'),
    publishedAt: publishedAt,
    category: 'Nyheter',
    imageUrl: a.imageUrl || 'https://stastudent.no/wp-content/uploads/2026/04/bilde-til-valgomat-2-1024x683.jpg',
    author: 'STA',
    readingTimeMinutes: 3
  };
});

const tsContent = `import { NewsArticle } from "@/types/news";

export const NEWS_ARTICLES: readonly NewsArticle[] = ${JSON.stringify(fullArticles, null, 2)} as const;

export const SAMPLE_NEWS = NEWS_ARTICLES;
`;

fs.writeFileSync('src/content/news.ts', tsContent, 'utf8');
console.log('Successfully wrote', fullArticles.length, 'articles to src/content/news.ts');
