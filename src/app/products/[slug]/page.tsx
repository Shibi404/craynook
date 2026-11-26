import React from 'react';
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
      title: `${product.title} | DoodleCub Printable Workbooks`,
      description: product.subtitle,
      url: `https://doodlecub.com/products/${product.slug}`,
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

export default async function ProductPage({ params }: PageProps) {
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
