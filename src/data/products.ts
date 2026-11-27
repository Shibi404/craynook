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
    price: 6,
    compareAtPrice: 10,
    ageRange: 'Ages 3–5',
    pageCount: 48,
    category: 'Alphabet',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/alphabet_tracing_workbook.png',
    previewImages: [
      '/previews/alphabet-tracing-p1.svg',
      '/previews/alphabet-tracing-p2.svg',
      '/previews/alphabet-tracing-p3.svg',
    ],
    description:
      'Give your toddler or preschooler a gentle, joyful introduction to writing letters! This 48-page printable workbook covers all 26 uppercase and lowercase letters with guided stroke arrows, phonics animal friends, and ample space for small hands to practice without frustration.',
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
    price: 6,
    compareAtPrice: 10,
    ageRange: 'Ages 3–5',
    pageCount: 52,
    category: 'Math',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/covers/numbers-math.svg',
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
    compareAtPrice: 10,
    ageRange: 'Ages 3–5',
    pageCount: 44,
    category: 'Motor Skills',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/covers/scissor-skills.svg',
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
    compareAtPrice: 8,
    ageRange: 'Ages 3–5',
    pageCount: 40,
    category: 'Coloring',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/dinosaur_colouring_book_cover_page.png',
    previewImages: [
      '/previews/dino-coloring-p1.svg',
      '/previews/dino-coloring-p2.svg',
      '/previews/dino-coloring-p3.svg',
    ],
    description:
      'Stomp into prehistoric wonder! Filled with 40 ultra-bold, thick-lined dinosaur illustrations (T-Rex, Triceratops, Brachiosaurus, and friends), this coloring book prevents bleed-through anxiety and boosts toddler coloring confidence.',
    highlights: [
      '40 unique, friendly dinosaur coloring pages with thick outlines',
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
    compareAtPrice: 10,
    ageRange: 'Ages 3–5',
    pageCount: 46,
    category: 'Motor Skills',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/covers/logic-mazes.svg',
    previewImages: [
      '/previews/logic-mazes-p1.svg',
      '/previews/logic-mazes-p2.svg',
      '/previews/logic-mazes-p3.svg',
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
    id: 'prod_complete_bundle',
    slug: 'the-complete-preschool-bundle',
    dodoProductId: 'p_prod_dodo_bundle_all',
    title: 'The Complete Preschool Bundle (All 5 Books)',
    subtitle: 'Everything your little learner needs in one discounted mega-pack',
    price: 15,
    compareAtPrice: 29,
    ageRange: 'Ages 3–5',
    pageCount: 228,
    category: 'Bundles',
    formats: ['US Letter (8.5×11")', 'A4'],
    coverImage: '/covers/complete-bundle.svg',
    previewImages: [
      '/previews/complete-bundle-p1.svg',
      '/previews/complete-bundle-p2.svg',
      '/previews/complete-bundle-p3.svg',
      '/previews/complete-bundle-p4.svg',
    ],
    description:
      'The ultimate screen-free early childhood toolkit! Get all 5 best-selling CrayNook workbooks in one convenient master download at ~50% off. Covers phonics, handwriting, early math 1–20, scissor skills, creative coloring, and brain-boosting logic mazes.',
    highlights: [
      'Includes all 5 standalone workbooks (228 total printable pages)',
      'Huge savings: $15 instead of $29 when purchased separately (save 48%)',
      'Covers literacy, numeracy, fine motor control, creativity, and logic',
      'Bonus: Includes printable milestone certificate for finishing each book',
      'Lifetime home and classroom printing rights: print for all your children',
    ],
    isBundle: true,
    badge: 'Best Value · Save 48%',
    accentColor: 'coral',
    bundleIncludes: [
      'Alphabet Tracing & Phonics Workbook (48 pages)',
      'Numbers & Early Math 1–20 (52 pages)',
      'Pre-Writing & Scissor Skills Pack (44 pages)',
      'Dinosaur Adventure Coloring Book (40 pages)',
      'Preschool Logic, Mazes & Patterns (46 pages)',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(currentId: string, limit = 3): Product[] {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, limit);
}
