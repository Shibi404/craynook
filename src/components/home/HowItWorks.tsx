import React from 'react';
import { DownloadIcon, PrinterIcon, SparklesIcon } from '@/components/ui/Icons';

export function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Pick your books',
      description: 'Choose single workbooks or save with the 5-in-1 preschool bundle.',
      icon: SparklesIcon,
      accent: 'bg-coral-light text-coral',
    },
    {
      num: '2',
      title: 'Instant download',
      description: 'PDFs emailed immediately. No account or password required.',
      icon: DownloadIcon,
      accent: 'bg-sage-light text-sage',
    },
    {
      num: '3',
      title: 'Print at home',
      description: 'Formatted for US Letter and A4. Print individual pages or the whole book.',
      icon: PrinterIcon,
      accent: 'bg-marigold-light text-marigold',
    },
  ];

  return (
    <section id="how-it-works" className="py-14 md:py-20 bg-cream/40 border-y border-border-warm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-border-warm shadow-xs text-center space-y-3"
              >
                <div className={`w-12 h-12 rounded-xl ${step.accent} flex items-center justify-center mx-auto`}>
                  <Icon size={22} />
                </div>

                <h3 className="font-heading font-bold text-base text-charcoal">
                  {step.title}
                </h3>

                <p className="text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
