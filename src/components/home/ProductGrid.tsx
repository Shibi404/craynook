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
    <section id="shop" className="py-12 md:py-18 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Clean Header & Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border-warm pb-5">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
            Workbooks
          </h2>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => {
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
