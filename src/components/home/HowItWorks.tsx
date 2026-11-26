import React from 'react';
import { DownloadIcon, PrinterIcon, SparklesIcon } from '@/components/ui/Icons';

export function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Pick Your Workbooks',
      description:
        'Choose individual subjects like Alphabet Tracing, Math, or Scissor Skills, or get all 5 in the discounted master bundle.',
      icon: SparklesIcon,
      accent: 'bg-coral-light text-coral',
    },
    {
      num: '2',
      title: 'Instant PDF Delivery',
      description:
        'Zero accounts, zero passwords. Your high-resolution PDF download links are emailed directly to you the moment you check out.',
      icon: DownloadIcon,
      accent: 'bg-sage-light text-sage',
    },
    {
      num: '3',
      title: 'Print & Play at Home',
      description:
        'Both standard US Letter (8.5×11") and international A4 sizes included. Print individual pages as needed or bind the whole book.',
      icon: PrinterIcon,
      accent: 'bg-marigold-light text-marigold',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-cream/60 border-y border-border-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-coral font-heading font-semibold text-xs tracking-widest uppercase">
            Simple 3-Step Process
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
            How DoodleCub Works
          </h2>
          <p className="text-muted text-sm sm:text-base">
            No waiting for shipping or delayed packages. Start learning in less than 2 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-8 border border-border-warm shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow"
              >
                {/* Step Number Circle */}
                <span className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-charcoal text-white font-heading font-bold text-xs flex items-center justify-center shadow-sm">
                  {step.num}
                </span>

                <div className={`w-14 h-14 rounded-2xl ${step.accent} flex items-center justify-center mt-2`}>
                  <Icon size={26} />
                </div>

                <h3 className="font-heading font-bold text-xl text-charcoal">
                  {step.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
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
