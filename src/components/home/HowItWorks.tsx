import React from 'react';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Pick your workbooks',
      description: 'Choose single subjects or get everything together with curated preschool bundles.',
    },
    {
      num: '02',
      title: 'Instant PDF download',
      description: 'Your download links are emailed the moment you check out. No account or password needed.',
    },
    {
      num: '03',
      title: 'Print at home',
      description: 'Formatted for standard US Letter & A4. Print individual worksheets or bind the whole book.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-cream/40 border-t border-border-warm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border-warm pb-5">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal tracking-tight">
            How it works
          </h2>
          <span className="text-xs text-muted font-medium">
            From checkout to printing in 2 minutes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-3">
              <span className="font-heading font-bold text-3xl sm:text-4xl text-charcoal/20 select-none block">
                {step.num}
              </span>
              <h3 className="font-heading font-bold text-lg text-charcoal">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
