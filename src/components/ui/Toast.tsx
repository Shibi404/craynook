'use client';

import React from 'react';
import { useToast, ToastType } from '@/context/ToastContext';
import { CheckIcon, CloseIcon } from '@/components/ui/Icons';

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-2 pointer-events-none px-4 w-auto max-w-[92vw]"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-2.5 px-4.5 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white/95 backdrop-blur-md border border-border-warm shadow-md shadow-charcoal/5 transition-all duration-200 text-xs sm:text-[13px] text-charcoal font-heading"
        >
          {/* Status Dot / Icon */}
          <span className="shrink-0">{getToastIcon(toast.type)}</span>

          {/* Text: Compact Minimal Pill */}
          <span className="font-semibold whitespace-nowrap text-charcoal">
            {toast.title}
          </span>
          {toast.description && (
            <>
              <span className="text-muted/40">•</span>
              <span className="text-muted font-normal max-w-[150px] sm:max-w-[240px] truncate">
                {toast.description}
              </span>
            </>
          )}

          {/* Dismiss button */}
          <button
            onClick={() => removeToast(toast.id)}
            className="text-muted/60 hover:text-charcoal p-1 rounded-full transition-colors ml-1 cursor-pointer"
            aria-label="Dismiss notification"
          >
            <CloseIcon size={13} />
          </button>
        </div>
      ))}
    </div>
  );
}

function getToastIcon(type?: ToastType) {
  switch (type) {
    case 'error':
      return <span className="w-2 h-2 rounded-full bg-coral shrink-0" />;
    case 'info':
      return <span className="w-2 h-2 rounded-full bg-coral/70 shrink-0" />;
    case 'success':
    default:
      return (
        <span className="flex items-center justify-center w-3.5 h-3.5 rounded-full bg-sage-light text-sage shrink-0">
          <CheckIcon size={9} />
        </span>
      );
  }
}
