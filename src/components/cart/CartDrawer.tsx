'use client';

import React, { useEffect, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { CartItemRow } from './CartItemRow';
import { CloseIcon, CartIcon, ShieldCheckIcon } from '@/components/ui/Icons';

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

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      role="dialog"
      aria-modal={isOpen}
      aria-hidden={!isOpen}
    >
      {/* Backdrop with smooth fade */}
      <div
        className={`fixed inset-0 bg-charcoal/35 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer Panel Container (Anchored to Right) */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
        <div
          ref={drawerRef}
          className={`w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-border-warm pointer-events-auto transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-border-warm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-heading font-bold text-base text-charcoal">
                Cart
              </h2>
              {cartCount > 0 && (
                <span className="bg-coral-light text-coral font-heading font-bold text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-muted hover:text-charcoal rounded-full hover:bg-cream transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <CloseIcon size={18} />
            </button>
          </div>

          {/* Delivery notice */}
          <div className="bg-cream/60 px-5 py-2 border-b border-border-warm text-[11px] text-muted font-medium">
            Instant PDF email delivery • No account required
          </div>

          {/* Items or Empty state */}
          <div className="flex-1 overflow-y-auto p-5">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-cream border border-border-warm flex items-center justify-center text-muted">
                  <CartIcon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-base text-charcoal">
                  Your cart is empty
                </h3>
                <button
                  onClick={closeCart}
                  className="px-5 py-2 rounded-full bg-cream hover:bg-coral hover:text-white text-charcoal font-heading font-semibold text-xs border border-border-warm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  Shop Workbooks
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
            <div className="p-5 border-t border-border-warm bg-cream/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-sm text-charcoal">
                  Subtotal
                </span>
                <span className="font-heading font-bold text-xl text-charcoal">
                  ${cartSubtotal.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => checkout()}
                disabled={isCheckingOut}
                className="w-full py-3.5 px-6 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-sm shadow-sm hover:shadow-md hover:shadow-coral/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isCheckingOut ? (
                  <span>Preparing Checkout...</span>
                ) : (
                  <>
                    <ShieldCheckIcon size={16} />
                    <span>Checkout • ${cartSubtotal.toFixed(2)}</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-muted text-center">
                Secure checkout powered by Dodo Payments
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
