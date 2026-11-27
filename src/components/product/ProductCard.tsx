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
      className="group flex flex-col transition-all duration-200"
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
        <span className="text-[11px] text-muted font-medium mb-1">
          {product.category} · {product.pageCount} pages
        </span>

        {/* Title */}
        <h3 className="font-heading font-semibold text-base text-charcoal group-hover:text-coral transition-colors line-clamp-1">
          {product.title}
        </h3>

        {/* Pricing: Clean, prominent Plus Jakarta Sans numerals */}
        <div className="flex items-baseline gap-2 pt-2.5 mt-auto">
          <span className="font-body font-bold text-2xl text-charcoal tracking-tight">
            ${product.price}
          </span>
          {product.compareAtPrice && (
            <span className="font-body text-sm font-medium text-muted/50 line-through">
              ${product.compareAtPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
