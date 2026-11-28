import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-cream/40 border-t border-border-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-heading font-medium text-2xl sm:text-3xl text-charcoal tracking-tight">
            You Might Also Love
          </h2>
          <p className="text-muted text-sm">
            Pair with these companion workbooks for a complete screen-free routine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
