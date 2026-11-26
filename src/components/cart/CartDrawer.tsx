'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CartItemRow } from './CartItemRow';
import {
  CloseIcon,
  CartIcon,
  DownloadIcon,
  ShieldCheckIcon,
  PrinterIcon,
} from '@/components/ui/Icons';

export function CartDrawer() {
  const { items, isOpen, closeCart, cartCount, cartSubtotal, checkout, isCheckingOut } =
    useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeCart]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/30 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div
          ref={drawerRef}
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-border-warm animate-slide-left"
        >
          {/* Header */}
          <div className="p-5 border-b border-border-warm flex items-center justify-between bg-cream/50">
            <div className="flex items-center gap-2">
              <CartIcon size={20} className="text-coral" />
              <h2 className="font-heading font-bold text-lg text-charcoal">
                Your Workbooks
              </h2>
              {cartCount > 0 && (
                <span className="bg-coral-light text-coral font-heading font-bold text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-muted hover:text-charcoal rounded-full hover:bg-cream transition-colors"
              aria-label="Close cart"
            >
              <CloseIcon size={20} />
            </button>
          </div>

          {/* Delivery Callout Banner */}
          <div className="bg-sage-light/60 px-5 py-2.5 border-b border-sage/20 flex items-center gap-2 text-xs text-sage font-medium">
            <DownloadIcon size={14} className="shrink-0" />
            <span>Instant PDF email delivery • No login or account required</span>
          </div>

          {/* Body: Items or Empty state */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-border-warm">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-16 h-16 rounded-2xl bg-cream border border-border-warm flex items-center justify-center text-coral mb-4">
                  <CartIcon size={28} />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal">
                  Your cart is empty
                </h3>
                <p className="text-sm text-muted mt-1 max-w-xs">
                  Pick a printable workbook or bundle to build your little learner&apos;s toolkit.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-coral hover:bg-coral-hover text-white font-heading font-semibold text-sm shadow-md shadow-coral/20 transition-all hover:scale-[1.02]"
                >
                  Explore Workbooks
                </button>
              </div>
            ) : (
              <div>
                {items.map((item) => (
                  <CartItemRow key={item.product.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-border-warm bg-cream/40 space-y-4">
              {/* Formats reassurance */}
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <PrinterIcon size={14} className="text-sage" />
                  Both US Letter & A4 formats included
                </span>
                <span>Print unlimited times</span>
              </div>

              {/* Subtotal */}
              <div className="flex items-center justify-between pt-2 border-t border-border-warm">
                <span className="font-heading font-semibold text-base text-charcoal">
                  Subtotal (USD)
                </span>
                <span className="font-heading font-bold text-2xl text-charcoal">
                  ${cartSubtotal.toFixed(2)}
                </span>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => checkout()}
                disabled={isCheckingOut}
                className="w-full py-3.5 px-6 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-base shadow-lg shadow-coral/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Preparing Instant Checkout...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheckIcon size={18} />
                    <span>Instant Checkout • ${cartSubtotal.toFixed(2)}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-muted text-center">
                <span>Secure payment via Dodo Payments</span>
                <span>•</span>
                <span>Instant PDF download link</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
