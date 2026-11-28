'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CrayNookLogo, CartIcon, CloseIcon } from '@/components/ui/Icons';

export function Navbar() {
  const { cartCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-border-warm transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="CrayNook Home"
        >
          <CrayNookLogo size={38} className="transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-heading font-medium text-2xl text-charcoal tracking-tight group-hover:text-coral transition-colors">
              Cray<span className="text-coral">Nook</span>
            </span>
            <span className="text-[10px] font-semibold text-muted tracking-wider uppercase -mt-1 hidden sm:block">
              Printable Workbooks
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#shop"
            onClick={(e) => handleAnchorClick(e, 'shop')}
            className="text-base font-semibold text-charcoal hover:text-coral transition-colors font-heading"
          >
            Shop
          </Link>
          <Link
            href="/#bundle"
            onClick={(e) => handleAnchorClick(e, 'bundle')}
            className="text-base font-semibold text-charcoal hover:text-coral transition-colors font-heading"
          >
            Bundles
          </Link>
          <Link
            href="/#free-sample"
            onClick={(e) => handleAnchorClick(e, 'free-sample')}
            className="text-base font-semibold text-charcoal hover:text-coral transition-colors font-heading"
          >
            Free Sample
          </Link>
          <Link
            href="/#faq"
            onClick={(e) => handleAnchorClick(e, 'faq')}
            className="text-base font-semibold text-charcoal hover:text-coral transition-colors font-heading"
          >
            FAQ
          </Link>
        </nav>

        {/* Actions: Cart & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={openCart}
            className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border-warm hover:border-coral/50 text-charcoal font-heading font-semibold text-sm shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label={`View cart, ${cartCount} items`}
          >
            <CartIcon
              size={18}
              className="text-coral group-hover:scale-110 transition-transform duration-200"
            />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold text-white bg-coral rounded-full group-hover:scale-105 transition-transform duration-200">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal hover:text-coral rounded-xl hover:bg-cream transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <CloseIcon size={22} />
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border-warm px-4 py-4 space-y-3 shadow-md animate-slide-down">
          <Link
            href="/#shop"
            onClick={(e) => handleAnchorClick(e, 'shop')}
            className="block px-3 py-2 rounded-xl text-base font-semibold font-heading text-charcoal hover:bg-cream hover:text-coral transition-colors"
          >
            Shop Workbooks
          </Link>
          <Link
            href="/#bundle"
            onClick={(e) => handleAnchorClick(e, 'bundle')}
            className="block px-3 py-2 rounded-xl text-base font-semibold font-heading text-charcoal hover:bg-cream hover:text-coral transition-colors"
          >
            Bundles
          </Link>
          <Link
            href="/#free-sample"
            onClick={(e) => handleAnchorClick(e, 'free-sample')}
            className="block px-3 py-2 rounded-xl text-base font-semibold font-heading text-charcoal hover:bg-cream hover:text-coral transition-colors"
          >
            Free 8-Page Starter Pack
          </Link>
          <Link
            href="/#faq"
            onClick={(e) => handleAnchorClick(e, 'faq')}
            className="block px-3 py-2 rounded-xl text-base font-semibold font-heading text-charcoal hover:bg-cream hover:text-coral transition-colors"
          >
            Frequently Asked Questions
          </Link>
        </div>
      )}
    </header>
  );
}
