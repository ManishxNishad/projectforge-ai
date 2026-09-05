'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MilestoneProgress } from '@/types';

interface ProgressTrackerProps {
  milestones: MilestoneProgress[];
  onToggleTask: (taskId: string) => void;
  onNavigateToViva: () => void;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  milestones,
  onToggleTask,
  onNavigateToViva,
}) => {
  const allTasks = milestones.flatMap((m) => m.tasks);
  const completedTasks = allTasks.filter((t) => t.completed);
  const completionPercentage =
    allTasks.length > 0 ? Math.round((completedTasks.length / allTasks.length) * 100) : 0;

  // Identify next uncompleted task
  const nextTask = allTasks.find((t) => !t.completed);
  const nextMilestone = nextTask
    ? milestones.find((m) => m.id === nextTask.milestoneId)
    : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12 space-y-8">
      {/* Header with overall percentage */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
            Project Progress
          </h1>
          <p className="mt-1 text-xs text-neutral-500">
            Check off tasks as you finish them to keep your college review on schedule.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-neutral-500">Overall Progress</div>
            <div className="text-xl font-semibold text-neutral-900">{completionPercentage}%</div>
          </div>
          <div className="w-24 h-2 rounded-full bg-neutral-100 overflow-hidden">
            <div
              className="h-full bg-neutral-900 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* "Your Next Step" Highlight Card */}
      {nextTask && (
        <div className="rounded-lg border border-neutral-300 bg-white p-5 shadow-xs">
          <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">
            Your Next Step
          </div>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-neutral-900">
                {nextTask.title}
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Phase: <span className="font-medium text-neutral-700">{nextMilestone?.name}</span> • Recommended focus for this week
              </div>
            </div>

            <button
              onClick={() => onToggleTask(nextTask.id)}
              className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 transition-colors shrink-0"
            >
              <span>Mark as done</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}

      {/* Milestones List */}
      <div className="space-y-4">
        {milestones.map((milestone, idx) => {
          const mTasks = milestone.tasks;
          const mDone = mTasks.filter((t) => t.completed).length;
          const isAllDone = mDone === mTasks.length && mTasks.length > 0;
          const isInProgress = mDone > 0 && mDone < mTasks.length;

          return (
            <div
              key={milestone.id}
              className="rounded-lg border border-neutral-200 bg-white p-5 shadow-xs"
            >
              {/* Milestone header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-semibold text-neutral-400">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {milestone.name}
                    </h3>
                    <p className="text-[11px] text-neutral-500">{milestone.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500 font-mono">
                    {mDone}/{mTasks.length}
                  </span>
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                      isAllDone
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : isInProgress
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    {isAllDone ? 'Completed' : isInProgress ? 'In Progress' : 'Upcoming'}
                  </span>
                </div>
              </div>

              {/* Tasks List */}
              <div className="pt-3 space-y-2">
                {mTasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => onToggleTask(task.id)}
                    className="flex items-start gap-2.5 p-2 rounded hover:bg-neutral-50 transition-colors cursor-pointer text-xs"
                  >
                    <button
                      type="button"
                      className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                        task.completed
                          ? 'bg-neutral-900 border-neutral-900 text-white'
                          : 'border-neutral-300 bg-white hover:border-neutral-400'
                      }`}
                    >
                      {task.completed && '✓'}
                    </button>
                    <span
                      className={`leading-normal ${
                        task.completed
                          ? 'text-neutral-400 line-through'
                          : 'text-neutral-800'
                      }`}
                    >
                      {task.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom helper */}
      <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>Ready to rehearse your oral presentation?</span>
        <button
          onClick={onNavigateToViva}
          className="font-medium text-neutral-900 hover:underline"
        >
          Practice Viva Questions →
        </button>
      </div>
    </div>
  );
};
