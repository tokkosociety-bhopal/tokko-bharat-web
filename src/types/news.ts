export interface News {
  id: string;

  titleEn: string;
  titleHi: string;

  summaryEn: string;
  summaryHi: string;

  contentEn?: string;
  contentHi?: string;

  imageUrl: string;

  category: string;
  source?: string;

  slug: string;

  author?: string;

  isBreaking?: boolean;
  isTrending?: boolean;

  views?: number;

  createdAt: any;
  publishedAt?: any;
}