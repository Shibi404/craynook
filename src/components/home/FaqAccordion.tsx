'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@/components/ui/Icons';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What paper sizes are included in the download?',
    answer:
      'Every workbook includes both standard US Letter (8.5×11 inches) and international A4 PDF files. Both files are formatted with generous margins so no content gets clipped by your home or school printer.',
  },
  {
    question: 'How quickly do I receive my workbooks after purchasing?',
    answer:
      'Immediately! The moment your checkout completes via Dodo Payments, you will see a download link on the confirmation screen, and an automated receipt containing permanent PDF download links is emailed directly to you. No login or password required.',
  },
  {
    question: 'Can I print the pages more than once?',
    answer:
      'Yes! You receive unlimited personal and classroom printing rights. You can reprint favorite dinosaur coloring pages, reuse tracing sheets for siblings, or print worksheets multiple times for extra pencil control practice.',
  },
  {
    question: 'What if I lose my download link or change computers?',
    answer:
      'Your download links remain active in your email confirmation receipt forever. If you ever lose access to your email, simply contact us with your order details and we will resend your files right away.',
  },
  {
    question: 'What is your refund policy for digital downloads?',
    answer:
      'We want you and your child to love DoodleCub! If you or your little learner are unsatisfied with the quality or usability of your workbook within 14 days, reach out to us and we will happily make it right or issue a full refund.',
  },
  {
    question: 'What printing supplies or tools do we recommend?',
    answer:
      'Standard 20lb or 24lb copy paper works great. For coloring books and scissor crafts, slightly thicker 28lb or 32lb paper is wonderful. Pair with chunky washable crayons, triangular pencils for early grip, and child-safe rounded scissors.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-cream/40 border-t border-border-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-coral font-heading font-semibold text-xs tracking-widest uppercase">
            Common Questions
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-sm sm:text-base">
            Everything you need to know about downloading, printing, and using DoodleCub workbooks.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border-warm bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-cream/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base text-charcoal">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1 rounded-full bg-cream text-muted transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-coral' : ''
                    }`}
                  >
                    <ChevronDownIcon size={16} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-muted leading-relaxed border-t border-border-warm/60">
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
