'use client';

import React from 'react';
import { useToast, ToastType } from '@/context/ToastContext';
import { CheckIcon, CloseIcon, SparklesIcon } from '@/components/ui/Icons';

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-lg border backdrop-blur-sm transition-all duration-300 animate-slide-up ${getToastStyles(
            toast.type
          )}`}
        >
          <div className="shrink-0 mt-0.5">{getToastIcon(toast.type)}</div>
          <div className="flex-1">
            <p className="text-sm font-semibold font-heading text-charcoal">
              {toast.title}
            </p>
            {toast.description && (
              <p className="text-xs text-muted mt-0.5">{toast.description}</p>
            )}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-muted hover:text-charcoal p-1 rounded-full transition-colors"
            aria-label="Dismiss toast"
          >
            <CloseIcon size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}

function getToastStyles(type?: ToastType) {
  switch (type) {
    case 'error':
      return 'bg-white border-coral/30 shadow-coral/10';
    case 'info':
      return 'bg-white border-sky/30 shadow-sky/10';
    case 'success':
    default:
      return 'bg-white border-sage/40 shadow-sage/10';
  }
}

function getToastIcon(type?: ToastType) {
  switch (type) {
    case 'error':
      return (
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-coral-light text-coral font-bold text-xs">
          !
        </span>
      );
    case 'info':
      return (
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-light text-sky">
          <SparklesIcon size={14} />
        </span>
      );
    case 'success':
    default:
      return (
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sage-light text-sage">
          <CheckIcon size={14} />
        </span>
      );
  }
}
