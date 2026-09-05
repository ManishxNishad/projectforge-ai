'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface LoadingSkeletonProps {
  type: 'ideas' | 'blueprint';
}

const IDEA_STAGES = [
  'Reading your skills and timeline constraints...',
  'Checking open-source datasets and resources...',
  'Calculating feasibility and learning requirements...',
  'Finding projects that fit you...',
];

const BLUEPRINT_STAGES = [
  'Organizing milestones and weekly tasks...',
  'Structuring system architecture and stack...',
  'Curating datasets and free resources...',
  'Preparing likely faculty viva questions...',
  'Building your project plan...',
];

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ type }) => {
  const stages = type === 'ideas' ? IDEA_STAGES : BLUEPRINT_STAGES;
  const [currentStageIdx, setCurrentStageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStageIdx((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
    }, 1800);

    return () => clearInterval(interval);
  }, [stages.length]);

  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      {/* Calm spinner */}
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 border border-neutral-200">
        <div className="h-5 w-5 rounded-full border-2 border-neutral-900 border-t-transparent animate-spin" />
      </div>

      {/* Main title */}
      <h2 className="mt-4 text-base font-semibold text-neutral-900 tracking-tight">
        {type === 'ideas' ? 'Finding projects that fit you...' : 'Building your project plan...'}
      </h2>

      <p className="mt-1 text-xs text-neutral-500">
        Evaluating feasibility against your timeline and skill set.
      </p>

      {/* Checklist of stages */}
      <div className="mt-6 rounded-lg border border-neutral-200 bg-white p-4 text-left text-xs space-y-2.5 shadow-2xs">
        {stages.map((st, i) => (
          <div
            key={i}
            className={`flex items-center gap-2.5 ${
              i <= currentStageIdx ? 'text-neutral-800' : 'text-neutral-400'
            }`}
          >
            {i < currentStageIdx ? (
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            ) : i === currentStageIdx ? (
              <div className="h-3.5 w-3.5 rounded-full border-2 border-neutral-900 border-t-transparent animate-spin shrink-0" />
            ) : (
              <div className="h-3.5 w-3.5 rounded-full border border-neutral-300 shrink-0" />
            )}
            <span className={i === currentStageIdx ? 'font-medium text-neutral-900' : ''}>
              {st}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
