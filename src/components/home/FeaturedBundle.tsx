'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';
import {
  CartIcon,
  CheckIcon,
  SparklesIcon,
  DownloadIcon,
  PrinterIcon,
} from '@/components/ui/Icons';

interface FeaturedBundleProps {
  bundle: Product;
}

export function FeaturedBundle({ bundle }: FeaturedBundleProps) {
  const { addItem, checkout, isCheckingOut } = useCart();

  return (
    <section id="bundle" className="py-12 md:py-16 bg-cream/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-linear-to-br from-white via-white to-coral-light/30 border-2 border-coral/30 p-6 sm:p-10 shadow-xl overflow-hidden">
          {/* Subtle Decorative Star Accent */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-coral/10 rounded-full blur-2xl pointer-events-none" />

          {/* Highlight Ribbon */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-coral text-white font-heading font-bold text-xs shadow-sm mb-6">
            <SparklesIcon size={14} />
            <span>BEST VALUE • SAVE 48% TODAY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Bundle Details & Inclusions */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
                  The Complete Preschool Bundle
                </h2>
                <p className="text-coral font-heading font-semibold text-lg mt-1">
                  All 5 Core Workbooks • 228 Total Printable Pages
                </p>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Everything your 3 to 5-year-old needs for kindergarten readiness. 
                Save 48% compared to buying each workbook separately, with lifetime unlimited reprinting rights.
              </p>

              {/* What's Included List */}
              <div className="bg-cream/70 rounded-2xl p-4 border border-border-warm space-y-2.5">
                <p className="text-xs font-heading font-bold text-charcoal uppercase tracking-wider">
                  Includes All 5 Standalone Workbooks:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal">
                  {bundle.bundleIncludes?.map((book, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-sage mt-0.5 shrink-0">
                        <CheckIcon size={13} />
                      </span>
                      <span>{book}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
                    ${bundle.price.toFixed(2)}
                  </span>
                  {bundle.compareAtPrice && (
                    <span className="text-base text-muted line-through font-medium">
                      ${bundle.compareAtPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="bg-coral-light text-coral font-heading font-bold text-xs px-2.5 py-1 rounded-full">
                    Save $14.00
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => addItem(bundle)}
                    className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-sm shadow-md shadow-coral/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <CartIcon size={16} />
                    <span>Add Bundle to Cart</span>
                  </button>

                  <button
                    onClick={() => checkout({ product: bundle, quantity: 1 })}
                    disabled={isCheckingOut}
                    className="px-5 py-3 rounded-2xl bg-white hover:bg-cream border border-border-warm text-charcoal font-heading font-semibold text-sm transition-all hover:scale-[1.01]"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Instant reassurance */}
              <div className="flex items-center gap-5 text-xs text-muted pt-2">
                <span className="flex items-center gap-1.5">
                  <DownloadIcon size={14} className="text-coral" />
                  Instant download
                </span>
                <span className="flex items-center gap-1.5">
                  <PrinterIcon size={14} className="text-sage" />
                  US Letter & A4
                </span>
                <span>• No subscription</span>
              </div>
            </div>

            {/* Right: Bundle Visual Cover */}
            <div className="lg:col-span-5 flex justify-center">
              <Link
                href={`/products/${bundle.slug}`}
                className="w-64 sm:w-72 aspect-4/5 rounded-2xl overflow-hidden shadow-xl border border-border-warm bg-white hover:scale-[1.02] transition-transform"
              >
                <BookCoverSvg slug={bundle.slug} title={bundle.title} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
