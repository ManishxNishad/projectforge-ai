'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProjectIdea } from '@/types';
import { FeasibilityScoreBadge } from './FeasibilityScoreBadge';

interface ProjectCardProps {
  idea: ProjectIdea;
  index: number;
  isSelected: boolean;
  isCompared: boolean;
  onSelect: (idea: ProjectIdea) => void;
  onToggleCompare: (idea: ProjectIdea) => void;
  onGenerateBlueprint: (idea: ProjectIdea) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  idea,
  isSelected,
  isCompared,
  onSelect,
  onToggleCompare,
  onGenerateBlueprint,
}) => {
  return (
    <div
      className={`rounded-lg border bg-white p-5 sm:p-6 transition-colors flex flex-col justify-between ${
        isSelected
          ? 'border-neutral-900 ring-1 ring-neutral-900 shadow-xs'
          : 'border-neutral-200 hover:border-neutral-300'
      }`}
    >
      <div>
        {/* Top bar: Feasibility badge & Compare checkbox */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <FeasibilityScoreBadge
            feasibilityScore={idea.feasibilityScore}
            innovationScore={idea.innovationScore}
            skillFitScore={idea.skillFitScore}
            aiPotentialScore={idea.aiPotentialScore}
            difficulty={idea.difficulty}
            compact={true}
          />

          <button
            type="button"
            onClick={() => onToggleCompare(idea)}
            className={`flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded transition-colors ${
              isCompared
                ? 'bg-neutral-100 text-neutral-900 font-semibold'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <div
              className={`h-3.5 w-3.5 rounded border flex items-center justify-center text-[10px] ${
                isCompared
                  ? 'bg-neutral-900 border-neutral-900 text-white'
                  : 'border-neutral-300 bg-white'
              }`}
            >
              {isCompared && '✓'}
            </div>
            <span>Compare</span>
          </button>
        </div>

        {/* Project Title */}
        <h3 className="text-base font-semibold text-neutral-900 tracking-tight leading-snug">
          {idea.title}
        </h3>

        {/* One-Line Explanation */}
        <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
          {idea.shortDescription}
        </p>

        {/* Quick Specs Grid */}
        <div className="mt-4 grid grid-cols-3 gap-2 py-2.5 border-y border-neutral-100 text-[11px]">
          <div>
            <div className="text-neutral-400">Skill Match</div>
            <div className="font-semibold text-neutral-800 mt-0.5">{idea.skillFitScore}% match</div>
          </div>
          <div>
            <div className="text-neutral-400">Difficulty</div>
            <div className="font-semibold text-neutral-800 mt-0.5">{idea.difficulty}</div>
          </div>
          <div>
            <div className="text-neutral-400">Timeline</div>
            <div className="font-semibold text-neutral-800 mt-0.5">
              {idea.estimatedDurationWeeks || 12} Weeks
            </div>
          </div>
        </div>

        {/* Why this fits you in plain language */}
        <div className="mt-3 text-xs text-neutral-600">
          <span className="font-medium text-neutral-800">Why it fits you: </span>
          <span>{idea.whyItMatchesProfile}</span>
        </div>

        {/* Core Technologies */}
        <div className="mt-3.5 flex flex-wrap gap-1">
          {idea.coreTechnologies.map((tech) => (
            <span
              key={tech}
              className="rounded bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-3.5 border-t border-neutral-100 flex items-center gap-2">
        <button
          onClick={() => onGenerateBlueprint(idea)}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-md bg-neutral-900 py-2 px-3 text-xs font-medium text-white hover:bg-neutral-800 transition-colors shadow-2xs"
        >
          <span>View Project Plan</span>
          <ArrowRight className="h-3 w-3" />
        </button>

        <button
          onClick={() => onSelect(idea)}
          className={`px-3 py-2 text-xs font-medium rounded-md border transition-colors ${
            isSelected
              ? 'border-neutral-900 bg-neutral-100 text-neutral-900'
              : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
          }`}
          title="Select as your active project"
        >
          {isSelected ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  );
};
