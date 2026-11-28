'use client';

import React from 'react';
import Link from 'next/link';
import { CartItem } from '@/types/cart';
import { useCart } from '@/context/CartContext';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';
import { TrashIcon } from '@/components/ui/Icons';

interface CartItemRowProps {
  item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
  const { removeItem, closeCart } = useCart();
  const { product } = item;

  return (
    <div className="flex gap-3 py-4 border-b border-border-warm last:border-b-0 items-start">
      {/* Thumbnail Cover */}
      <Link
        href={`/products/${product.slug}`}
        onClick={closeCart}
        className="w-16 h-20 shrink-0 rounded-xl overflow-hidden bg-white shadow-xs hover:opacity-90 transition-opacity"
      >
        <BookCoverSvg slug={product.slug} title={product.title} />
      </Link>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/products/${product.slug}`}
            onClick={closeCart}
            className="font-heading font-semibold text-sm text-charcoal hover:text-coral transition-colors line-clamp-1"
          >
            {product.title}
          </Link>
          <span className="font-heading font-bold text-sm text-charcoal shrink-0">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-xs text-muted mt-0.5">
          {product.pageCount} pages • US Letter &amp; A4
        </p>

        {/* Remove action */}
        <div className="flex items-center justify-start mt-2">
          <button
            onClick={() => removeItem(product.id)}
            className="text-xs text-muted hover:text-coral flex items-center gap-1 transition-colors p-1 -ml-1 cursor-pointer"
            aria-label={`Remove ${product.title} from cart`}
          >
            <TrashIcon size={13} />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}
