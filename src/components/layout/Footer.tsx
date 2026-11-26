import React from 'react';
import Link from 'next/link';
import {
  DoodleCubLogo,
  DownloadIcon,
  PrinterIcon,
  ShieldCheckIcon,
} from '@/components/ui/Icons';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-warm mt-auto">
      {/* Trust Strip */}
      <div className="border-b border-border-warm bg-cream/60 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-coral-light text-coral flex items-center justify-center shrink-0">
                <DownloadIcon size={20} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-charcoal">
                  Instant PDF Delivery
                </p>
                <p className="text-xs text-muted">
                  Emailed immediately upon checkout. No login required.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-light text-sage flex items-center justify-center shrink-0">
                <PrinterIcon size={20} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-charcoal">
                  US Letter & A4 Included
                </p>
                <p className="text-xs text-muted">
                  Crisp, high-res PDF files formatted for any home printer.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-marigold-light text-marigold flex items-center justify-center shrink-0">
                <ShieldCheckIcon size={20} />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-charcoal">
                  Print Unlimited Times
                </p>
                <p className="text-xs text-muted">
                  Use for siblings, repeat practice, and classroom activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <DoodleCubLogo size={36} />
              <span className="font-heading font-bold text-2xl text-charcoal">
                Doodle<span className="text-coral">Cub</span>
              </span>
            </Link>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Screen-free, Montessori-inspired printable workbooks created for little
              hands and busy parents. Helping toddlers and preschoolers fall in love with
              learning, one page at a time.
            </p>
            <p className="text-xs text-muted">
              Secure global payments processed in USD via{' '}
              <strong className="text-charcoal font-semibold">Dodo Payments</strong> (Merchant of Record).
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-charcoal tracking-wide">
              Workbooks
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/#shop" className="hover:text-coral transition-colors">
                  Alphabet & Phonics
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-coral transition-colors">
                  Numbers & Early Math
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-coral transition-colors">
                  Scissor Skills Pack
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-coral transition-colors">
                  Dino Coloring Book
                </Link>
              </li>
              <li>
                <Link href="/#bundle" className="text-coral font-semibold hover:underline">
                  Preschool Bundle (Save 48%)
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-charcoal tracking-wide">
              Parent Guide
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/#how-it-works" className="hover:text-coral transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#free-sample" className="hover:text-coral transition-colors">
                  Free 8-Page Sample
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-coral transition-colors">
                  Printing Help & FAQ
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-coral transition-colors">
                  Classroom Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-warm mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 DoodleCub. All rights reserved. Designed for joyful home learning.</p>
          <div className="flex items-center gap-6">
            <span>Instant PDF Downloads</span>
            <span>•</span>
            <span>No Account Required</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
