export interface NewsArticle {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly content: string;
  readonly publishedAt: string;
  readonly category: string;
  readonly imageUrl: string;
  readonly author?: string;
  readonly readingTimeMinutes?: number;
}
