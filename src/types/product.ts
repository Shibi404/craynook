export type ProductCategory =
  | 'Bundles'
  | 'Alphabet'
  | 'Math'
  | 'Coloring'
  | 'Motor Skills';

export type FilterCategory = 'All' | ProductCategory;

export type PaperFormat = 'US Letter (8.5×11")' | 'A4';

export interface Product {
  id: string;
  slug: string;
  dodoProductId: string;
  title: string;
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  ageRange: string;
  pageCount: number;
  category: ProductCategory;
  formats: PaperFormat[];
  coverImage: string;
  previewImages: string[];
  description: string;
  highlights: string[];
  isBundle: boolean;
  badge?: string;
  accentColor: 'coral' | 'sage' | 'marigold' | 'sky';
  bundleIncludes?: string[];
}
