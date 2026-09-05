'use client';

import React from 'react';
import { ArrowRight, Calendar, CheckSquare } from 'lucide-react';

interface LandingHeroProps {
  onStart: () => void;
  onExplore: () => void;
  onLoadDemo: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onStart,
  onExplore,
  onLoadDemo,
}) => {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Product Intro Header */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
            Final-Year Project Workspace
          </div>

          {/* Main Heading */}
          <h1 className="mt-2.5 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
            Build a project you can actually finish.
          </h1>

          {/* Supporting Text */}
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            ProjectForge helps you choose a realistic project, plan the work, track progress and
            prepare for your viva.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-xs font-medium text-white shadow-xs hover:bg-neutral-800 transition-colors"
            >
              <span>Start My Project</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={onExplore}
              className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3.5 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              Explore Projects
            </button>

            <button
              onClick={onLoadDemo}
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <span>Try with demo student data</span>
              <span className="text-neutral-400">→</span>
            </button>
          </div>
        </div>

        {/* Compact Product Preview / Dashboard-Style Section */}
        <div className="mt-12">
          <div className="rounded-lg border border-neutral-200 bg-white shadow-xs overflow-hidden">
            {/* Window title bar / subtle header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-50 border-b border-neutral-200 text-xs">
              <div className="flex items-center gap-2 text-neutral-500">
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="font-medium text-neutral-700">Workspace Preview</span>
                <span className="text-neutral-400">•</span>
                <span>Computer Science & AIML Major Project</span>
              </div>
              <div className="text-[11px] text-neutral-500">Status: Active Sprints</div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Column 1 & 2: Current Project & Timeline */}
              <div className="md:col-span-2 space-y-4">
                {/* Current Project Card */}
                <div className="p-4 rounded-md border border-neutral-100 bg-neutral-50/60">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">
                        Current Project
                      </div>
                      <div className="mt-1 text-sm font-semibold text-neutral-900">
                        VitalFlow: Clinical Readmission Risk Predictor
                      </div>
                      <p className="mt-1 text-xs text-neutral-600 line-clamp-2">
                        Supervised decision-support pipeline evaluating patient readmission probability
                        with SHAP feature importance for hospital discharge teams.
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 border border-emerald-200">
                      Good fit
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4 pt-3 border-t border-neutral-200/70">
                    <div className="flex items-center justify-between text-xs text-neutral-600 mb-1.5">
                      <span className="font-medium text-neutral-700">Milestone Progress</span>
                      <span className="font-semibold text-neutral-900">45% Completed</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
                      <div className="h-full bg-neutral-800 rounded-full w-[45%]" />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
                      <span>Phase 2: Model Training & SHAP</span>
                      <span>Target: Week 8 of 16</span>
                    </div>
                  </div>
                </div>

                {/* Next Task Card */}
                <div className="p-4 rounded-md border border-neutral-200 bg-white">
                  <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">
                    Next Task to Complete
                  </div>
                  <div className="mt-2 flex items-start gap-2.5">
                    <div className="mt-0.5 h-4 w-4 rounded border border-neutral-300 flex items-center justify-center text-transparent hover:text-neutral-400 cursor-pointer">
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-medium text-neutral-900">
                        Implement SHAP TreeExplainer for local feature attribution
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        Due this Friday • Needed for mid-term review with guide
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Viva Preparation Teaser & Timeline */}
              <div className="space-y-4">
                {/* Timeline info */}
                <div className="p-4 rounded-md border border-neutral-200 bg-white">
                  <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Project Timeline</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-neutral-600">
                      <span>Available Time:</span>
                      <span className="font-medium text-neutral-900">4–6 Months</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-600">
                      <span>Internal Review:</span>
                      <span className="font-medium text-neutral-900">End of Month 2</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-600">
                      <span>Final External Viva:</span>
                      <span className="font-medium text-neutral-900">End of Month 5</span>
                    </div>
                  </div>
                </div>

                {/* Viva Defense Teaser */}
                <div className="p-4 rounded-md border border-neutral-200 bg-white">
                  <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <CheckSquare className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Viva Defense Prep</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Top faculty question prepared:
                  </p>
                  <p className="mt-1 text-xs font-medium text-neutral-900 italic">
                    &ldquo;Why did you choose XGBoost over a Deep Neural Network?&rdquo;
                  </p>
                  <div className="mt-3">
                    <button
                      onClick={onLoadDemo}
                      className="text-[11px] font-medium text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                    >
                      Practice answering this in Viva Mode →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar of preview with quick action */}
            <div className="px-5 py-3 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-600">
              <span>Looking to choose your own topic? Profile takes 1 minute.</span>
              <button
                onClick={onStart}
                className="font-medium text-neutral-900 hover:underline inline-flex items-center gap-1"
              >
                <span>Configure your profile</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
