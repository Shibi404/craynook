'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@/components/ui/Icons';

export function FeaturedBundle() {
  return (
    <section id="bundle" className="py-14 md:py-24 bg-cream/50 border-t border-border-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Editorial Heading: 'Good together.' */}
        <h2 className="font-heading font-medium text-4xl sm:text-5xl text-charcoal tracking-tight">
          Good together.
        </h2>

        {/* 2 Bundle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Core Readiness Trio */}
          <Link
            href="/products/core-readiness-trio"
            className="group rounded-2xl bg-white border border-border-warm p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            {/* Visual: 3 Books fanned naturally across the card */}
            <div className="h-[240px] sm:h-[280px] w-full flex items-center justify-center relative my-2 px-2">
              <div className="relative w-full max-w-[380px] h-full flex items-center justify-center">
                {/* Book 1: Alphabet (Left - tilted -4deg) */}
                <div className="absolute left-[2%] bottom-[10%] w-[36%] aspect-3/4 -rotate-[4deg] rounded-md sm:rounded-lg overflow-hidden shadow-md shadow-charcoal/15 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src="/alphabet_tracing_workbook.png"
                    alt="Alphabet Tracing & Phonics"
                    width={1792}
                    height={2400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Book 2: Numbers & Early Math (Center - slightly tilted 1deg) */}
                <div className="relative bottom-[8%] w-[38%] aspect-3/4 rotate-[1deg] rounded-md sm:rounded-lg overflow-hidden shadow-lg shadow-charcoal/20 z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  <Image
                    src="/numbers_early_math_cover_page.png"
                    alt="Numbers & Early Math"
                    width={1792}
                    height={2400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Book 3: Pre-Writing & Scissor Skills (Right - tilted 5deg) */}
                <div className="absolute right-[2%] bottom-[10%] w-[36%] aspect-3/4 rotate-[5deg] rounded-md sm:rounded-lg overflow-hidden shadow-md shadow-charcoal/15 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src="/pre_writing_scissor_skills_cover_page.png"
                    alt="Pre-Writing & Scissor Skills"
                    width={1792}
                    height={2400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-6 space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-heading font-medium text-2xl sm:text-3xl text-charcoal group-hover:text-coral transition-colors">
                  Core Readiness Trio
                </h3>
                <span className="font-heading sm:font-body font-semibold text-2xl sm:text-3xl text-charcoal">
                  $15
                </span>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Alphabet tracing. Early numbers. Scissor skills.
              </p>

              <div className="pt-4 flex items-center justify-between text-xs text-charcoal/80 font-medium border-t border-border-warm">
                <span>3 books · 88 pages</span>
                <span className="flex items-center gap-1 font-semibold group-hover:text-coral underline underline-offset-4 decoration-charcoal/30 group-hover:decoration-coral transition-colors">
                  Explore <ArrowRightIcon size={13} />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2: The Complete CrayNook Bundle */}
          <Link
            href="/products/the-complete-craynook-bundle"
            className="group rounded-2xl bg-white border border-border-warm p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            {/* Visual: 5 Books in 2 Rows matching the reference card grid */}
            <div className="h-[240px] sm:h-[280px] w-full flex flex-col items-center justify-center gap-2.5 my-2 px-2">
              {/* Row 1: 3 books */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
                <div className="w-[26%] max-w-[85px] sm:max-w-[95px] aspect-3/4 rounded-sm sm:rounded-md overflow-hidden shadow-md shadow-charcoal/15 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src="/alphabet_tracing_workbook.png"
                    alt="Alphabet Tracing"
                    width={1792}
                    height={2400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[26%] max-w-[85px] sm:max-w-[95px] aspect-3/4 rounded-sm sm:rounded-md overflow-hidden shadow-md shadow-charcoal/15 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src="/numbers_early_math_cover_page.png"
                    alt="Numbers & Early Math"
                    width={1792}
                    height={2400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[26%] max-w-[85px] sm:max-w-[95px] aspect-3/4 rounded-sm sm:rounded-md overflow-hidden shadow-md shadow-charcoal/15 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src="/pre_writing_scissor_skills_cover_page.png"
                    alt="Scissor Skills"
                    width={1792}
                    height={2400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Row 2: 2 books centered */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
                <div className="w-[26%] max-w-[85px] sm:max-w-[95px] aspect-3/4 rounded-sm sm:rounded-md overflow-hidden shadow-md shadow-charcoal/15 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src="/dinosaur_colouring_book_cover_page.png"
                    alt="Dinosaur Coloring Book"
                    width={1792}
                    height={2400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[26%] max-w-[85px] sm:max-w-[95px] aspect-3/4 rounded-sm sm:rounded-md overflow-hidden shadow-md shadow-charcoal/15 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src="/logic_mazes_patterns_cover_page.png"
                    alt="Logic, Mazes & Patterns"
                    width={1792}
                    height={2400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-6 space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-heading font-medium text-2xl sm:text-3xl text-charcoal group-hover:text-coral transition-colors">
                  The Complete CrayNook Bundle
                </h3>
                <span className="font-heading sm:font-body font-semibold text-2xl sm:text-3xl text-charcoal">
                  $19
                </span>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed">
                All five workbooks. Every kind of learning.
              </p>

              <div className="pt-4 flex items-center justify-between text-xs text-charcoal/80 font-medium border-t border-border-warm">
                <span>5 books · 120 pages</span>
                <span className="flex items-center gap-1 font-semibold group-hover:text-coral underline underline-offset-4 decoration-charcoal/30 group-hover:decoration-coral transition-colors">
                  Explore <ArrowRightIcon size={13} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
