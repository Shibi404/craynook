'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useToast } from '@/context/ToastContext';

export function FreeSampleSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const { showToast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Invalid Email', 'Please enter a valid email address.', 'error');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/free-sample', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        showToast(
          'Sample Sent',
          'Your 8-page printable starter pack is in your inbox.',
          'success'
        );
      } else {
        setStatus('idle');
        showToast('Error', 'Please try again.', 'error');
      }
    } catch {
      setStatus('idle');
      showToast('Network error', 'Please try again.', 'error');
    }
  }

  return (
    <section id="free-sample" className="py-20 md:py-28 bg-white border-t border-border-warm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Cover Presentation: Substantial, realistic book presentation */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-60 sm:w-72 md:w-80 aspect-3/4 rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/10 hover:shadow-charcoal/20 hover:-translate-y-1 bg-white transition-all duration-300 ease-out">
              <Image
                src="/free_starter_pack_cover_page.png"
                alt="Free Starter Pack Printable Workbook Cover"
                width={1792}
                height={2400}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 320px"
              />
            </div>
          </div>

          {/* Editorial Copy & Form: Scaled up for strong readability */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <span className="text-xs font-heading font-semibold text-muted uppercase tracking-widest">
              Free 8-Page Starter Pack
            </span>

            <div className="space-y-3">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.12]">
                Try a few pages first.
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-lg mx-auto md:mx-0 font-normal">
                Download sample worksheets with alphabet tracing, early numbers, and scissor cutting to test on your home printer.
              </p>
            </div>

            {status === 'success' ? (
              <div className="py-4 text-base text-charcoal">
                <p className="font-heading font-semibold text-sage text-lg">
                  Sent to {email}
                </p>
                <p className="text-sm text-muted mt-1">
                  Check your inbox for your PDF download links.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto md:mx-0 pt-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-5 py-3.5 rounded-2xl bg-cream/60 border border-border-warm focus:bg-white focus:border-charcoal text-base text-charcoal outline-none transition-colors placeholder:text-muted/60 shadow-2xs"
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-7 py-3.5 rounded-2xl bg-charcoal hover:bg-charcoal/90 text-white font-heading font-semibold text-sm tracking-wide transition-all duration-200 shrink-0 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? 'Sending...' : 'Get Free Sample'}
                </button>
              </form>
            )}

            <p className="text-xs text-muted">
              Delivered instantly as a PDF. No account or payment required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
