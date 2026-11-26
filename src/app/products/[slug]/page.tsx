import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS, getProductBySlug, getRelatedProducts } from '@/data/products';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductDetails } from '@/components/product/ProductDetails';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { ChevronRightIcon } from '@/components/ui/Icons';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Workbook Not Found',
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: `${product.title} | CrayNook Printable Workbooks`,
      description: product.subtitle,
      url: `https://craynook.com/products/${product.slug}`,
      type: 'website',
      images: [
        {
          url: product.coverImage,
          width: 800,
          height: 1040,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.subtitle,
    },
    other: {
      'product:price:amount': product.price.toString(),
      'product:price:currency': 'USD',
      'product:availability': 'in stock',
      'pinterest:rich_pin': 'true',
    },
  };
}

async function ProductContent({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.id, 3);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-border-warm bg-cream/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-coral transition-colors font-medium">
            Home
          </Link>
          <ChevronRightIcon size={12} />
          <Link href="/#shop" className="hover:text-coral transition-colors font-medium">
            Workbooks
          </Link>
          <ChevronRightIcon size={12} />
          <span className="text-charcoal font-semibold truncate max-w-[200px] sm:max-w-none">
            {product.title}
          </span>
        </div>
      </div>

      {/* Main Product Showcase */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Gallery Viewport */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <ProductGallery product={product} />
          </div>

          {/* Details & Buy Sidebar */}
          <div className="lg:col-span-6">
            <ProductDetails product={product} />
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts products={related} />
    </div>
  );
}

function ProductPageSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-border-warm bg-cream/40 h-11" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 animate-pulse">
          <div className="lg:col-span-6 aspect-4/5 rounded-3xl bg-cream/50" />
          <div className="lg:col-span-6 space-y-6 pt-4">
            <div className="h-6 w-32 bg-cream rounded-full" />
            <div className="h-10 w-3/4 bg-cream rounded-2xl" />
            <div className="h-20 w-full bg-cream/60 rounded-2xl" />
            <div className="h-14 w-full bg-cream rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProductPageSkeleton />}>
      <ProductContent params={params} />
    </Suspense>
  );
}
