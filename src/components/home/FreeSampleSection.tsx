'use client';

import React, { useState } from 'react';
import { MailIcon, CheckIcon } from '@/components/ui/Icons';
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
          'Sample Pack Sent!',
          'Check your inbox for your 8-page printable starter pack.',
          'success'
        );
      } else {
        setStatus('idle');
        showToast('Submission error', 'Something went wrong. Please try again.', 'error');
      }
    } catch {
      setStatus('idle');
      showToast('Network error', 'Unable to submit. Please try again.', 'error');
    }
  }

  return (
    <section id="free-sample" className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-linear-to-br from-cream via-cream to-sage-light/40 border border-border-warm p-8 sm:p-12 text-center space-y-6 shadow-lg">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-light text-sage font-heading font-semibold text-xs border border-sage/30">
            <CheckIcon size={13} />
            <span>100% FREE PRINTABLE SAMPLE</span>
          </div>

          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
              Get Your Free 8-Page Starter Pack
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Test out DoodleCub with zero commitment! Includes sample sheets for alphabet tracing, scissor curves, counting 1–5, and a friendly dinosaur coloring page.
            </p>
          </div>

          {status === 'success' ? (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-white border border-sage/40 text-sage space-y-2 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-sage-light text-sage flex items-center justify-center mx-auto">
                <CheckIcon size={22} />
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal">
                Starter Pack on the Way!
              </h3>
              <p className="text-xs text-muted">
                We sent your 8-page PDF to <strong className="text-charcoal">{email}</strong>. Download, print, and enjoy!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <MailIcon
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-border-warm focus:border-coral focus:ring-2 focus:ring-coral/20 text-sm text-charcoal outline-none transition-all placeholder:text-muted/70"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-sm shadow-md shadow-coral/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 shrink-0"
              >
                {status === 'loading' ? 'Sending...' : 'Send My Free Pack'}
              </button>
            </form>
          )}

          <p className="text-[11px] text-muted">
            Instant PDF download. We respect your inbox — zero spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
