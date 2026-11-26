import React from 'react';

interface BookCoverSvgProps {
  slug: string;
  type?: 'cover' | 'preview';
  previewIndex?: number;
  className?: string;
  title?: string;
}

export function BookCoverSvg({
  slug,
  type = 'cover',
  previewIndex = 0,
  className = '',
  title,
}: BookCoverSvgProps) {
  if (type === 'preview') {
    return renderPreviewPage(slug, previewIndex, className);
  }

  return renderCover(slug, className, title);
}

function renderCover(slug: string, className: string, title?: string) {
  switch (slug) {
    case 'alphabet-tracing-phonics-workbook':
      return (
        <svg
          viewBox="0 0 400 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full select-none ${className}`}
          aria-label={title || 'Alphabet Tracing & Phonics Workbook Cover'}
        >
          {/* Paper Background & Shadow Accent */}
          <rect width="400" height="520" rx="16" fill="#FDF0ED" />
          <rect x="14" y="14" width="372" height="492" rx="12" fill="#FFFFFF" stroke="#EAE4DC" strokeWidth="2" />
          
          {/* Header Banner */}
          <rect x="30" y="32" width="340" height="42" rx="8" fill="#FDF0ED" />
          <text x="200" y="58" textAnchor="middle" fill="#E86F51" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="14" letterSpacing="2">
            DOODLECUB • EARLY LITERACY
          </text>

          {/* Title Box */}
          <text x="200" y="112" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka), sans-serif" fontWeight="700" fontSize="26">
            Alphabet Tracing
          </text>
          <text x="200" y="142" textAnchor="middle" fill="#E86F51" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="19">
            & Phonics Workbook
          </text>
          <text x="200" y="166" textAnchor="middle" fill="#6B655E" fontFamily="var(--font-plus-jakarta), sans-serif" fontSize="11">
            Uppercase & Lowercase Letter Strokes • Phonics Sounds
          </text>

          {/* Central Artwork: Giant Tracing "Aa" with stroke arrows */}
          <g transform="translate(60, 185)">
            {/* Guide Grid */}
            <line x1="0" y1="20" x2="280" y2="20" stroke="#EAE4DC" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="0" y1="100" x2="280" y2="100" stroke="#7A9E7E" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />
            <line x1="0" y1="180" x2="280" y2="180" stroke="#EAE4DC" strokeWidth="1.5" />

            {/* Letter A */}
            <path d="M70 170L110 30L150 170" stroke="#E86F51" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
            <line x1="88" y1="120" x2="132" y2="120" stroke="#E86F51" strokeWidth="12" strokeLinecap="round" />
            
            {/* Tracing Dotted Inset */}
            <path d="M70 170L110 30L150 170" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="88" y1="120" x2="132" y2="120" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />

            {/* Direction Arrows */}
            <circle cx="68" cy="172" r="7" fill="#E9B44C" />
            <text x="68" y="176" textAnchor="middle" fill="#2D2A26" fontSize="9" fontWeight="bold">1</text>
            <circle cx="152" cy="172" r="7" fill="#E9B44C" />
            <text x="152" y="176" textAnchor="middle" fill="#2D2A26" fontSize="9" fontWeight="bold">2</text>

            {/* Letter a */}
            <circle cx="210" cy="125" r="38" stroke="#7A9E7E" strokeWidth="12" fill="none" opacity="0.9" />
            <line x1="248" y1="88" x2="248" y2="165" stroke="#7A9E7E" strokeWidth="12" strokeLinecap="round" />
            <circle cx="210" cy="125" r="38" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="6 6" fill="none" />
            <line x1="248" y1="88" x2="248" y2="165" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 5" strokeLinecap="round" />

            {/* Cute Apple Phonics Icon */}
            <g transform="translate(18, 115)">
              <circle cx="16" cy="18" r="14" fill="#E86F51" />
              <path d="M16 4C18 1 21 0 23 2C21 5 19 6 16 6" fill="#7A9E7E" />
              <path d="M16 6V10" stroke="#2D2A26" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="15" r="2" fill="#FFFFFF" opacity="0.6" />
            </g>
          </g>

          {/* Badges Footer Strip */}
          <g transform="translate(35, 435)">
            <rect x="0" y="0" width="96" height="34" rx="8" fill="#FDF0ED" stroke="#E86F51" strokeWidth="1" />
            <text x="48" y="21" textAnchor="middle" fill="#E86F51" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              AGES 3–5
            </text>

            <rect x="110" y="0" width="100" height="34" rx="8" fill="#F0F5F1" stroke="#7A9E7E" strokeWidth="1" />
            <text x="160" y="21" textAnchor="middle" fill="#7A9E7E" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              48 PAGES
            </text>

            <rect x="224" y="0" width="106" height="34" rx="8" fill="#FDF8EE" stroke="#E9B44C" strokeWidth="1" />
            <text x="277" y="21" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="11">
              US LETTER & A4
            </text>
          </g>
        </svg>
      );

    case 'numbers-early-math-workbook':
      return (
        <svg
          viewBox="0 0 400 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full select-none ${className}`}
          aria-label={title || 'Numbers & Early Math Workbook Cover'}
        >
          <rect width="400" height="520" rx="16" fill="#FDF8EE" />
          <rect x="14" y="14" width="372" height="492" rx="12" fill="#FFFFFF" stroke="#EAE4DC" strokeWidth="2" />
          
          <rect x="30" y="32" width="340" height="42" rx="8" fill="#FDF8EE" />
          <text x="200" y="58" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="14" letterSpacing="2">
            DOODLECUB • EARLY NUMERACY
          </text>

          <text x="200" y="112" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka), sans-serif" fontWeight="700" fontSize="26">
            Numbers & Early Math
          </text>
          <text x="200" y="142" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="19">
            Counting & Tracing 1 to 20
          </text>
          <text x="200" y="166" textAnchor="middle" fill="#6B655E" fontFamily="var(--font-plus-jakarta), sans-serif" fontSize="11">
            Ten-Frames • Shape Tracing • Finger Counting
          </text>

          {/* Central Artwork: Digits 1 2 3 + Ten-Frame */}
          <g transform="translate(60, 190)">
            {/* Number 1 */}
            <g transform="translate(10, 0)">
              <path d="M15 45L30 30V150" stroke="#E9B44C" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M15 45L30 30V150" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="10" y1="150" x2="50" y2="150" stroke="#E9B44C" strokeWidth="14" strokeLinecap="round" />
            </g>

            {/* Number 2 */}
            <g transform="translate(95, 0)">
              <path d="M10 50C10 25 50 25 50 55C50 85 10 120 10 150H55" stroke="#7A9E7E" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M10 50C10 25 50 25 50 55C50 85 10 120 10 150H55" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 5" strokeLinecap="round" fill="none" />
            </g>

            {/* Number 3 */}
            <g transform="translate(195, 0)">
              <path d="M10 35H50L30 85C45 85 55 98 55 118C55 138 38 150 10 148" stroke="#E86F51" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M10 35H50L30 85C45 85 55 98 55 118C55 138 38 150 10 148" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 5" strokeLinecap="round" fill="none" />
            </g>

            {/* Ten-Frame Counter Box */}
            <g transform="translate(15, 175)">
              <rect x="0" y="0" width="250" height="35" rx="6" fill="#FDF8EE" stroke="#EAE4DC" strokeWidth="1.5" />
              <line x1="50" y1="0" x2="50" y2="35" stroke="#EAE4DC" />
              <line x1="100" y1="0" x2="100" y2="35" stroke="#EAE4DC" />
              <line x1="150" y1="0" x2="150" y2="35" stroke="#EAE4DC" />
              <line x1="200" y1="0" x2="200" y2="35" stroke="#EAE4DC" />
              <circle cx="25" cy="17.5" r="10" fill="#E86F51" />
              <circle cx="75" cy="17.5" r="10" fill="#7A9E7E" />
              <circle cx="125" cy="17.5" r="10" fill="#E9B44C" />
              <circle cx="175" cy="17.5" r="10" fill="#6DAEDB" />
              <circle cx="225" cy="17.5" r="10" fill="#2D2A26" opacity="0.2" />
            </g>
          </g>

          <g transform="translate(35, 435)">
            <rect x="0" y="0" width="96" height="34" rx="8" fill="#FDF8EE" stroke="#E9B44C" strokeWidth="1" />
            <text x="48" y="21" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              AGES 3–5
            </text>

            <rect x="110" y="0" width="100" height="34" rx="8" fill="#F0F5F1" stroke="#7A9E7E" strokeWidth="1" />
            <text x="160" y="21" textAnchor="middle" fill="#7A9E7E" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              52 PAGES
            </text>

            <rect x="224" y="0" width="106" height="34" rx="8" fill="#FDF0ED" stroke="#E86F51" strokeWidth="1" />
            <text x="277" y="21" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="11">
              US LETTER & A4
            </text>
          </g>
        </svg>
      );

    case 'pre-writing-scissor-skills-pack':
      return (
        <svg
          viewBox="0 0 400 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full select-none ${className}`}
          aria-label={title || 'Pre-Writing & Scissor Skills Pack Cover'}
        >
          <rect width="400" height="520" rx="16" fill="#F0F5F1" />
          <rect x="14" y="14" width="372" height="492" rx="12" fill="#FFFFFF" stroke="#EAE4DC" strokeWidth="2" />
          
          <rect x="30" y="32" width="340" height="42" rx="8" fill="#F0F5F1" />
          <text x="200" y="58" textAnchor="middle" fill="#7A9E7E" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="14" letterSpacing="2">
            DOODLECUB • FINE MOTOR SKILLS
          </text>

          <text x="200" y="112" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka), sans-serif" fontWeight="700" fontSize="26">
            Pre-Writing & Scissor Skills
          </text>
          <text x="200" y="142" textAnchor="middle" fill="#7A9E7E" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="19">
            Cut, Trace, Paste & Fold
          </text>
          <text x="200" y="166" textAnchor="middle" fill="#6B655E" fontFamily="var(--font-plus-jakarta), sans-serif" fontSize="11">
            Gentle Line Progression • Hand Strength • Bilateral Coordination
          </text>

          {/* Central Artwork: Scissors cutting along dashed line & wavy paths */}
          <g transform="translate(50, 200)">
            {/* Wavy line */}
            <path d="M10 30Q80 0 150 30T290 30" stroke="#7A9E7E" strokeWidth="5" strokeLinecap="round" strokeDasharray="8 6" fill="none" />
            
            {/* Zig-Zag line */}
            <path d="M10 90L60 60L120 110L180 60L240 110L290 70" stroke="#E86F51" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 6" fill="none" />

            {/* Loop path */}
            <path d="M10 160C80 120 80 200 150 160C220 120 220 200 290 160" stroke="#6DAEDB" strokeWidth="5" strokeLinecap="round" strokeDasharray="8 6" fill="none" />

            {/* Cute Scissor Icon */}
            <g transform="translate(245, 12)">
              <circle cx="10" cy="10" r="8" fill="none" stroke="#2D2A26" strokeWidth="3" />
              <circle cx="10" cy="30" r="8" fill="none" stroke="#2D2A26" strokeWidth="3" />
              <line x1="16" y1="14" x2="45" y2="28" stroke="#7A9E7E" strokeWidth="4" strokeLinecap="round" />
              <line x1="16" y1="26" x2="45" y2="12" stroke="#7A9E7E" strokeWidth="4" strokeLinecap="round" />
              <circle cx="28" cy="20" r="3" fill="#2D2A26" />
            </g>
          </g>

          <g transform="translate(35, 435)">
            <rect x="0" y="0" width="96" height="34" rx="8" fill="#F0F5F1" stroke="#7A9E7E" strokeWidth="1" />
            <text x="48" y="21" textAnchor="middle" fill="#7A9E7E" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              AGES 3–5
            </text>

            <rect x="110" y="0" width="100" height="34" rx="8" fill="#FDF8EE" stroke="#E9B44C" strokeWidth="1" />
            <text x="160" y="21" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              44 PAGES
            </text>

            <rect x="224" y="0" width="106" height="34" rx="8" fill="#FDF0ED" stroke="#E86F51" strokeWidth="1" />
            <text x="277" y="21" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="11">
              US LETTER & A4
            </text>
          </g>
        </svg>
      );

    case 'dinosaur-adventure-coloring-book':
      return (
        <svg
          viewBox="0 0 400 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full select-none ${className}`}
          aria-label={title || 'Dinosaur Adventure Coloring Book Cover'}
        >
          <rect width="400" height="520" rx="16" fill="#EEF6FC" />
          <rect x="14" y="14" width="372" height="492" rx="12" fill="#FFFFFF" stroke="#EAE4DC" strokeWidth="2" />
          
          <rect x="30" y="32" width="340" height="42" rx="8" fill="#EEF6FC" />
          <text x="200" y="58" textAnchor="middle" fill="#6DAEDB" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="14" letterSpacing="2">
            DOODLECUB • CREATIVE PLAY
          </text>

          <text x="200" y="112" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka), sans-serif" fontWeight="700" fontSize="26">
            Dinosaur Adventure
          </text>
          <text x="200" y="142" textAnchor="middle" fill="#6DAEDB" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="19">
            Toddler-Friendly Coloring Book
          </text>
          <text x="200" y="166" textAnchor="middle" fill="#6B655E" fontFamily="var(--font-plus-jakarta), sans-serif" fontSize="11">
            40 Bold Prehistoric Scenes • Thick Outlines • Zero Bleed Anxiety
          </text>

          {/* Central Artwork: Cute Toddler Dino */}
          <g transform="translate(100, 190)">
            {/* Dino Body */}
            <path
              d="M70 170C30 170 10 140 10 100C10 60 40 40 70 40C85 40 95 30 100 15C103 6 112 0 122 2C138 6 150 25 145 45C160 55 175 75 175 100C175 140 140 170 110 170Z"
              fill="#EEF6FC"
              stroke="#2D2A26"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            {/* Dino Belly */}
            <path d="M40 115C40 85 65 65 95 70C125 75 145 100 140 135" fill="none" stroke="#6DAEDB" strokeWidth="4" strokeLinecap="round" />
            
            {/* Dino Eye */}
            <circle cx="125" cy="30" r="5" fill="#2D2A26" />
            <circle cx="127" cy="28" r="1.5" fill="#FFFFFF" />
            
            {/* Cute Smile */}
            <path d="M135 42C130 46 122 46 118 42" stroke="#2D2A26" strokeWidth="3" strokeLinecap="round" />

            {/* Back Spikes */}
            <polygon points="50,45 60,25 70,45" fill="#E86F51" stroke="#2D2A26" strokeWidth="2.5" />
            <polygon points="30,65 35,45 48,65" fill="#E9B44C" stroke="#2D2A26" strokeWidth="2.5" />
            <polygon points="18,90 20,70 32,90" fill="#7A9E7E" stroke="#2D2A26" strokeWidth="2.5" />

            {/* Feet */}
            <rect x="50" y="165" width="22" height="30" rx="8" fill="#EEF6FC" stroke="#2D2A26" strokeWidth="4" />
            <rect x="95" y="165" width="22" height="30" rx="8" fill="#EEF6FC" stroke="#2D2A26" strokeWidth="4" />

            {/* Tropical leaf */}
            <path d="M-40 175C-20 140 0 155 20 180" stroke="#7A9E7E" strokeWidth="5" strokeLinecap="round" />
          </g>

          <g transform="translate(35, 435)">
            <rect x="0" y="0" width="96" height="34" rx="8" fill="#EEF6FC" stroke="#6DAEDB" strokeWidth="1" />
            <text x="48" y="21" textAnchor="middle" fill="#6DAEDB" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              AGES 3–5
            </text>

            <rect x="110" y="0" width="100" height="34" rx="8" fill="#FDF8EE" stroke="#E9B44C" strokeWidth="1" />
            <text x="160" y="21" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              40 PAGES
            </text>

            <rect x="224" y="0" width="106" height="34" rx="8" fill="#FDF0ED" stroke="#E86F51" strokeWidth="1" />
            <text x="277" y="21" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="11">
              US LETTER & A4
            </text>
          </g>
        </svg>
      );

    case 'preschool-logic-mazes-patterns':
      return (
        <svg
          viewBox="0 0 400 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full select-none ${className}`}
          aria-label={title || 'Preschool Logic, Mazes & Patterns Cover'}
        >
          <rect width="400" height="520" rx="16" fill="#FDF8EE" />
          <rect x="14" y="14" width="372" height="492" rx="12" fill="#FFFFFF" stroke="#EAE4DC" strokeWidth="2" />
          
          <rect x="30" y="32" width="340" height="42" rx="8" fill="#FDF8EE" />
          <text x="200" y="58" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="14" letterSpacing="2">
            DOODLECUB • CRITICAL THINKING
          </text>

          <text x="200" y="112" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka), sans-serif" fontWeight="700" fontSize="26">
            Logic, Mazes & Patterns
          </text>
          <text x="200" y="142" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka), sans-serif" fontWeight="600" fontSize="19">
            Brain Games for Little Minds
          </text>
          <text x="200" y="166" textAnchor="middle" fill="#6B655E" fontFamily="var(--font-plus-jakarta), sans-serif" fontSize="11">
            Wide-Path Mazes • Sequence Logic • Shadow Matching
          </text>

          {/* Central Artwork: Mini Maze & Pattern Blocks */}
          <g transform="translate(60, 190)">
            {/* Labyrinth Outlines */}
            <rect x="20" y="10" width="240" height="150" rx="12" fill="#FAF8F5" stroke="#2D2A26" strokeWidth="3" />
            
            {/* Maze Walls */}
            <path d="M70 10V80H120V120" stroke="#2D2A26" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M160 160V90H210" stroke="#2D2A26" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M120 40H220" stroke="#2D2A26" strokeWidth="3.5" strokeLinecap="round" />

            {/* Solution Trail (Dotted) */}
            <path d="M35 15H50V135H140V70H185V145H240" stroke="#E86F51" strokeWidth="4" strokeDasharray="5 5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="35" cy="15" r="6" fill="#7A9E7E" />
            <circle cx="240" cy="145" r="6" fill="#E9B44C" />

            {/* Pattern Row Below */}
            <g transform="translate(25, 175)">
              <circle cx="25" cy="15" r="14" fill="#E86F51" />
              <rect x="65" y="1" width="28" height="28" rx="5" fill="#7A9E7E" />
              <polygon points="130,2 145,28 115,28" fill="#E9B44C" />
              <circle cx="180" cy="15" r="14" fill="#E86F51" />
              <rect x="215" y="1" width="28" height="28" rx="5" fill="#FAF8F5" stroke="#2D2A26" strokeWidth="2" strokeDasharray="4 4" />
              <text x="229" y="21" textAnchor="middle" fill="#E86F51" fontWeight="bold" fontSize="16">?</text>
            </g>
          </g>

          <g transform="translate(35, 435)">
            <rect x="0" y="0" width="96" height="34" rx="8" fill="#FDF8EE" stroke="#E9B44C" strokeWidth="1" />
            <text x="48" y="21" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              AGES 3–5
            </text>

            <rect x="110" y="0" width="100" height="34" rx="8" fill="#F0F5F1" stroke="#7A9E7E" strokeWidth="1" />
            <text x="160" y="21" textAnchor="middle" fill="#7A9E7E" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              46 PAGES
            </text>

            <rect x="224" y="0" width="106" height="34" rx="8" fill="#FDF0ED" stroke="#E86F51" strokeWidth="1" />
            <text x="277" y="21" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="11">
              US LETTER & A4
            </text>
          </g>
        </svg>
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
          <rect width="400" height="520" rx="16" fill="#FDF0ED" />
          <rect x="14" y="14" width="372" height="492" rx="12" fill="#FFFFFF" stroke="#E86F51" strokeWidth="2.5" />

          {/* Ribbon Badge */}
          <g transform="translate(245, 12)">
            <path d="M0 0H120V38L60 28L0 38V0Z" fill="#E86F51" />
            <text x="60" y="18" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-fredoka)" fontWeight="700" fontSize="11" letterSpacing="1">
              SAVE 48%
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
            228 Total Pages • Ages 3–5 • Print Unlimited Times
          </text>

          {/* Central Artwork: 5 mini book badges displayed harmoniously */}
          <g transform="translate(45, 190)">
            {/* 1: Alphabet */}
            <rect x="0" y="0" width="95" height="95" rx="10" fill="#FDF0ED" stroke="#E86F51" strokeWidth="1.5" />
            <text x="47.5" y="48" textAnchor="middle" fill="#E86F51" fontFamily="var(--font-fredoka)" fontWeight="bold" fontSize="30">Aa</text>
            <text x="47.5" y="75" textAnchor="middle" fill="#2D2A26" fontSize="10" fontWeight="600">Alphabet</text>

            {/* 2: Math */}
            <rect x="110" y="0" width="95" height="95" rx="10" fill="#FDF8EE" stroke="#E9B44C" strokeWidth="1.5" />
            <text x="157.5" y="48" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka)" fontWeight="bold" fontSize="30">123</text>
            <text x="157.5" y="75" textAnchor="middle" fill="#2D2A26" fontSize="10" fontWeight="600">Early Math</text>

            {/* 3: Scissors */}
            <rect x="220" y="0" width="95" height="95" rx="10" fill="#F0F5F1" stroke="#7A9E7E" strokeWidth="1.5" />
            <text x="267.5" y="48" textAnchor="middle" fill="#7A9E7E" fontFamily="var(--font-fredoka)" fontWeight="bold" fontSize="28">✂</text>
            <text x="267.5" y="75" textAnchor="middle" fill="#2D2A26" fontSize="10" fontWeight="600">Scissor Skills</text>

            {/* 4: Dino */}
            <rect x="55" y="110" width="95" height="95" rx="10" fill="#EEF6FC" stroke="#6DAEDB" strokeWidth="1.5" />
            <text x="102.5" y="158" textAnchor="middle" fill="#6DAEDB" fontFamily="var(--font-fredoka)" fontWeight="bold" fontSize="30">🦕</text>
            <text x="102.5" y="185" textAnchor="middle" fill="#2D2A26" fontSize="10" fontWeight="600">Coloring</text>

            {/* 5: Mazes */}
            <rect x="165" y="110" width="95" height="95" rx="10" fill="#FDF8EE" stroke="#E9B44C" strokeWidth="1.5" />
            <text x="212.5" y="158" textAnchor="middle" fill="#E9B44C" fontFamily="var(--font-fredoka)" fontWeight="bold" fontSize="30">🧩</text>
            <text x="212.5" y="185" textAnchor="middle" fill="#2D2A26" fontSize="10" fontWeight="600">Logic Mazes</text>
          </g>

          <g transform="translate(35, 435)">
            <rect x="0" y="0" width="100" height="34" rx="8" fill="#FDF0ED" stroke="#E86F51" strokeWidth="1" />
            <text x="50" y="21" textAnchor="middle" fill="#E86F51" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              BEST VALUE
            </text>

            <rect x="114" y="0" width="100" height="34" rx="8" fill="#F0F5F1" stroke="#7A9E7E" strokeWidth="1" />
            <text x="164" y="21" textAnchor="middle" fill="#7A9E7E" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="12">
              228 PAGES
            </text>

            <rect x="228" y="0" width="102" height="34" rx="8" fill="#FDF8EE" stroke="#E9B44C" strokeWidth="1" />
            <text x="279" y="21" textAnchor="middle" fill="#2D2A26" fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="11">
              $15 (WAS $29)
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
      <rect x="15" y="15" width="370" height="490" rx="4" fill="#FFFFFF" stroke="#EAE4DC" strokeWidth="1" />

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
          DOODLECUB WORKBOOKS • PRINTABLE DIGITAL EDITION
        </text>
        <text x="340" y="16" textAnchor="end" fill="#6B655E" fontSize="9">
          Page {index + 1}
        </text>
      </g>
    </svg>
  );
}
