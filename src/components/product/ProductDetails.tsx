'use client';

import React from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { CartIcon, CheckIcon, ShieldCheckIcon, ArrowRightIcon } from '@/components/ui/Icons';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem, checkout, isCheckingOut } = useCart();

  return (
    <div className="space-y-6">
      {/* Title & Metadata */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="font-heading font-semibold text-charcoal">
            {product.category}
          </span>
          <span>•</span>
          <span>{product.pageCount} pages</span>
          <span>•</span>
          <span>US Letter &amp; A4</span>
        </div>

        <h1 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal tracking-tight">
          {product.title}
        </h1>

        <p className="text-sm text-muted leading-relaxed">
          {product.subtitle}
        </p>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-2.5">
        <span className="font-body font-bold text-3xl text-charcoal tracking-tight">
          ${product.price}
        </span>
        {product.compareAtPrice && (
          <span className="font-body text-base font-medium text-muted/50 line-through">
            ${product.compareAtPrice}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="space-y-2.5">
        <button
          onClick={() => addItem(product)}
          className="w-full py-3.5 px-6 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-base shadow-sm hover:shadow-md hover:shadow-coral/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <CartIcon size={18} />
          <span>Add to Cart</span>
        </button>

        <button
          onClick={() => checkout({ product, quantity: 1 })}
          disabled={isCheckingOut}
          className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-cream/90 border border-border-warm hover:border-charcoal/25 text-charcoal font-heading font-semibold text-base shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
        >
          {isCheckingOut ? (
            <span>Connecting...</span>
          ) : (
            <>
              <ShieldCheckIcon size={16} className="text-sage" />
              <span>Buy Now (Instant Checkout)</span>
              <ArrowRightIcon size={15} className="text-muted" />
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-muted text-center">
        Instant PDF email delivery • Print unlimited times
      </p>

      {/* Highlights */}
      <div className="pt-4 border-t border-border-warm space-y-3">
        <h2 className="font-heading font-bold text-sm text-charcoal uppercase tracking-wider">
          What&apos;s included
        </h2>
        <ul className="space-y-2 text-xs text-charcoal">
          {product.highlights.slice(0, 4).map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-sage mt-0.5 shrink-0">
                <CheckIcon size={14} />
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bundle contents if bundle */}
      {product.isBundle && product.bundleIncludes && (
        <div className="pt-4 border-t border-border-warm space-y-2">
          <p className="font-heading font-bold text-xs text-charcoal uppercase tracking-wider">
            All 5 workbooks:
          </p>
          <div className="grid grid-cols-1 gap-1.5">
            {product.bundleIncludes.map((item, idx) => (
              <div
                key={idx}
                className="text-xs text-muted flex items-center gap-2 py-1 border-b border-border-warm/40 last:border-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
