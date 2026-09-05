'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import { ProjectIdea, ProjectBlueprint, MilestoneProgress, RecentActivity } from '@/types';

interface ProjectDashboardProps {
  studentName?: string;
  project: ProjectIdea | null;
  blueprint: ProjectBlueprint | null;
  milestones: MilestoneProgress[];
  activities: RecentActivity[];
  onContinue: () => void;
  onNavigateToProgress: () => void;
  onNavigateToViva: () => void;
  onFindNewProject: () => void;
}

export const ProjectDashboard: React.FC<ProjectDashboardProps> = ({
  studentName = 'Student',
  project,
  blueprint,
  milestones,
  activities,
  onContinue,
  onNavigateToProgress,
  onNavigateToViva,
  onFindNewProject,
}) => {
  // Compute overall progress percentage from milestones tasks
  const allTasks = milestones.flatMap((m) => m.tasks);
  const completedTasks = allTasks.filter((t) => t.completed);
  const progressPercent = allTasks.length > 0 ? Math.round((completedTasks.length / allTasks.length) * 100) : 45;

  // Current active milestone & next pending task
  const activeMilestone = milestones.find((m) => m.status === 'in_progress') || milestones[0];
  const nextTask = allTasks.find((t) => !t.completed);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="rounded-lg border border-neutral-200 bg-white p-8 max-w-md mx-auto shadow-xs">
          <h2 className="text-base font-semibold text-neutral-900">No project selected yet</h2>
          <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">
            Choose a topic tailored to your skills, or load the demo workspace to see a finished setup.
          </p>
          <div className="mt-5 flex justify-center gap-2">
            <button
              onClick={onFindNewProject}
              className="rounded-md bg-neutral-900 px-3.5 py-2 text-xs font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              Find a Project →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12 space-y-6">
      {/* Greeting Header */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
          Good morning, {studentName}
        </h1>
        <p className="mt-1 text-xs text-neutral-500">
          Here&apos;s where you are with your project.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left 2 Cols: Main Project Card & Progress Card */}
        <div className="md:col-span-2 space-y-6">
          {/* Main Card: YOUR CURRENT PROJECT */}
          <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 shadow-xs">
            <div className="flex items-center justify-between text-xs text-neutral-500 uppercase tracking-wide font-semibold mb-2">
              <span>Your Current Project</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 normal-case font-medium">
                Active Topic
              </span>
            </div>

            <h2 className="text-lg font-semibold text-neutral-900 tracking-tight mt-1">
              {project.title}
            </h2>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Current progress indicator */}
            <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-700">Project Completion</span>
                <span className="font-semibold text-neutral-900">{progressPercent}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
                <div
                  className="h-full bg-neutral-900 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Current Milestone & Next Task */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3 rounded border border-neutral-100 bg-neutral-50/60">
                <div className="text-neutral-400 text-[11px]">Current Milestone</div>
                <div className="font-semibold text-neutral-800 mt-0.5">
                  {activeMilestone ? activeMilestone.name : 'Phase 2: Core Build'}
                </div>
              </div>

              <div className="p-3 rounded border border-neutral-100 bg-neutral-50/60">
                <div className="text-neutral-400 text-[11px]">Next Task to Complete</div>
                <div className="font-semibold text-neutral-800 mt-0.5 truncate">
                  {nextTask ? nextTask.title : 'Prepare viva defense slides'}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-5 pt-3 flex items-center justify-between">
              <button
                onClick={onContinue}
                className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-4 py-2 text-xs font-medium text-white hover:bg-neutral-800 transition-colors shadow-2xs"
              >
                <span>Continue Project</span>
                <ArrowRight className="h-3 w-3" />
              </button>

              <button
                onClick={onFindNewProject}
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Change or explore other projects
              </button>
            </div>
          </div>

          {/* Progress Card: YOUR PROGRESS */}
          <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                  Your Progress
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">High-level phase checklist</p>
              </div>
              <button
                onClick={onNavigateToProgress}
                className="text-xs font-medium text-neutral-900 hover:underline inline-flex items-center gap-1"
              >
                <span>View all tasks</span>
                <ArrowUpRight className="h-3 w-3 text-neutral-400" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded bg-neutral-50 border border-neutral-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span className="font-medium text-neutral-800">Step 1: Choose project & tools</span>
                </div>
                <span className="text-[11px] font-medium text-emerald-700">Done</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-neutral-50 border border-neutral-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span className="font-medium text-neutral-800">Step 2: Collect data & setup code</span>
                </div>
                <span className="text-[11px] font-medium text-emerald-700">Done</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded border border-neutral-200 bg-white">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full border-2 border-neutral-800 border-t-transparent animate-spin" />
                  <span className="font-medium text-neutral-900">Step 3: Build core features</span>
                </div>
                <span className="text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  In progress
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-neutral-50/60 border border-neutral-100 text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border border-neutral-300" />
                  <span>Step 4: Final demo & viva practice</span>
                </div>
                <span className="text-[11px]">Coming next</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Recent Updates & Saved Plans */}
        <div className="space-y-6">
          {/* Recent Updates */}
          <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-xs">
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
              Recent Updates
            </h3>
            <div className="space-y-3">
              {activities.length > 0 ? (
                activities.slice(0, 4).map((act) => (
                  <div key={act.id} className="text-xs pb-2 border-b border-neutral-100 last:border-0 last:pb-0">
                    <p className="text-neutral-800 leading-snug">{act.text}</p>
                    <span className="text-[11px] text-neutral-400 mt-0.5 block">{act.timestamp}</span>
                  </div>
                ))
              ) : (
                <div className="text-xs text-neutral-500">No recent activity yet.</div>
              )}
            </div>
          </div>

          {/* Quick Viva Prep Card */}
          <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-xs">
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
              Viva Preparation
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Rehearse answers to examiner questions before project submission.
            </p>
            <button
              onClick={onNavigateToViva}
              className="mt-3 w-full rounded-md border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 py-2 px-3 text-xs font-medium text-neutral-800 transition-colors text-center"
            >
              Open Viva Practice →
            </button>
          </div>

          {/* Saved Plans */}
          {blueprint && (
            <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-xs">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-neutral-400" />
                <span>Saved Plans</span>
              </h3>
              <div className="text-xs p-2.5 rounded bg-neutral-50 border border-neutral-100">
                <div className="font-medium text-neutral-900 truncate">{blueprint.projectTitle}</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Full execution blueprint (14 sections)</div>
                <button
                  onClick={onContinue}
                  className="text-[11px] font-medium text-blue-600 hover:underline mt-2 inline-block"
                >
                  Open Plan →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
