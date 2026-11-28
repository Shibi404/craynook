'use client';

import React from 'react';
import Link from 'next/link';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';
import { ArrowRightIcon } from '@/components/ui/Icons';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-14 md:py-22 bg-cream/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Minimal Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.15]">
              Screen-free workbooks for{' '}
              <span className="text-coral">little learners.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Gentle, printable PDFs designed for little hands. Download in seconds and print at home whenever you need fresh practice.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/#shop"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-base shadow-sm hover:shadow-md hover:shadow-coral/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Shop Workbooks</span>
                <ArrowRightIcon size={16} />
              </Link>
              <Link
                href="/#free-sample"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-cream/90 border border-border-warm hover:border-charcoal/25 text-charcoal font-heading font-semibold text-base shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center"
              >
                Free 8-Page Sample
              </Link>
            </div>

            {/* Minimal Trust Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-muted">
              <span>Instant PDF</span>
              <span>•</span>
              <span>US Letter &amp; A4</span>
              <span>•</span>
              <span>Print Unlimited Times</span>
            </div>
          </div>

          {/* Right Column: 3-Book Fanned Showcase */}
          <div className="lg:col-span-6 flex items-center justify-center pt-6 lg:pt-0">
            <div className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] h-[360px] sm:h-[450px] lg:h-[510px] flex items-center justify-center">
              {/* Soft Ambient Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-coral/15 via-marigold/15 to-sage/15 rounded-full blur-3xl pointer-events-none scale-95"
                aria-hidden="true"
              />

              {/* Left Book: Numbers & Early Math */}
              <Link
                href="/products/numbers-early-math-workbook"
                aria-label="Numbers & Early Math (1–20) Workbook"
                className="group absolute left-1/2 -translate-x-[85%] sm:-translate-x-[82%] -rotate-[3.5deg] translate-y-2 hover:translate-y-0.5 w-44 sm:w-56 lg:w-64 xl:w-68 aspect-4/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl z-10 transition-transform duration-200 ease-out cursor-pointer"
              >
                <BookCoverSvg
                  slug="numbers-early-math-workbook"
                  title="Numbers & Early Math (1–20)"
                  priority
                />
              </Link>

              {/* Right Book: Pre-Writing & Scissor Skills Pack */}
              <Link
                href="/products/pre-writing-scissor-skills-pack"
                aria-label="Pre-Writing & Scissor Skills Pack"
                className="group absolute left-1/2 translate-x-[-15%] sm:translate-x-[-18%] rotate-[3.5deg] translate-y-2 hover:translate-y-0.5 w-44 sm:w-56 lg:w-64 xl:w-68 aspect-4/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl z-10 transition-transform duration-200 ease-out cursor-pointer"
              >
                <BookCoverSvg
                  slug="pre-writing-scissor-skills-pack"
                  title="Pre-Writing & Scissor Skills Pack"
                  priority
                />
              </Link>

              {/* Center Book: Alphabet Tracing & Phonics Workbook */}
              <Link
                href="/products/alphabet-tracing-phonics-workbook"
                aria-label="Alphabet Tracing & Phonics Workbook"
                className="group absolute left-1/2 -translate-x-1/2 rotate-0 -translate-y-1 hover:-translate-y-2.5 w-48 sm:w-64 lg:w-72 xl:w-76 aspect-4/5 rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl z-20 transition-transform duration-200 ease-out cursor-pointer"
              >
                <BookCoverSvg
                  slug="alphabet-tracing-phonics-workbook"
                  title="Alphabet Tracing & Phonics Workbook"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
