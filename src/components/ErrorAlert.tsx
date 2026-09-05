'use client';

import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorAlertProps {
  errorMessage: string;
  onRetry: () => void;
  onUseFallback?: () => void;
  isMissingApiKey?: boolean;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({
  errorMessage,
  onRetry,
  onUseFallback,
  isMissingApiKey = false,
}) => {
  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-xs text-center space-y-3">
        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
          <AlertCircle className="h-4 w-4" />
        </div>

        <h3 className="text-sm font-semibold text-neutral-900">
          Something went wrong. Your saved workspace is safe.
        </h3>

        <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
          {errorMessage || 'We encountered an issue connecting to the recommendation service.'}
        </p>

        {isMissingApiKey && (
          <div className="mt-3 rounded border border-neutral-200 bg-neutral-50 p-3 text-left font-mono text-[11px] text-neutral-600">
            <span className="text-neutral-400"># To enable live AI, add your key to .env.local:</span>
            <br />
            <span className="text-neutral-900 font-semibold">GEMINI_API_KEY=your_key_here</span>
          </div>
        )}

        <div className="mt-5 pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            <RefreshCw className="h-3 w-3" />
            <span>Try Again</span>
          </button>

          {onUseFallback && (
            <button
              onClick={onUseFallback}
              className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 transition-colors shadow-2xs"
            >
              <span>Continue with local demo data</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
