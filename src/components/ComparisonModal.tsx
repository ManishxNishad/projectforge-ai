'use client';

import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { ProjectIdea } from '@/types';

interface ComparisonModalProps {
  ideas: ProjectIdea[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (idea: ProjectIdea) => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  ideas,
  isOpen,
  onClose,
  onSelectProject,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-900/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-lg border border-neutral-200 bg-white shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/50">
          <div>
            <h2 className="text-base font-semibold text-neutral-900">
              Compare Project Options
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Evaluate feasibility, skill alignment, and scope before locking your final topic.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto p-6 flex-1">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 px-3 font-semibold text-neutral-500 uppercase tracking-wide w-44">
                  Criterion
                </th>
                {ideas.map((idea, idx) => (
                  <th key={idea.id} className="py-3 px-3 font-medium text-neutral-900 w-1/3">
                    <span className="text-[11px] text-neutral-400 font-mono">Option 0{idx + 1}</span>
                    <div className="text-xs font-semibold text-neutral-900 mt-0.5">{idea.title}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {/* Feasibility verdict */}
              <tr>
                <td className="py-3 px-3 font-medium text-neutral-700">Feasibility</td>
                {ideas.map((idea) => {
                  const isGood = idea.feasibilityScore >= 88;
                  return (
                    <td key={idea.id} className="py-3 px-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium border ${
                          isGood
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        {isGood ? 'Good fit' : 'Possible with effort'} ({idea.feasibilityScore}%)
                      </span>
                    </td>
                  );
                })}
              </tr>

              {/* Skill Match */}
              <tr>
                <td className="py-3 px-3 font-medium text-neutral-700">Skill Match</td>
                {ideas.map((idea) => (
                  <td key={idea.id} className="py-3 px-3 font-medium text-neutral-900">
                    {idea.skillFitScore}% of required skills known
                  </td>
                ))}
              </tr>

              {/* Difficulty */}
              <tr>
                <td className="py-3 px-3 font-medium text-neutral-700">Difficulty</td>
                {ideas.map((idea) => (
                  <td key={idea.id} className="py-3 px-3 text-neutral-700">
                    {idea.difficulty}
                  </td>
                ))}
              </tr>

              {/* Estimated Timeline */}
              <tr>
                <td className="py-3 px-3 font-medium text-neutral-700">Estimated Timeline</td>
                {ideas.map((idea) => (
                  <td key={idea.id} className="py-3 px-3 text-neutral-700">
                    {idea.estimatedDurationWeeks || 12} Weeks
                  </td>
                ))}
              </tr>

              {/* Tech Stack */}
              <tr>
                <td className="py-3 px-3 font-medium text-neutral-700">Primary Technologies</td>
                {ideas.map((idea) => (
                  <td key={idea.id} className="py-3 px-3">
                    <div className="flex flex-wrap gap-1">
                      {idea.coreTechnologies.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-neutral-100 px-1.5 py-0.5 text-[11px] text-neutral-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Why it matches */}
              <tr>
                <td className="py-3 px-3 font-medium text-neutral-700">Why it fits you</td>
                {ideas.map((idea) => (
                  <td key={idea.id} className="py-3 px-3 text-[11px] text-neutral-600 leading-relaxed">
                    {idea.whyItMatchesProfile}
                  </td>
                ))}
              </tr>

              {/* Action */}
              <tr className="bg-neutral-50/50">
                <td className="py-3 px-3 font-semibold text-neutral-500">Action</td>
                {ideas.map((idea) => (
                  <td key={idea.id} className="py-3 px-3">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProject(idea);
                      }}
                      className="w-full flex items-center justify-center gap-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 py-1.5 px-3 text-xs font-medium text-white transition-colors"
                    >
                      <span>Choose Project</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
