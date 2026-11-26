import React from 'react';
import { PRODUCTS } from '@/data/products';
import { Hero } from '@/components/home/Hero';
import { FeaturedBundle } from '@/components/home/FeaturedBundle';
import { ProductGrid } from '@/components/home/ProductGrid';
import { HowItWorks } from '@/components/home/HowItWorks';
import { FreeSampleSection } from '@/components/home/FreeSampleSection';
import { FaqAccordion } from '@/components/home/FaqAccordion';

export default function HomePage() {
  const bundle = PRODUCTS.find((p) => p.isBundle) || PRODUCTS[PRODUCTS.length - 1];

  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedBundle bundle={bundle} />
      <ProductGrid products={PRODUCTS} />
      <HowItWorks />
      <FreeSampleSection />
      <FaqAccordion />
    </div>
  );
}
