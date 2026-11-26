'use client';

import React from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import {
  CartIcon,
  CheckIcon,
  DownloadIcon,
  PrinterIcon,
  ShieldCheckIcon,
  FileTextIcon,
} from '@/components/ui/Icons';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem, checkout, isCheckingOut } = useCart();

  return (
    <div className="space-y-6">
      {/* Category & Age badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="bg-coral-light text-coral font-heading font-bold text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>
        <span className="bg-cream text-charcoal font-heading font-semibold text-xs px-3 py-1 rounded-full border border-border-warm">
          {product.ageRange}
        </span>
        <span className="text-xs text-muted">
          {product.pageCount} printable pages
        </span>
      </div>

      {/* Title & Subtitle */}
      <div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal tracking-tight">
          {product.title}
        </h1>
        <p className="text-muted text-base mt-2 leading-relaxed">
          {product.subtitle}
        </p>
      </div>

      {/* Pricing Strip */}
      <div className="flex items-baseline gap-3 pt-2">
        <span className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
          ${product.price.toFixed(2)}
        </span>
        {product.compareAtPrice && (
          <span className="text-base text-muted line-through font-medium">
            ${product.compareAtPrice.toFixed(2)}
          </span>
        )}
        <span className="bg-sage-light text-sage font-heading font-semibold text-xs px-2.5 py-1 rounded-full">
          One-Time Purchase
        </span>
      </div>

      {/* Formats Strip */}
      <div className="flex items-center gap-2 p-3 rounded-2xl bg-cream border border-border-warm text-xs text-charcoal">
        <FileTextIcon size={16} className="text-coral shrink-0" />
        <span>
          Includes both <strong>US Letter (8.5×11&quot;)</strong> &amp;{' '}
          <strong>International A4</strong> PDF files.
        </span>
      </div>

      {/* Actions: Add to Cart + Buy Now */}
      <div className="space-y-3 pt-2">
        <button
          onClick={() => addItem(product)}
          className="w-full py-4 px-6 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-base shadow-lg shadow-coral/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
        >
          <CartIcon size={18} />
          <span>Add to Cart • ${product.price.toFixed(2)}</span>
        </button>

        <button
          onClick={() => checkout({ product, quantity: 1 })}
          disabled={isCheckingOut}
          className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-cream border border-border-warm text-charcoal font-heading font-semibold text-sm transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {isCheckingOut ? (
            <span>Connecting to checkout...</span>
          ) : (
            <>
              <ShieldCheckIcon size={16} className="text-sage" />
              <span>Instant Buy Now (1-Click)</span>
            </>
          )}
        </button>
      </div>

      {/* Reassurance pills */}
      <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <DownloadIcon size={14} className="text-coral" />
          <span>Instant Email Delivery</span>
        </div>
        <div className="flex items-center gap-1.5">
          <PrinterIcon size={14} className="text-sage" />
          <span>Print Unlimited Times</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheckIcon size={14} className="text-marigold" />
          <span>No Account Needed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-sky" />
          <span>14-Day Guarantee</span>
        </div>
      </div>

      {/* What's Inside Bullet List */}
      <div className="pt-6 border-t border-border-warm space-y-4">
        <h3 className="font-heading font-bold text-lg text-charcoal">
          What&apos;s Inside This Workbook
        </h3>
        <ul className="space-y-2.5">
          {product.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal leading-relaxed">
              <span className="text-sage mt-0.5 shrink-0">
                <CheckIcon size={16} />
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bundle specifics if applicable */}
      {product.isBundle && product.bundleIncludes && (
        <div className="pt-6 border-t border-border-warm space-y-3">
          <h3 className="font-heading font-bold text-lg text-charcoal">
            The 5 Workbooks Included:
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {product.bundleIncludes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-xl bg-cream border border-border-warm text-xs font-medium text-charcoal"
              >
                <span className="w-5 h-5 rounded-full bg-coral-light text-coral font-bold flex items-center justify-center text-[10px]">
                  {idx + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
