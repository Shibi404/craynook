import React from 'react';
import Image from 'next/image';

interface BookCoverSvgProps {
  slug: string;
  type?: 'cover' | 'preview';
  previewIndex?: number;
  className?: string;
  title?: string;
  priority?: boolean;
}

export function BookCoverSvg({
  slug,
  type = 'cover',
  previewIndex = 0,
  className = '',
  title,
  priority = false,
}: BookCoverSvgProps) {
  if (type === 'preview') {
    return renderPreviewPage(slug, previewIndex, className);
  }

  return renderCover(slug, className, title, priority);
}

function renderCover(
  slug: string,
  className: string,
  title?: string,
  priority: boolean = false
) {
  switch (slug) {
    case 'alphabet-tracing-phonics-workbook':
      return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
          <Image
            src="/alphabet_tracing_workbook.png"
            alt={title || 'Alphabet Tracing & Phonics Workbook Cover'}
            width={1792}
            height={2400}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        </div>
      );

    case 'numbers-early-math-workbook':
      return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
          <Image
            src="/numbers_early_math_cover_page.png"
            alt={title || 'Numbers & Early Math Workbook Cover'}
            width={1792}
            height={2400}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        </div>
      );

    case 'pre-writing-scissor-skills-pack':
      return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
          <Image
            src="/pre_writing_scissor_skills_cover_page.png"
            alt={title || 'Pre-Writing & Scissor Skills Pack Cover'}
            width={1792}
            height={2400}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        </div>
      );

    case 'dinosaur-adventure-coloring-book':
      return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
          <Image
            src="/dinosaur_colouring_book_cover_page.png"
            alt={title || 'Dinosaur Adventure Coloring Book Cover'}
            width={1792}
            height={2400}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        </div>
      );

    case 'preschool-logic-mazes-patterns':
      return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
          <Image
            src="/logic_mazes_patterns_cover_page.png"
            alt={title || 'Preschool Logic, Mazes & Patterns Cover'}
            width={1792}
            height={2400}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        </div>
      );

    case 'core-readiness-trio':
      return <TrioBundleCover className={className} priority={priority} />;

    case 'the-complete-craynook-bundle':
    case 'the-complete-preschool-bundle':
    default:
      return <CompleteBundleCover className={className} priority={priority} />;
  }
}

function TrioBundleCover({
  className = '',
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative w-full h-full bg-cream border border-border-warm flex items-center justify-center p-4 select-none overflow-hidden ${className}`}
    >
      <div className="relative w-full max-w-[340px] aspect-4/3 flex items-center justify-center">
        {/* Book 1: Alphabet (Left - tilted -4deg) */}
        <div className="absolute left-[3%] bottom-[8%] w-[38%] aspect-3/4 -rotate-[4deg] rounded-md sm:rounded-lg overflow-hidden shadow-lg shadow-charcoal/15">
          <Image
            src="/alphabet_tracing_workbook.png"
            alt="Alphabet Tracing & Phonics Cover"
            width={1792}
            height={2400}
            className="w-full h-full object-cover"
            priority={priority}
          />
        </div>

        {/* Book 2: Numbers & Early Math (Center - tilted 1deg) */}
        <div className="relative bottom-[6%] w-[40%] aspect-3/4 rotate-[1deg] rounded-md sm:rounded-lg overflow-hidden shadow-xl shadow-charcoal/20 z-10">
          <Image
            src="/numbers_early_math_cover_page.png"
            alt="Numbers & Early Math Cover"
            width={1792}
            height={2400}
            className="w-full h-full object-cover"
            priority={priority}
          />
        </div>

        {/* Book 3: Pre-Writing & Scissor Skills (Right - tilted 5deg) */}
        <div className="absolute right-[3%] bottom-[8%] w-[38%] aspect-3/4 rotate-[5deg] rounded-md sm:rounded-lg overflow-hidden shadow-lg shadow-charcoal/15">
          <Image
            src="/pre_writing_scissor_skills_cover_page.png"
            alt="Pre-Writing & Scissor Skills Cover"
            width={1792}
            height={2400}
            className="w-full h-full object-cover"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

function CompleteBundleCover({
  className = '',
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative w-full h-full bg-cream border border-border-warm flex flex-col items-center justify-center p-4 select-none overflow-hidden ${className}`}
    >
      <div className="w-full max-w-[320px] flex flex-col items-center justify-center gap-2 sm:gap-2.5">
        {/* Row 1: 3 books */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
          <div className="w-[30%] aspect-3/4 rounded-sm sm:rounded-md overflow-hidden shadow-md shadow-charcoal/15">
            <Image
              src="/alphabet_tracing_workbook.png"
              alt="Alphabet Tracing Cover"
              width={1792}
              height={2400}
              className="w-full h-full object-cover"
              priority={priority}
            />
          </div>
          <div className="w-[30%] aspect-3/4 rounded-sm sm:rounded-md overflow-hidden shadow-md shadow-charcoal/15">
            <Image
              src="/numbers_early_math_cover_page.png"
              alt="Numbers & Early Math Cover"
              width={1792}
              height={2400}
              className="w-full h-full object-cover"
              priority={priority}
            />
          </div>
          <div className="w-[30%] aspect-3/4 rounded-sm sm:rounded-md overflow-hidden shadow-md shadow-charcoal/15">
            <Image
              src="/pre_writing_scissor_skills_cover_page.png"
              alt="Scissor Skills Cover"
              width={1792}
              height={2400}
              className="w-full h-full object-cover"
              priority={priority}
            />
          </div>
        </div>

        {/* Row 2: 2 books centered */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
          <div className="w-[30%] aspect-3/4 rounded-sm sm:rounded-md overflow-hidden shadow-md shadow-charcoal/15">
            <Image
              src="/dinosaur_colouring_book_cover_page.png"
              alt="Dinosaur Coloring Book Cover"
              width={1792}
              height={2400}
              className="w-full h-full object-cover"
              priority={priority}
            />
          </div>
          <div className="w-[30%] aspect-3/4 rounded-sm sm:rounded-md overflow-hidden shadow-md shadow-charcoal/15">
            <Image
              src="/logic_mazes_patterns_cover_page.png"
              alt="Logic, Mazes & Patterns Cover"
              width={1792}
              height={2400}
              className="w-full h-full object-cover"
              priority={priority}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function renderPreviewPage(slug: string, index: number, className: string) {
  // Generates realistic interior worksheet preview page
  return (
    <svg
      viewBox="0 0 400 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none bg-white ${className}`}
    >
      {/* Printable Sheet Frame */}
      <rect width="400" height="520" fill="#FFFFFF" />
      <rect x="15" y="15" width="370" height="490" rx="4" fill="#FFFFFF" />

      {/* Sheet Header */}
      <g transform="translate(30, 30)">
        <text x="0" y="15" fill="#6B655E" fontSize="10" fontFamily="var(--font-plus-jakarta)">
          Name: ________________________
        </text>
        <text x="340" y="15" textAnchor="end" fill="#6B655E" fontSize="10" fontFamily="var(--font-plus-jakarta)">
          Date: __________
        </text>
        <line x1="0" y1="28" x2="340" y2="28" stroke="#EAE4DC" strokeWidth="1" />
      </g>

      {/* Interior Worksheet Content by index */}
      {index === 0 && (
        <g transform="translate(35, 80)">
          <text x="0" y="20" fill="#2D2A26" fontFamily="var(--font-fredoka)" fontSize="18" fontWeight="600">
            Practice Page • Trace & Learn
          </text>
          <text x="0" y="38" fill="#6B655E" fontSize="11">
            Follow the guided arrows from start dot to finish.
          </text>

          {/* Row 1 */}
          <g transform="translate(0, 60)">
            <rect x="0" y="0" width="330" height="70" rx="8" fill="#FAF8F5" stroke="#EAE4DC" strokeWidth="1" />
            <line x1="15" y1="35" x2="315" y2="35" stroke="#7A9E7E" strokeDasharray="4 4" strokeWidth="1" />
            <text x="30" y="45" fill="#E86F51" fontFamily="var(--font-fredoka)" fontSize="34" fontWeight="bold">B</text>
            <text x="80" y="45" fill="#6B655E" opacity="0.4" fontFamily="var(--font-fredoka)" fontSize="34" fontWeight="bold">B</text>
            <text x="130" y="45" fill="#6B655E" opacity="0.4" fontFamily="var(--font-fredoka)" fontSize="34" fontWeight="bold">B</text>
            <text x="180" y="45" fill="#6B655E" opacity="0.4" fontFamily="var(--font-fredoka)" fontSize="34" fontWeight="bold">B</text>
            <text x="230" y="45" fill="#6B655E" opacity="0.4" fontFamily="var(--font-fredoka)" fontSize="34" fontWeight="bold">B</text>
            <circle cx="290" cy="35" r="16" fill="#FDF0ED" stroke="#E86F51" strokeWidth="1" />
            <text x="290" y="40" textAnchor="middle" fontSize="14">🐻</text>
          </g>

          {/* Row 2 */}
          <g transform="translate(0, 150)">
            <rect x="0" y="0" width="330" height="70" rx="8" fill="#FAF8F5" stroke="#EAE4DC" strokeWidth="1" />
            <line x1="15" y1="35" x2="315" y2="35" stroke="#7A9E7E" strokeDasharray="4 4" strokeWidth="1" />
            <text x="30" y="45" fill="#7A9E7E" fontFamily="var(--font-fredoka)" fontSize="34" fontWeight="bold">b</text>
            <text x="80" y="45" fill="#6B655E" opacity="0.4" fontFamily="var(--font-fredoka)" fontSize="34" fontWeight="bold">b</text>
            <text x="130" y="45" fill="#6B655E" opacity="0.4" fontFamily="var(--font-fredoka)" fontSize="34" fontWeight="bold">b</text>
            <text x="180" y="45" fill="#6B655E" opacity="0.4" fontFamily="var(--font-fredoka)" fontSize="34" fontWeight="bold">b</text>
            <text x="230" y="45" fill="#6B655E" opacity="0.4" fontFamily="var(--font-fredoka)" fontSize="34" fontWeight="bold">b</text>
            <circle cx="290" cy="35" r="16" fill="#F0F5F1" stroke="#7A9E7E" strokeWidth="1" />
            <text x="290" y="40" textAnchor="middle" fontSize="14">🦋</text>
          </g>

          {/* Row 3: Color & Match */}
          <g transform="translate(0, 240)">
            <rect x="0" y="0" width="330" height="90" rx="8" fill="#FAF8F5" stroke="#EAE4DC" strokeWidth="1" />
            <text x="20" y="25" fill="#2D2A26" fontWeight="bold" fontSize="12">Color all the pictures that start with /b/:</text>
            <circle cx="50" cy="58" r="20" fill="#FFFFFF" stroke="#2D2A26" strokeWidth="1.5" />
            <text x="50" y="64" textAnchor="middle" fontSize="18">🍌</text>
            <circle cx="120" cy="58" r="20" fill="#FFFFFF" stroke="#2D2A26" strokeWidth="1.5" />
            <text x="120" y="64" textAnchor="middle" fontSize="18">⚽</text>
            <circle cx="190" cy="58" r="20" fill="#FFFFFF" stroke="#2D2A26" strokeWidth="1.5" />
            <text x="190" y="64" textAnchor="middle" fontSize="18">🍎</text>
            <circle cx="260" cy="58" r="20" fill="#FFFFFF" stroke="#2D2A26" strokeWidth="1.5" />
            <text x="260" y="64" textAnchor="middle" fontSize="18">🔔</text>
          </g>
        </g>
      )}

      {index === 1 && (
        <g transform="translate(35, 80)">
          <text x="0" y="20" fill="#2D2A26" fontFamily="var(--font-fredoka)" fontSize="18" fontWeight="600">
            Cut & Match Activity
          </text>
          <text x="0" y="38" fill="#6B655E" fontSize="11">
            Cut along the dotted paths with safety scissors.
          </text>

          <g transform="translate(0, 70)">
            {/* Exercise 1 */}
            <path d="M10 20C80 0 120 50 180 20C240 -10 280 40 320 20" stroke="#2D2A26" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
            <text x="0" y="25" fontSize="16">✂️</text>
            <text x="320" y="25" fontSize="16">⭐</text>

            {/* Exercise 2 */}
            <path d="M10 100L60 70L110 120L160 70L210 120L260 70L320 100" stroke="#2D2A26" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
            <text x="0" y="105" fontSize="16">✂️</text>
            <text x="320" y="105" fontSize="16">🎯</text>

            {/* Exercise 3 */}
            <path d="M10 180Q80 140 160 180T320 180" stroke="#2D2A26" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
            <text x="0" y="185" fontSize="16">✂️</text>
            <text x="320" y="185" fontSize="16">🏆</text>

            {/* Paste box */}
            <rect x="0" y="230" width="330" height="90" rx="8" fill="#FAF8F5" stroke="#7A9E7E" strokeWidth="1.5" strokeDasharray="5 5" />
            <text x="165" y="280" textAnchor="middle" fill="#7A9E7E" fontWeight="600" fontSize="12">
              Paste your cut-out reward badge here!
            </text>
          </g>
        </g>
      )}

      {index >= 2 && (
        <g transform="translate(35, 80)">
          <text x="0" y="20" fill="#2D2A26" fontFamily="var(--font-fredoka)" fontSize="18" fontWeight="600">
            Coloring & Logic Challenge
          </text>
          <text x="0" y="38" fill="#6B655E" fontSize="11">
            Help the little explorer navigate the maze and color the friendly characters!
          </text>

          {/* Big Maze / Coloring box */}
          <g transform="translate(0, 60)">
            <rect x="0" y="0" width="330" height="250" rx="10" fill="#FAF8F5" stroke="#2D2A26" strokeWidth="2" />
            <text x="20" y="35" fontSize="24">🦕</text>
            <text x="290" y="235" fontSize="24">🌴</text>

            {/* Maze lines */}
            <path d="M60 20V90H140V40H220V120" stroke="#2D2A26" strokeWidth="3" strokeLinecap="round" />
            <path d="M100 130V220H180V160H260V220" stroke="#2D2A26" strokeWidth="3" strokeLinecap="round" />
            <path d="M20 150H60V220" stroke="#2D2A26" strokeWidth="3" strokeLinecap="round" />
            <path d="M220 20V80H290" stroke="#2D2A26" strokeWidth="3" strokeLinecap="round" />

            <circle cx="165" cy="125" r="30" fill="#FFFFFF" stroke="#2D2A26" strokeWidth="2" />
            <text x="165" y="132" textAnchor="middle" fontSize="22">⭐</text>
          </g>

          <g transform="translate(0, 330)">
            <text x="0" y="20" fill="#6B655E" fontSize="12">
              ✔ Fine Motor Grip • Focus & Patience • Self-Paced Screen-Free Play
            </text>
          </g>
        </g>
      )}

      {/* Footer Branding */}
      <g transform="translate(30, 480)">
        <line x1="0" y1="0" x2="340" y2="0" stroke="#EAE4DC" strokeWidth="1" />
        <text x="0" y="16" fill="#6B655E" fontSize="9" fontFamily="var(--font-fredoka)">
          CRAYNOOK WORKBOOKS • PRINTABLE DIGITAL EDITION
        </text>
        <text x="340" y="16" textAnchor="end" fill="#6B655E" fontSize="9">
          Page {index + 1}
        </text>
      </g>
    </svg>
  );
}
