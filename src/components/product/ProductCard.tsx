import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col w-full h-full transition-all duration-200"
    >
      {/* Cover Image */}
      <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-200 bg-cream/30">
        <BookCoverSvg slug={product.slug} title={product.title} />

        {product.badge && (
          <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-charcoal text-[10px] font-heading font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
            {product.badge}
          </div>
        )}
      </div>

      {/* Info Content */}
      <div className="flex flex-col flex-1 pt-3">
        {/* Category & Page Count at top as before */}
        <span className="text-[11px] text-muted font-medium mb-1">
          {product.category} · {product.pageCount} pages
        </span>

        {/* Title below, with Price on the right */}
        <div className="flex items-baseline justify-between gap-2.5 mt-auto">
          <h3 className="font-heading font-medium text-base text-charcoal group-hover:text-coral transition-colors line-clamp-1 flex-1">
            {product.title}
          </h3>
          <div className="flex items-baseline gap-1.5 shrink-0">
            {product.compareAtPrice && (
              <span className="font-body text-xs font-medium text-muted/50 line-through">
                ${product.compareAtPrice}
              </span>
            )}
            <span className="font-body font-bold text-xl sm:text-2xl text-charcoal tracking-tight">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
