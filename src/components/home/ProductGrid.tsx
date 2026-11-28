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

  // Display only individual workbooks in this section
  const workbooks = products.filter((p) => !p.isBundle);

  const availableCategories = CATEGORIES.filter(
    (cat) => cat === 'All' || workbooks.some((p) => p.category === cat)
  );

  const filteredProducts =
    activeCategory === 'All'
      ? workbooks
      : workbooks.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="py-14 md:py-20 bg-white border-t border-border-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Clean Header & Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border-warm pb-5">
          <h2 className="font-heading font-medium text-2xl sm:text-3xl text-charcoal tracking-tight">
            Workbooks
          </h2>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-1.5">
            {availableCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold transition-all ${
                    isActive
                      ? 'bg-charcoal text-white shadow-xs'
                      : 'bg-cream text-muted hover:text-charcoal hover:bg-border-warm/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards: Centers items on incomplete rows (e.g. the 2 books on row 2) */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-14">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[calc(50%-16px)] lg:w-[calc((100%-64px)/3)] max-w-sm sm:max-w-none flex flex-col pb-8 border-b border-border-warm last:border-b-0 last:pb-0 sm:pb-0 sm:border-b-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
