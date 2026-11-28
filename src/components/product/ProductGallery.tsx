'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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

  // Ensure view starts at the very top when navigating to product
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [product.slug]);

  const previewCount = product.previewImages.length;
  const currentPreviewSrc = activeIndex > 0 ? product.previewImages[activeIndex - 1] : null;
  const isCurrentRealImage = Boolean(currentPreviewSrc && !currentPreviewSrc.endsWith('.svg'));

  return (
    <div className="space-y-4">
      {/* Main Viewport */}
      <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden bg-[#F4EFEB] border border-border-warm shadow-md group">
        <div className="w-full h-full">
          {activeIndex === 0 ? (
            <BookCoverSvg slug={product.slug} title={product.title} priority />
          ) : isCurrentRealImage && currentPreviewSrc ? (
            <div className="relative w-full h-full bg-[#F4EFEB] flex items-center justify-center p-3 sm:p-5">
              <Image
                src={currentPreviewSrc}
                alt={`${product.title} Preview Page ${activeIndex}`}
                width={2479}
                height={3509}
                className="w-full h-full object-contain rounded-xl shadow-md shadow-charcoal/10 border border-border-warm/80 bg-white"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={activeIndex === 1}
              />
            </div>
          ) : (
            <div className="relative w-full h-full bg-[#F4EFEB] flex items-center justify-center p-3 sm:p-5">
              <div className="w-full h-full rounded-xl shadow-md shadow-charcoal/10 border border-border-warm/80 overflow-hidden bg-white">
                <BookCoverSvg
                  slug={product.slug}
                  type="preview"
                  previewIndex={activeIndex - 1}
                  title={`${product.title} Preview Page ${activeIndex}`}
                />
              </div>
            </div>
          )}
        </div>

        {/* Zoom Lightbox Trigger */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-xs text-charcoal hover:text-coral shadow-sm hover:scale-105 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
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
      <div className="flex items-center gap-3 overflow-x-auto py-1.5 px-0.5 scrollbar-none">
        {/* Cover Thumbnail */}
        <button
          onClick={() => setActiveIndex(0)}
          className={`relative w-16 h-20 sm:w-20 sm:h-24 shrink-0 rounded-2xl overflow-hidden bg-white border-2 transition-all cursor-pointer ${
            activeIndex === 0
              ? 'border-coral ring-2 ring-coral/25 shadow-sm'
              : 'border-border-warm hover:border-charcoal/30 opacity-70 hover:opacity-100 shadow-2xs'
          }`}
          aria-label="View front cover"
        >
          <BookCoverSvg slug={product.slug} title="Cover" />
        </button>

        {/* Interior Page Thumbnails */}
        {product.previewImages.map((imgSrc, idx) => {
          const slideIdx = idx + 1;
          const isActive = activeIndex === slideIdx;
          const isRealImage = Boolean(imgSrc && !imgSrc.endsWith('.svg'));

          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(slideIdx)}
              className={`relative w-16 h-20 sm:w-20 sm:h-24 shrink-0 rounded-2xl overflow-hidden bg-white border-2 transition-all cursor-pointer ${
                isActive
                  ? 'border-coral ring-2 ring-coral/25 shadow-sm'
                  : 'border-border-warm hover:border-charcoal/30 opacity-70 hover:opacity-100 shadow-2xs'
              }`}
              aria-label={`View preview page ${slideIdx}`}
            >
              {isRealImage ? (
                <Image
                  src={imgSrc}
                  alt={`Preview page ${slideIdx}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              ) : (
                <BookCoverSvg slug={product.slug} type="preview" previewIndex={idx} />
              )}
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
              className="absolute top-4 right-4 p-2 text-muted hover:text-charcoal rounded-full hover:bg-cream transition-colors cursor-pointer"
              aria-label="Close zoom preview"
            >
              <CloseIcon size={22} />
            </button>

            {/* Lightbox Content */}
            <div className="relative w-full aspect-4/5 max-h-[70vh] rounded-2xl overflow-hidden shadow-lg bg-[#F4EFEB] border border-border-warm flex items-center justify-center p-3 sm:p-5">
              {activeIndex === 0 ? (
                <BookCoverSvg slug={product.slug} title={product.title} />
              ) : isCurrentRealImage && currentPreviewSrc ? (
                <Image
                  src={currentPreviewSrc}
                  alt={`${product.title} Preview Page ${activeIndex}`}
                  width={2479}
                  height={3509}
                  className="w-full h-full object-contain rounded-xl shadow-md shadow-charcoal/10 border border-border-warm/80 bg-white"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              ) : (
                <div className="w-full h-full rounded-xl shadow-md shadow-charcoal/10 border border-border-warm/80 overflow-hidden bg-white">
                  <BookCoverSvg
                    slug={product.slug}
                    type="preview"
                    previewIndex={activeIndex - 1}
                  />
                </div>
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
