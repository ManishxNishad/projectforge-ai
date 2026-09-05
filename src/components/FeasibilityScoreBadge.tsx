'use client';

import React from 'react';
import { FeasibilityBreakdown } from '@/types';

interface FeasibilityScoreProps {
  feasibilityScore: number;
  innovationScore: number;
  skillFitScore: number;
  aiPotentialScore: number;
  difficulty: 'Beginner-Friendly' | 'Moderate' | 'Advanced' | 'Challenging';
  feasibilityBreakdown?: FeasibilityBreakdown;
  compact?: boolean;
}

export const FeasibilityScoreBadge: React.FC<FeasibilityScoreProps> = ({
  feasibilityScore,
  skillFitScore,
  difficulty,
  feasibilityBreakdown,
  compact = false,
}) => {
  // Translate numeric scores into clear, human student labels:
  // "Good fit" (>= 88%)
  // "Possible with effort" (75 - 87%)
  // "Not ideal right now" (< 75%)
  const getFitLabel = (score: number) => {
    if (score >= 88) {
      return {
        label: 'Good fit',
        badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        dotClass: 'bg-emerald-500',
        summary: 'Realistic to finish within your semester timeline.',
      };
    }
    if (score >= 75) {
      return {
        label: 'Possible with effort',
        badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
        dotClass: 'bg-amber-500',
        summary: 'Requires learning a few new concepts along the way.',
      };
    }
    return {
      label: 'Not ideal right now',
      badgeClass: 'bg-neutral-100 text-neutral-600 border-neutral-200',
      dotClass: 'bg-neutral-400',
      summary: 'Heavy prerequisites that may delay your viva submission.',
    };
  };

  const fit = getFitLabel(feasibilityScore);

  if (compact) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-xs font-medium border ${fit.badgeClass}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${fit.dotClass}`} />
        <span>{fit.label}</span>
      </span>
    );
  }

  return (
    <div className="rounded-md border border-neutral-200 bg-neutral-50/50 p-3.5 text-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded px-2 py-0.5 font-medium border ${fit.badgeClass}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${fit.dotClass}`} />
            <span>{fit.label}</span>
          </span>
          <span className="text-neutral-500 text-[11px]">{fit.summary}</span>
        </div>
        <span className="text-neutral-500 text-[11px] font-medium">
          {difficulty} • {skillFitScore}% skill match
        </span>
      </div>

      {feasibilityBreakdown && (
        <div className="mt-2.5 pt-2.5 border-t border-neutral-200/80 text-[11px] text-neutral-600 space-y-1">
          <div>
            <span className="font-medium text-neutral-800">Feasibility note: </span>
            <span>{feasibilityBreakdown.verdict}</span>
          </div>
        </div>
      )}
    </div>
  );
};
