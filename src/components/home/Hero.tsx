'use client';

import React from 'react';
import Link from 'next/link';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';
import {
  DownloadIcon,
  PrinterIcon,
  SparklesIcon,
  StarIcon,
  ArrowRightIcon,
} from '@/components/ui/Icons';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 bg-linear-to-b from-cream via-cream to-white">
      {/* Decorative Warm Shapes */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-radial from-coral-light/60 via-marigold-light/40 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border-warm text-charcoal text-xs font-semibold shadow-xs">
              <span className="flex items-center text-marigold">
                <StarIcon size={13} />
                <StarIcon size={13} />
                <StarIcon size={13} />
                <StarIcon size={13} />
                <StarIcon size={13} />
              </span>
              <span className="text-muted">Loved by 4,200+ homeschooling & preschool parents</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.12]">
              Screen-Free Printable Workbooks for{' '}
              <span className="text-coral underline decoration-coral/30 decoration-wavy decoration-2">
                Little Learners
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Joyful, Montessori-inspired digital PDF workbooks for ages 3–5. 
              Delivered straight to your inbox to download and print unlimited times at home.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/#shop"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-base shadow-lg shadow-coral/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Shop Workbooks</span>
                <ArrowRightIcon size={18} />
              </Link>
              <Link
                href="/#free-sample"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-cream border border-border-warm text-charcoal font-heading font-semibold text-base shadow-xs transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <SparklesIcon size={16} className="text-marigold" />
                <span>Get Free Sample Pack</span>
              </Link>
            </div>

            {/* Reassurance Pills */}
            <div className="pt-6 border-t border-border-warm flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-muted font-medium">
              <span className="flex items-center gap-1.5">
                <DownloadIcon size={15} className="text-coral" />
                Instant PDF Download
              </span>
              <span className="flex items-center gap-1.5">
                <PrinterIcon size={15} className="text-sage" />
                US Letter & A4 Included
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-marigold" />
                Print Unlimited Times
              </span>
            </div>
          </div>

          {/* Right Column: Tactile Book Display */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Stack Effect */}
            <div className="relative w-72 sm:w-80 aspect-4/5 max-w-full">
              {/* Background Tilted Book 1 */}
              <div className="absolute -inset-4 transform -rotate-6 rounded-3xl bg-marigold-light border border-marigold/30 shadow-md opacity-80" />
              {/* Background Tilted Book 2 */}
              <div className="absolute -inset-2 transform rotate-4 rounded-3xl bg-sage-light border border-sage/30 shadow-md opacity-90" />
              {/* Main Prominent Book */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-border-warm bg-white">
                <BookCoverSvg
                  slug="alphabet-tracing-phonics-workbook"
                  title="Alphabet Tracing & Phonics Workbook"
                />
              </div>

              {/* Floating Savings Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-border-warm rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-coral-light text-coral flex items-center justify-center font-bold text-lg font-heading">
                  $6
                </div>
                <div>
                  <p className="text-xs font-heading font-bold text-charcoal">
                    Instant Download
                  </p>
                  <p className="text-[11px] text-muted">
                    48 Printable Activity Pages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
