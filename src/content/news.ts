import { NewsArticle } from "@/types/news";

export const NEWS_ARTICLES: readonly NewsArticle[] = [
  {
    id: "1",
    slug: "stem-i-studentvalget-2026-na",
    title: "Stem i Studentvalget 2026",
    excerpt:
      "Nå er studentvalget i gang! Bruk stemmeretten din og bestem hvem som skal representere deg i Studentparlamentet.",
    content:
      "Studentvalget er nå offisielt åpnet. Alle registrerte studenter ved Universitetet i Agder har rett til å stemme. Valget avgjør representantene til Studentparlamentet og universitetsstyret for neste akademiske år. Stem digitalt via studentvalget.no eller på de fysiske valgteltene på campus i Kristiansand og Grimstad.",
    publishedAt: "2026-04-13T09:00:00Z",
    category: "Nyheter",
    imageUrl: "https://stastudent.no/wp-content/uploads/2026/04/bilde-til-valgomat-2-1024x683.jpg",
    author: "STA Styret",
    readingTimeMinutes: 3,
  },
  {
    id: "2",
    slug: "utlysning-av-valg-til-rad-styrer-og-utvalg-rsu-2026",
    title: "Nå kan du stille til Råd, Styrer og Utvalg (RSU) for 26/27!",
    excerpt:
      "Ønsker du verdifull erfaring, attest og innflytelse over studiehverdagen? Still til verv i råd, styrer og utvalg.",
    content:
      "STA utlyser nå ledige verv til Råd, Styrer og Utvalg for perioden 2026/2027. Som studentrepresentant får du delta i beslutningsprosesser og fremme studentenes interesser overfor universitetet. Alle studenter ved UiA kan stille som kandidat.",
    publishedAt: "2026-03-23T10:00:00Z",
    category: "Nyheter",
    imageUrl: "https://stastudent.no/wp-content/uploads/2025/08/Alle-gaende-smilende-1024x683.jpg",
    author: "Valgstyret",
    readingTimeMinutes: 4,
  },
  {
    id: "3",
    slug: "studentvalget-2026",
    title: "Utlysning av valg til Studentparlamentet og Fakultets-/Avdelingsstyret 2026",
    excerpt:
      "Vi søker engasjerte kandidater som brenner for studentvelferd, utdanningskvalitet og et levende campusmiljø.",
    content:
      "Valget til Studentparlamentet er den viktigste demokratiske prosessen for UiA-studenter. Her velges representantene som fremmer studentenes saker lokalt, regionalt og nasjonalt. Kandidater stiller til valg fra sitt fakultet.",
    publishedAt: "2026-02-16T08:30:00Z",
    category: "Nyheter",
    imageUrl: "https://stastudent.no/wp-content/uploads/2026/02/backdrop-og-logo-studentvalget-Presentasjon-1024x576.jpg",
    author: "STA Kommunikasjon",
    readingTimeMinutes: 5,
  },
] as const;

// Backward compat
export const SAMPLE_NEWS = NEWS_ARTICLES;
