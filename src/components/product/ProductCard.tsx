import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';
import { ArrowRightIcon } from '@/components/ui/Icons';

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
      <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
        <BookCoverSvg slug={product.slug} title={product.title} />

        {product.badge && (
          <div className="absolute top-2.5 left-2.5 bg-white/95 text-charcoal text-[10px] font-heading font-bold px-2 py-0.5 rounded-full shadow-2xs">
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

        {/* Pricing & Arrow */}
        <div className="flex items-center justify-between pt-3 mt-auto">
          <div className="flex items-baseline gap-1.5">
            <span className="font-heading font-bold text-lg text-charcoal">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-muted line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          <span className="text-xs font-heading font-semibold text-coral flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            <span>View</span>
            <ArrowRightIcon size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
