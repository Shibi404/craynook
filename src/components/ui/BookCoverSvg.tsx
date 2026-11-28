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

    case 'the-complete-preschool-bundle':
    default:
      return (
        <svg
          viewBox="0 0 400 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full select-none ${className}`}
          aria-label={title || 'The Complete Preschool Bundle Cover'}
        >
          {/* Bundle Luxury Stack */}
          <rect width="400" height="520" rx="16" fill="#FFFFFF" />

          {/* Ribbon Badge */}
          <g transform="translate(245, 12)">
            <path d="M0 0H120V38L60 28L0 38V0Z" fill="#E86F51" />
            <text x="60" y="18" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-fredoka)" fontWeight="700" fontSize="11" letterSpacing="1">
              5-IN-1
            </text>
          </g>

          {/* Header */}
          <rect x="30" y="32" width="200" height="36" rx="8" fill="#FDF0ED" />
          <text x="130" y="55" textAnchor="middle" fill="#E86F51" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="12" letterSpacing="1.5">
            ALL-IN-ONE MASTER BUNDLE
          </text>

          <text x="200" y="112" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka), sans-serif" fontWeight="700" fontSize="25">
            The Complete Preschool
          </text>
          <text x="200" y="142" textAnchor="middle" fill="#E86F51" fontFamily="var(--font-fredoka), sans-serif" fontWeight="700" fontSize="23">
            5-in-1 Printable Bundle
          </text>
          <text x="200" y="166" textAnchor="middle" fill="#6B655E" fontFamily="var(--font-plus-jakarta), sans-serif" fontSize="11">
            120 Total Pages • 5 Core Workbooks • Print Unlimited Times
          </text>

          {/* Central Artwork: 5 mini book badges displayed harmoniously */}
          <g transform="translate(45, 190)">
            {/* 1: Alphabet */}
            <rect x="0" y="0" width="95" height="95" rx="10" fill="#FDF0ED" />
            <text x="47.5" y="48" textAnchor="middle" fill="#E86F51" fontFamily="var(--font-fredoka)" fontWeight="bold" fontSize="30">Aa</text>
            <text x="47.5" y="75" textAnchor="middle" fill="#2D2A26" fontSize="10" fontWeight="600">Alphabet</text>

            {/* 2: Math */}
            <rect x="110" y="0" width="95" height="95" rx="10" fill="#FDF8EE" />
            <text x="157.5" y="48" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka)" fontWeight="bold" fontSize="30">123</text>
            <text x="157.5" y="75" textAnchor="middle" fill="#2D2A26" fontSize="10" fontWeight="600">Early Math</text>

            {/* 3: Scissors */}
            <rect x="220" y="0" width="95" height="95" rx="10" fill="#F0F5F1" />
            <text x="267.5" y="48" textAnchor="middle" fill="#7A9E7E" fontFamily="var(--font-fredoka)" fontWeight="bold" fontSize="28">✂</text>
            <text x="267.5" y="75" textAnchor="middle" fill="#2D2A26" fontSize="10" fontWeight="600">Scissor Skills</text>

            {/* 4: Dino */}
            <rect x="55" y="110" width="95" height="95" rx="10" fill="#EEF6FC" />
            <text x="102.5" y="158" textAnchor="middle" fill="#6DAEDB" fontFamily="var(--font-fredoka)" fontWeight="bold" fontSize="30">🦕</text>
            <text x="102.5" y="185" textAnchor="middle" fill="#2D2A26" fontSize="10" fontWeight="600">Coloring</text>

            {/* 5: Mazes */}
            <rect x="165" y="110" width="95" height="95" rx="10" fill="#FDF8EE" />
            <text x="212.5" y="158" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka)" fontWeight="bold" fontSize="30">🧩</text>
            <text x="212.5" y="185" textAnchor="middle" fill="#2D2A26" fontSize="10" fontWeight="600">Logic Mazes</text>
          </g>

          <g transform="translate(35, 435)">
            <rect x="0" y="0" width="100" height="34" rx="8" fill="#FDF0ED" />
            <text x="50" y="21" textAnchor="middle" fill="#E86F51" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              ALL 5 BOOKS
            </text>

            <rect x="114" y="0" width="100" height="34" rx="8" fill="#F0F5F1" />
            <text x="164" y="21" textAnchor="middle" fill="#7A9E7E" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              120 PAGES
            </text>

            <rect x="228" y="0" width="102" height="34" rx="8" fill="#FDF8EE" />
            <text x="279" y="21" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="11">
              US LETTER & A4
            </text>
          </g>
        </svg>
      );
  }
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
