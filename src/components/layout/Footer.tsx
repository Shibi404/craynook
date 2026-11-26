import React from 'react';
import Link from 'next/link';
import { CrayNookLogo } from '@/components/ui/Icons';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-warm mt-auto py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <CrayNookLogo size={28} />
              <span className="font-heading font-bold text-lg text-charcoal">
                Cray<span className="text-coral">Nook</span>
              </span>
            </Link>
            <span className="text-xs text-muted hidden sm:inline">•</span>
            <p className="text-xs text-muted">
              Screen-free printable workbooks.
            </p>
          </div>

          {/* Clean Inline Links */}
          <nav className="flex items-center gap-6 text-xs text-muted font-heading font-medium">
            <Link href="/#shop" className="hover:text-coral transition-colors">
              Shop
            </Link>
            <Link href="/#bundle" className="hover:text-coral transition-colors">
              Bundles
            </Link>
            <Link href="/#free-sample" className="hover:text-coral transition-colors">
              Free Sample
            </Link>
            <Link href="/#faq" className="hover:text-coral transition-colors">
              FAQ
            </Link>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-warm/60 mt-6 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted">
          <p>© 2026 CrayNook. All rights reserved.</p>
          <p>Instant PDF downloads • Secure checkout via Dodo Payments</p>
        </div>
      </div>
    </footer>
  );
}
