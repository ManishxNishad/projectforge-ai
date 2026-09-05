'use client';

import React from 'react';
import { User } from 'lucide-react';

export type NavTab = 'overview' | 'my-project' | 'find-project' | 'plan' | 'progress' | 'viva';

interface NavbarProps {
  currentTab: NavTab;
  onNavigate: (tab: NavTab) => void;
  hasProject: boolean;
  studentName?: string;
  onLoadDemo: () => void;
  onReset: () => void;
  isDemoActive?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  hasProject,
  studentName,
  onLoadDemo,
  onReset,
  isDemoActive = false,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/90 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Left: Minimal PF Mark & Brand Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate(hasProject ? 'my-project' : 'overview')}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-85 text-left"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 text-white font-mono text-xs font-bold tracking-tight shadow-xs">
              PF
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold tracking-tight text-neutral-900">
                ProjectForge
              </span>
            </div>
          </button>

          {/* Center/Left Product Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => onNavigate('overview')}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                currentTab === 'overview'
                  ? 'bg-neutral-100 text-neutral-900'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              Overview
            </button>

            <button
              onClick={() => onNavigate('my-project')}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors flex items-center gap-1.5 ${
                currentTab === 'my-project'
                  ? 'bg-neutral-100 text-neutral-900 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <span>My Project</span>
              {hasProject && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
            </button>

            <button
              onClick={() => onNavigate('find-project')}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                currentTab === 'find-project'
                  ? 'bg-neutral-100 text-neutral-900 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              Find a Project
            </button>

            <button
              onClick={() => onNavigate('plan')}
              disabled={!hasProject}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                currentTab === 'plan'
                  ? 'bg-neutral-100 text-neutral-900 font-semibold'
                  : hasProject
                  ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  : 'text-neutral-300 cursor-not-allowed'
              }`}
            >
              Plan
            </button>

            <button
              onClick={() => onNavigate('progress')}
              disabled={!hasProject}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                currentTab === 'progress'
                  ? 'bg-neutral-100 text-neutral-900 font-semibold'
                  : hasProject
                  ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  : 'text-neutral-300 cursor-not-allowed'
              }`}
            >
              Progress
            </button>

            <button
              onClick={() => onNavigate('viva')}
              disabled={!hasProject}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                currentTab === 'viva'
                  ? 'bg-neutral-100 text-neutral-900 font-semibold'
                  : hasProject
                  ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  : 'text-neutral-300 cursor-not-allowed'
              }`}
            >
              Viva
            </button>
          </nav>
        </div>

        {/* Right Side: Demo Mode, Reset, Student Avatar */}
        <div className="flex items-center gap-3">
          <button
            onClick={onLoadDemo}
            className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors shadow-2xs ${
              isDemoActive
                ? 'border-blue-200 bg-blue-50 text-blue-700'
                : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
            }`}
            title="Load realistic demo student workspace (Manish Nishad)"
          >
            {isDemoActive ? 'Demo Active' : 'Load Demo'}
          </button>

          {hasProject && (
            <button
              onClick={onReset}
              className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors hidden sm:inline"
              title="Clear current workspace and start over"
            >
              Reset
            </button>
          )}

          {/* Student Avatar / Name */}
          <div className="flex items-center gap-2 pl-2 border-l border-neutral-200">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-medium">
              {studentName ? studentName.charAt(0) : <User className="h-3.5 w-3.5 text-neutral-500" />}
            </div>
            <span className="text-xs font-medium text-neutral-800 hidden sm:inline truncate max-w-[120px]">
              {studentName || 'Student'}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile subnav row */}
      <div className="md:hidden flex items-center gap-1 px-4 py-2 border-t border-neutral-100 overflow-x-auto text-xs">
        <button
          onClick={() => onNavigate('overview')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'overview' ? 'bg-neutral-200 font-semibold' : 'text-neutral-600'}`}
        >
          Overview
        </button>
        <button
          onClick={() => onNavigate('my-project')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'my-project' ? 'bg-neutral-200 font-semibold' : 'text-neutral-600'}`}
        >
          My Project
        </button>
        <button
          onClick={() => onNavigate('find-project')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'find-project' ? 'bg-neutral-200 font-semibold' : 'text-neutral-600'}`}
        >
          Find a Project
        </button>
        {hasProject && (
          <>
            <button
              onClick={() => onNavigate('plan')}
              className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'plan' ? 'bg-neutral-200 font-semibold' : 'text-neutral-600'}`}
            >
              Plan
            </button>
            <button
              onClick={() => onNavigate('progress')}
              className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'progress' ? 'bg-neutral-200 font-semibold' : 'text-neutral-600'}`}
            >
              Progress
            </button>
            <button
              onClick={() => onNavigate('viva')}
              className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'viva' ? 'bg-neutral-200 font-semibold' : 'text-neutral-600'}`}
            >
              Viva
            </button>
          </>
        )}
      </div>
    </header>
  );
};
