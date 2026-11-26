'use client';

import React from 'react';
import Link from 'next/link';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';
import { ArrowRightIcon } from '@/components/ui/Icons';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-14 md:py-22 bg-cream/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Minimal Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
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
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-base shadow-md shadow-coral/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Shop Workbooks</span>
                <ArrowRightIcon size={16} />
              </Link>
              <Link
                href="/#free-sample"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-cream border border-border-warm text-charcoal font-heading font-semibold text-base transition-all hover:scale-[1.01] flex items-center justify-center"
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

          {/* Right Column: Clean Book Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-68 sm:w-76 aspect-4/5">
              <div className="absolute -inset-3 transform -rotate-4 rounded-3xl bg-marigold-light shadow-sm opacity-80" />
              <div className="absolute -inset-1.5 transform rotate-3 rounded-3xl bg-sage-light shadow-sm opacity-90" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white">
                <BookCoverSvg
                  slug="alphabet-tracing-phonics-workbook"
                  title="Alphabet Tracing & Phonics Workbook"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
