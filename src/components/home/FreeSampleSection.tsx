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
          'Sample Sent!',
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
    <section id="free-sample" className="py-14 md:py-18 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
            Get an 8-page free sample
          </h2>
          <p className="text-muted text-sm mt-1.5">
            Sample pages from our alphabet, math, scissor, and dinosaur workbooks.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-5 rounded-2xl bg-cream border border-sage/40 text-sage flex items-center justify-center gap-3">
            <CheckIcon size={20} />
            <p className="text-xs text-charcoal font-medium">
              Sent to <strong>{email}</strong>. Check your inbox to download!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <MailIcon
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-cream border border-border-warm focus:border-coral focus:bg-white text-xs text-charcoal outline-none transition-all placeholder:text-muted"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-3 rounded-xl bg-coral hover:bg-coral-hover text-white font-heading font-bold text-xs shadow-xs transition-all shrink-0"
            >
              {status === 'loading' ? 'Sending...' : 'Get Free Pack'}
            </button>
          </form>
        )}

        <p className="text-[11px] text-muted">
          Instant PDF delivery. No spam, ever.
        </p>
      </div>
    </section>
  );
}
