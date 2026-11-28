import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS, getProductBySlug, getRelatedProducts } from '@/data/products';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductDetails } from '@/components/product/ProductDetails';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { ArrowLeftIcon } from '@/components/ui/Icons';

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
      {/* Back to Workbooks Handle */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <Link
          href="/#shop"
          className="inline-flex items-center gap-2 text-sm font-heading font-medium text-muted hover:text-coral transition-colors group cursor-pointer"
        >
          <ArrowLeftIcon
            size={16}
            className="transition-transform group-hover:-translate-x-1 duration-200"
          />
          <span>All the workbooks</span>
        </Link>
      </div>

      {/* Main Product Showcase */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-10 md:pb-16">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="h-5 w-36 bg-cream rounded-full animate-pulse" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-10 md:pb-16">
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
