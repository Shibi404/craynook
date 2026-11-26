'use client';

import React, { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import {
  CheckIcon,
  DownloadIcon,
  PrinterIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from '@/components/ui/Icons';

function SuccessContent() {
  const searchParams = useSearchParams();
  const isMock = searchParams.get('mock') === 'true';
  const total = searchParams.get('total');
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart upon arriving on success page
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 bg-cream/50">
      <div className="max-w-lg w-full bg-white rounded-3xl border border-border-warm p-8 sm:p-12 shadow-xl text-center space-y-6 animate-scale-up">
        {/* Celebration Check Badge */}
        <div className="w-16 h-16 rounded-full bg-sage-light text-sage flex items-center justify-center mx-auto shadow-md shadow-sage/10">
          <CheckIcon size={32} />
        </div>

        <div className="space-y-2">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
            Thank You for Your Order!
          </h1>
          <p className="text-muted text-sm sm:text-base">
            Your screen-free printable learning adventure starts now.
          </p>
        </div>

        {total && (
          <div className="inline-block px-4 py-1.5 rounded-full bg-cream text-charcoal font-heading font-bold text-sm border border-border-warm">
            Total Paid: ${total} USD
          </div>
        )}

        {/* Steps Card */}
        <div className="p-5 rounded-2xl bg-cream/60 border border-border-warm text-left space-y-3.5 text-xs text-charcoal">
          <p className="font-heading font-bold text-sm uppercase tracking-wider text-coral">
            Next Steps for Instant Access:
          </p>

          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-coral-light text-coral font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="block text-charcoal">Check your email inbox</strong>
              <span className="text-muted">
                Dodo Payments has sent an automated receipt with your permanent PDF download links.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-sage-light text-sage font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="block text-charcoal">Choose your format</strong>
              <span className="text-muted">
                Download either US Letter (8.5×11&quot;) or international A4 according to your home printer.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-marigold-light text-marigold font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="block text-charcoal">Print as often as you want</strong>
              <span className="text-muted">
                Print individual worksheets for daily practice or bind the complete workbook with a binder.
              </span>
            </div>
          </div>
        </div>

        {/* Reassurance pills */}
        <div className="flex items-center justify-center gap-5 text-xs text-muted">
          <span className="flex items-center gap-1">
            <DownloadIcon size={14} className="text-coral" />
            Instant Download
          </span>
          <span className="flex items-center gap-1">
            <PrinterIcon size={14} className="text-sage" />
            Lifetime Access
          </span>
        </div>

        {/* Home CTA */}
        <div className="pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-sm shadow-md shadow-coral/20 transition-all hover:scale-[1.01]"
          >
            <span>Return to Storefront</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        <p className="text-[11px] text-muted">
          Need assistance or haven&apos;t received your email? Contact{' '}
          <strong className="text-charcoal">support@doodlecub.com</strong>.
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream/50" />}>
      <SuccessContent />
    </Suspense>
  );
}
