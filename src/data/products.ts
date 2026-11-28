import { Product, FilterCategory } from '@/types/product';

export const CATEGORIES: FilterCategory[] = [
  'All',
  'Alphabet',
  'Math',
  'Coloring',
  'Motor Skills',
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod_alphabet_tracing',
    slug: 'alphabet-tracing-phonics-workbook',
    dodoProductId: 'p_prod_dodo_alpha_01',
    title: 'Alphabet Tracing & Phonics Workbook',
    subtitle: 'Playful letter tracing, phonetic sounds, and gentle handwriting practice',
    price: 7,
    ageRange: 'Ages 3–5',
    pageCount: 36,
    category: 'Alphabet',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/alphabet_tracing_workbook.png',
    previewImages: [
      '/previews/alphabet-tracing-p1.svg',
      '/previews/alphabet-tracing-p2.svg',
      '/previews/alphabet-tracing-p3.svg',
    ],
    description:
      'Give your toddler or preschooler a gentle, joyful introduction to writing letters! This 36-page printable workbook covers all 26 uppercase and lowercase letters with guided stroke arrows, phonics animal friends, and ample space for small hands to practice without frustration.',
    highlights: [
      'Complete A–Z uppercase and lowercase guided letter tracing',
      'Stroke order directional arrows designed for little fingers',
      'Phonics illustrations for sound association on every letter',
      'Both US Letter (8.5×11") and international A4 formats included',
      'Instant download: print one page at a time or bind the whole book',
    ],
    isBundle: false,
    badge: 'Popular',
    accentColor: 'coral',
  },
  {
    id: 'prod_early_math',
    slug: 'numbers-early-math-workbook',
    dodoProductId: 'p_prod_dodo_math_02',
    title: 'Numbers & Early Math (1–20)',
    subtitle: 'Counting, number tracing, basic shapes, and fun counting games',
    price: 7,
    ageRange: 'Ages 3–5',
    pageCount: 32,
    category: 'Math',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/numbers_early_math_cover_page.png',
    previewImages: [
      '/previews/numbers-math-p1.svg',
      '/previews/numbers-math-p2.svg',
      '/previews/numbers-math-p3.svg',
    ],
    description:
      'Build early number sense without screens or tears! Designed with Montessori-inspired progression, this workbook guides little learners through counting objects, tracing digits 1 to 20, matching quantities with numbers, and identifying essential geometric shapes.',
    highlights: [
      'Number tracing from 1 through 20 with dot-guided start points',
      'Visual ten-frame counting blocks and finger-counting prompts',
      'Shape tracing and classification (circle, square, triangle, oval)',
      'High-contrast ink-friendly illustrations for clean home printing',
      'Printable progress tracker sticker chart included',
    ],
    isBundle: false,
    accentColor: 'marigold',
  },
  {
    id: 'prod_scissor_skills',
    slug: 'pre-writing-scissor-skills-pack',
    dodoProductId: 'p_prod_dodo_scissor_03',
    title: 'Pre-Writing & Scissor Skills Pack',
    subtitle: 'Line tracing, curve paths, cutting exercises, and fine motor control',
    price: 6,
    ageRange: 'Ages 3–5',
    pageCount: 20,
    category: 'Motor Skills',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/pre_writing_scissor_skills_cover_page.png',
    previewImages: [
      '/previews/scissor-skills-p1.svg',
      '/previews/scissor-skills-p2.svg',
      '/previews/scissor-skills-p3.svg',
    ],
    description:
      'Strengthen little hand muscles and prepare for kindergarten handwriting! Starting with simple horizontal snips and straight line tracing, this progressive pack moves smoothly to wavy curves, zig-zags, and fun cut-and-paste craft scenes.',
    highlights: [
      'Graduated scissor cutting exercises: straight lines to complex shapes',
      'Pre-writing motor warmup paths (dotted trails, loops, zig-zags)',
      'Cut-and-glue picture matching puzzles for two-handed coordination',
      'Safety guideline reminders for early scissors users',
      'Optimized for standard children safety scissors',
    ],
    isBundle: false,
    accentColor: 'sage',
  },
  {
    id: 'prod_dino_coloring',
    slug: 'dinosaur-adventure-coloring-book',
    dodoProductId: 'p_prod_dodo_dino_04',
    title: 'Dinosaur Adventure Coloring Book',
    subtitle: 'Bold, toddler-friendly dinosaur illustrations with simple facts',
    price: 5,
    ageRange: 'Ages 3–5',
    pageCount: 13,
    category: 'Coloring',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/dinosaur_colouring_book_cover_page.png',
    previewImages: [
      '/previews/dino-coloring-p1.svg',
      '/previews/dino-coloring-p2.svg',
      '/previews/dino-coloring-p3.svg',
    ],
    description:
      'Stomp into prehistoric wonder! Filled with 13 ultra-bold, thick-lined dinosaur illustrations (T-Rex, Triceratops, Brachiosaurus, and friends), this coloring book prevents bleed-through anxiety and boosts toddler coloring confidence.',
    highlights: [
      '13 unique, friendly dinosaur coloring pages with thick outlines',
      'Simple pronunciation keys and fun bite-sized dino facts',
      'Single-sided friendly design with plenty of white space',
      'Great for crayons, chunky washable markers, or finger paints',
      'Instant access: reprint favorite dinosaurs as often as your kid wants!',
    ],
    isBundle: false,
    accentColor: 'sky',
  },
  {
    id: 'prod_logic_mazes',
    slug: 'preschool-logic-mazes-patterns',
    dodoProductId: 'p_prod_dodo_logic_05',
    title: 'Preschool Logic, Mazes & Patterns',
    subtitle: 'Kid-friendly mazes, pattern matching, spot-the-difference, and visual puzzles',
    price: 6,
    ageRange: 'Ages 3–5',
    pageCount: 19,
    category: 'Motor Skills',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/logic_mazes_patterns_cover_page.png',
    previewImages: [
      '/previews/preschool-logic-mazes-patterns/preview_1.jpg',
      '/previews/preschool-logic-mazes-patterns/preview_2.jpg',
      '/previews/preschool-logic-mazes-patterns/preview_3.jpg',
      '/previews/preschool-logic-mazes-patterns/preview_4.jpg',
    ],
    description:
      'Keep energetic minds engaged while building foundational problem-solving abilities. Features cute animal mazes with wide channels, visual sequence completion (AB, AAB, ABC), spot-the-difference challenges, and shadow matching games.',
    highlights: [
      'Wide-path beginner mazes tailored for developing pencil grasp',
      'Color and shape pattern sequences that teach logical deduction',
      'Spot the difference and shadow silhouette matching games',
      'Includes answer key section at the back for gentle self-checking',
      'Keeps kids happily occupied during travel, dining, or quiet time',
    ],
    isBundle: false,
    accentColor: 'marigold',
  },
  {
    id: 'prod_core_readiness_trio',
    slug: 'core-readiness-trio',
    dodoProductId: 'p_prod_dodo_bundle_trio',
    title: 'Core Readiness Trio (3 Books)',
    subtitle: 'Alphabet tracing, early math 1–20, and scissor motor skills',
    price: 15,
    ageRange: 'Ages 3–5',
    pageCount: 88,
    category: 'Bundles',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/alphabet_tracing_workbook.png',
    previewImages: [
      '/previews/alphabet-tracing-p1.svg',
      '/previews/numbers-math-p1.svg',
      '/previews/scissor-skills-p1.svg',
    ],
    description:
      'The essential preschool foundation pack! Combines our three core foundational workbooks—Alphabet Tracing & Phonics, Numbers & Early Math 1–20, and Pre-Writing & Scissor Skills—in one convenient 88-page master download.',
    highlights: [
      'Includes 3 core workbooks (88 total printable pages)',
      'Alphabet Tracing & Phonics Workbook (36 pages)',
      'Numbers & Early Math 1–20 (32 pages)',
      'Pre-Writing & Scissor Skills Pack (20 pages)',
      'Instant download: print individual worksheets or bind the whole series',
    ],
    isBundle: true,
    badge: '3 Core Books',
    accentColor: 'coral',
    bundleIncludes: [
      'Alphabet Tracing & Phonics (36 pages)',
      'Numbers & Early Math (32 pages)',
      'Pre-Writing & Scissor Skills (20 pages)',
    ],
  },
  {
    id: 'prod_complete_bundle',
    slug: 'the-complete-craynook-bundle',
    dodoProductId: 'p_prod_dodo_bundle_all',
    title: 'The Complete CrayNook Bundle (All 5 Books)',
    subtitle: 'All 5 best-selling workbooks: literacy, math, cutting skills, coloring, and logic',
    price: 19,
    ageRange: 'Ages 3–5',
    pageCount: 120,
    category: 'Bundles',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/alphabet_tracing_workbook.png',
    previewImages: [
      '/previews/complete-bundle-p1.svg',
      '/previews/complete-bundle-p2.svg',
      '/previews/complete-bundle-p3.svg',
      '/previews/complete-bundle-p4.svg',
    ],
    description:
      'The ultimate screen-free early childhood toolkit! Get all 5 best-selling CrayNook workbooks in one convenient master download. Covers phonics, handwriting, early math 1–20, scissor skills, creative coloring, and brain-boosting logic mazes.',
    highlights: [
      'Includes all 5 standalone workbooks (120 total printable pages)',
      'Instant download: 120 pages formatted for US Letter & A4',
      'Covers literacy, numeracy, fine motor control, creativity, and logic',
      'Bonus: Includes printable milestone certificate for finishing each book',
      'Lifetime home and classroom printing rights: print for all your children',
    ],
    isBundle: true,
    badge: 'All 5 Workbooks',
    accentColor: 'coral',
    bundleIncludes: [
      'Alphabet Tracing & Phonics (36 pages)',
      'Numbers & Early Math (32 pages)',
      'Pre-Writing & Scissor Skills (20 pages)',
      'Dinosaur Adventure Coloring (13 pages)',
      'Preschool Logic, Mazes & Patterns (19 pages)',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  if (slug === 'the-complete-preschool-bundle') {
    return PRODUCTS.find((p) => p.slug === 'the-complete-craynook-bundle');
  }
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(currentId: string, limit = 3): Product[] {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, limit);
}
