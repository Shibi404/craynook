import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';
import { ArrowRightIcon } from '@/components/ui/Icons';

interface FeaturedBundleProps {
  bundle: Product;
}

export function FeaturedBundle({ bundle }: FeaturedBundleProps) {
  const shortTitles = [
    'Alphabet Tracing',
    'Early Math 1–20',
    'Scissor Skills',
    'Dino Coloring',
    'Logic Mazes',
  ];

  return (
    <section id="bundle" className="py-10 md:py-16 bg-cream/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Details */}
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <div className="inline-block bg-coral-light text-coral font-heading font-bold text-xs px-3 py-1 rounded-full">
              Best Value • Save 48%
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
                The Complete Preschool Bundle
              </h2>
              <p className="text-muted text-sm mt-1">
                All 5 workbooks · 228 printable pages · Instant PDF
              </p>
            </div>

            {/* Clean Book Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              {shortTitles.map((title, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-cream text-charcoal text-xs font-heading font-medium"
                >
                  {title}
                </span>
              ))}
            </div>

            {/* Pricing & Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-bold text-3xl text-charcoal">
                  $15
                </span>
                <span className="text-sm text-muted line-through">
                  $29
                </span>
              </div>

              <Link
                href={`/products/${bundle.slug}`}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-sm shadow-sm hover:shadow-md hover:shadow-coral/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <span>View Bundle</span>
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <Link
            href={`/products/${bundle.slug}`}
            className="w-56 sm:w-64 aspect-4/5 rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white transition-shadow duration-300 shrink-0"
          >
            <BookCoverSvg slug={bundle.slug} title={bundle.title} />
          </Link>
        </div>
      </div>
    </section>
  );
}
