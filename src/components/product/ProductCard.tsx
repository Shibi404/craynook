'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';
import { CartIcon, FileTextIcon } from '@/components/ui/Icons';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-border-warm hover:border-coral/40 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-coral/5 hover:-translate-y-1">
      {/* Cover Image Container */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-cream border border-border-warm/70 group-hover:border-coral/20 transition-colors"
      >
        <BookCoverSvg slug={product.slug} title={product.title} />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-charcoal border border-border-warm text-[11px] font-heading font-bold px-2.5 py-1 rounded-full shadow-xs">
            {product.badge}
          </div>
        )}

        {/* Formats Pill */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-charcoal text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs border border-border-warm/60">
          <FileTextIcon size={11} className="text-muted" />
          <span>Letter & A4</span>
        </div>
      </Link>

      {/* Info Content */}
      <div className="flex flex-col flex-1 mt-4">
        {/* Meta badges */}
        <div className="flex items-center gap-2 text-xs text-muted font-medium mb-1.5">
          <span className="bg-cream px-2 py-0.5 rounded-md text-charcoal font-heading font-semibold text-[11px]">
            {product.ageRange}
          </span>
          <span>•</span>
          <span>{product.pageCount} pages</span>
        </div>

        {/* Title */}
        <Link
          href={`/products/${product.slug}`}
          className="font-heading font-bold text-lg text-charcoal group-hover:text-coral transition-colors line-clamp-1"
        >
          {product.title}
        </Link>

        {/* Subtitle / Short description */}
        <p className="text-xs text-muted line-clamp-2 mt-1 leading-relaxed flex-1">
          {product.subtitle}
        </p>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between pt-4 mt-3 border-t border-border-warm">
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-bold text-xl text-charcoal">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-muted line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-cream hover:bg-coral text-charcoal hover:text-white font-heading font-semibold text-xs border border-border-warm hover:border-coral transition-all active:scale-95 shadow-xs"
            aria-label={`Add ${product.title} to cart`}
          >
            <CartIcon size={14} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
