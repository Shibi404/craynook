'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';
import { ZoomInIcon, CloseIcon } from '@/components/ui/Icons';

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  // 0 = cover, 1..N = preview pages
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const previewCount = product.previewImages.length;
  const totalSlides = 1 + previewCount;

  return (
    <div className="space-y-4">
      {/* Main Viewport */}
      <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden bg-white shadow-md group">
        <div className="w-full h-full p-2">
          {activeIndex === 0 ? (
            <BookCoverSvg slug={product.slug} title={product.title} />
          ) : (
            <BookCoverSvg
              slug={product.slug}
              type="preview"
              previewIndex={activeIndex - 1}
              title={`${product.title} Preview Page ${activeIndex}`}
            />
          )}
        </div>

        {/* Zoom Lightbox Trigger */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-xs text-charcoal hover:text-coral shadow-sm hover:scale-105 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Zoom preview image"
        >
          <ZoomInIcon size={18} />
        </button>

        {/* Slide Label */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs text-charcoal text-xs font-heading font-semibold px-3 py-1 rounded-full shadow-xs">
          {activeIndex === 0 ? 'Front Cover' : `Interior Preview ${activeIndex} of ${previewCount}`}
        </div>
      </div>

      {/* Thumbnail Selector Strip */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
        {/* Cover Thumbnail */}
        <button
          onClick={() => setActiveIndex(0)}
          className={`relative w-20 h-24 shrink-0 rounded-2xl overflow-hidden bg-white transition-all ${
            activeIndex === 0
              ? 'ring-2 ring-coral shadow-md scale-105'
              : 'shadow-xs hover:ring-1 hover:ring-coral/40 opacity-75 hover:opacity-100'
          }`}
          aria-label="View front cover"
        >
          <BookCoverSvg slug={product.slug} title="Cover" />
        </button>

        {/* Interior Page Thumbnails */}
        {product.previewImages.map((_, idx) => {
          const slideIdx = idx + 1;
          const isActive = activeIndex === slideIdx;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(slideIdx)}
              className={`relative w-20 h-24 shrink-0 rounded-2xl overflow-hidden bg-white transition-all ${
                isActive
                  ? 'ring-2 ring-coral shadow-md scale-105'
                  : 'shadow-xs hover:ring-1 hover:ring-coral/40 opacity-75 hover:opacity-100'
              }`}
              aria-label={`View preview page ${slideIdx}`}
            >
              <BookCoverSvg slug={product.slug} type="preview" previewIndex={idx} />
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-xl w-full max-h-[90vh] bg-white rounded-3xl p-6 shadow-2xl flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 text-muted hover:text-charcoal rounded-full hover:bg-cream transition-colors"
              aria-label="Close zoom preview"
            >
              <CloseIcon size={22} />
            </button>

            {/* Lightbox Content */}
            <div className="w-full aspect-4/5 max-h-[70vh] rounded-2xl overflow-hidden shadow-lg bg-cream/30">
              {activeIndex === 0 ? (
                <BookCoverSvg slug={product.slug} title={product.title} />
              ) : (
                <BookCoverSvg
                  slug={product.slug}
                  type="preview"
                  previewIndex={activeIndex - 1}
                />
              )}
            </div>

            <p className="mt-4 text-xs text-muted font-heading font-medium">
              {activeIndex === 0
                ? 'High-contrast print cover • 300 DPI vector artwork'
                : `Interior worksheet preview page ${activeIndex} of ${previewCount}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
