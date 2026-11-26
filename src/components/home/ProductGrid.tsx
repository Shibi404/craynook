'use client';

import React, { useState } from 'react';
import { Product, FilterCategory } from '@/types/product';
import { CATEGORIES } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
            Explore All Printable Workbooks
          </h2>
          <p className="text-muted text-sm sm:text-base">
            Carefully structured for ages 3–5. Clean layouts, clear stroke lines, and high-contrast ink-friendly pages.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all ${
                  isActive
                    ? 'bg-charcoal text-white shadow-md'
                    : 'bg-cream text-charcoal hover:bg-border-warm/60 border border-border-warm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
