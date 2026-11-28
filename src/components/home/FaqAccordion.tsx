'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@/components/ui/Icons';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What paper sizes are included?',
    answer:
      'Both standard US Letter (8.5×11") and international A4 PDFs are included in every download.',
  },
  {
    question: 'How do I receive my workbooks?',
    answer:
      'Instantly. Download links appear right after checkout and are emailed to your receipt. No account needed.',
  },
  {
    question: 'Can I reprint pages multiple times?',
    answer:
      'Yes. You have unlimited personal and classroom printing rights for all your children or students.',
  },
  {
    question: 'What if I lose my files?',
    answer:
      'Your download links never expire. Access them from your original email receipt anytime.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      '14-day money-back guarantee. If you or your child aren’t satisfied, email us for a full refund.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <section id="faq" className="py-14 md:py-20 bg-cream/40 border-t border-border-warm">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center">
          <h2 className="font-heading font-medium text-2xl sm:text-3xl text-charcoal tracking-tight">
            FAQ
          </h2>
        </div>

        <div className="space-y-2.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-border-warm bg-white overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-cream/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-sm text-charcoal">
                    {faq.question}
                  </span>
                  <span
                    className={`text-muted transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-coral' : ''
                    }`}
                  >
                    <ChevronDownIcon size={14} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-muted leading-relaxed border-t border-border-warm/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
