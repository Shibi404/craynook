'use client';

import React from 'react';
import Link from 'next/link';
import { CartItem } from '@/types/cart';
import { useCart } from '@/context/CartContext';
import { BookCoverSvg } from '@/components/ui/BookCoverSvg';
import { MinusIcon, PlusIcon, TrashIcon } from '@/components/ui/Icons';

interface CartItemRowProps {
  item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem, closeCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-3 py-4 border-b border-border-warm last:border-b-0 items-start">
      {/* Thumbnail Cover */}
      <Link
        href={`/products/${product.slug}`}
        onClick={closeCart}
        className="w-16 h-20 shrink-0 rounded-xl overflow-hidden border border-border-warm bg-white shadow-sm hover:opacity-90 transition-opacity"
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
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>

        <p className="text-xs text-muted mt-0.5">
          {product.pageCount} pages • US Letter & A4
        </p>

        {/* Quantity Controls & Remove */}
        <div className="flex items-center justify-between mt-2.5">
          <div className="flex items-center border border-border-warm rounded-full bg-cream px-1.5 py-0.5">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="p-1 text-muted hover:text-charcoal transition-colors rounded-full"
              aria-label="Decrease quantity"
            >
              <MinusIcon size={12} />
            </button>
            <span className="w-6 text-center text-xs font-semibold text-charcoal font-heading">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="p-1 text-muted hover:text-charcoal transition-colors rounded-full"
              aria-label="Increase quantity"
            >
              <PlusIcon size={12} />
            </button>
          </div>

          <button
            onClick={() => removeItem(product.id)}
            className="text-xs text-muted hover:text-coral flex items-center gap-1 transition-colors p-1"
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
