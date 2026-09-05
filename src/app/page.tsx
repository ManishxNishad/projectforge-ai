'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from '@/components/Navbar';
import { LandingHero } from '@/components/LandingHero';
import { ProfileForm } from '@/components/ProfileForm';
import { ProjectCard } from '@/components/ProjectCard';
import { ComparisonModal } from '@/components/ComparisonModal';
import { BlueprintView } from '@/components/BlueprintView';
import { ProjectDashboard } from '@/components/ProjectDashboard';
import { ProgressTracker } from '@/components/ProgressTracker';
import { VivaPreparation } from '@/components/VivaPreparation';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { ErrorAlert } from '@/components/ErrorAlert';
import {
  StudentProfile,
  ProjectIdea,
  ProjectBlueprint,
  MilestoneProgress,
  RecentActivity,
  VivaQuestion,
} from '@/types';
import {
  DEMO_STUDENT_PROFILE,
  DEMO_PROJECT_IDEAS,
  DEMO_BLUEPRINT,
  DEMO_MILESTONES,
  DEMO_RECENT_ACTIVITIES,
  DEMO_VIVA_QUESTIONS,
} from '@/lib/demoData';
import { SlidersHorizontal, Scale } from 'lucide-react';

export default function Home() {
  const [currentTab, setCurrentTab] = useState<NavTab>(() => {
    if (typeof window === 'undefined') return 'overview';
    try {
      const saved = localStorage.getItem('pf_tab') as NavTab;
      return saved || 'overview';
    } catch {
      return 'overview';
    }
  });

  const [profile, setProfile] = useState<StudentProfile | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const saved = localStorage.getItem('pf_profile');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [ideas, setIdeas] = useState<ProjectIdea[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('pf_ideas');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProject, setSelectedProject] = useState<ProjectIdea | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const saved = localStorage.getItem('pf_selected_project');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [blueprint, setBlueprint] = useState<ProjectBlueprint | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const saved = localStorage.getItem('pf_blueprint');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [milestones, setMilestones] = useState<MilestoneProgress[]>(() => {
    if (typeof window === 'undefined') return DEMO_MILESTONES;
    try {
      const saved = localStorage.getItem('pf_milestones');
      return saved ? JSON.parse(saved) : DEMO_MILESTONES;
    } catch {
      return DEMO_MILESTONES;
    }
  });

  const [activities, setActivities] = useState<RecentActivity[]>(() => {
    if (typeof window === 'undefined') return DEMO_RECENT_ACTIVITIES;
    try {
      const saved = localStorage.getItem('pf_activities');
      return saved ? JSON.parse(saved) : DEMO_RECENT_ACTIVITIES;
    } catch {
      return DEMO_RECENT_ACTIVITIES;
    }
  });

  const [vivaQuestions] = useState<VivaQuestion[]>(DEMO_VIVA_QUESTIONS);

  const [isDemoActive, setIsDemoActive] = useState<boolean>(false);
  const [isLoadingIdeas, setIsLoadingIdeas] = useState<boolean>(false);
  const [isLoadingBlueprint, setIsLoadingBlueprint] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isMissingApiKey, setIsMissingApiKey] = useState<boolean>(false);

  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);
  const [comparedIdeaIds, setComparedIdeaIds] = useState<string[]>([]);
  const [isRefiningProfile, setIsRefiningProfile] = useState<boolean>(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('pf_tab', currentTab);
      if (profile) localStorage.setItem('pf_profile', JSON.stringify(profile));
      if (ideas.length > 0) localStorage.setItem('pf_ideas', JSON.stringify(ideas));
      if (selectedProject) localStorage.setItem('pf_selected_project', JSON.stringify(selectedProject));
      if (blueprint) localStorage.setItem('pf_blueprint', JSON.stringify(blueprint));
      localStorage.setItem('pf_milestones', JSON.stringify(milestones));
      localStorage.setItem('pf_activities', JSON.stringify(activities));
    } catch {
      // ignore
    }
  }, [currentTab, profile, ideas, selectedProject, blueprint, milestones, activities]);

  // Demo Mode Instant Population (Requirement 13)
  const handleLoadDemo = () => {
    setProfile(DEMO_STUDENT_PROFILE);
    setIdeas(DEMO_PROJECT_IDEAS);
    setSelectedProject(DEMO_PROJECT_IDEAS[0]);
    setBlueprint(DEMO_BLUEPRINT);
    setMilestones(DEMO_MILESTONES);
    setActivities(DEMO_RECENT_ACTIVITIES);
    setComparedIdeaIds([DEMO_PROJECT_IDEAS[0].id, DEMO_PROJECT_IDEAS[1].id]);
    setIsDemoActive(true);
    setErrorMessage(null);
    setCurrentTab('my-project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (confirm('Clear your project workspace and start fresh?')) {
      localStorage.removeItem('pf_profile');
      localStorage.removeItem('pf_ideas');
      localStorage.removeItem('pf_selected_project');
      localStorage.removeItem('pf_blueprint');
      localStorage.removeItem('pf_milestones');
      localStorage.removeItem('pf_activities');
      setProfile(null);
      setIdeas([]);
      setSelectedProject(null);
      setBlueprint(null);
      setIsDemoActive(false);
      setErrorMessage(null);
      setCurrentTab('overview');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Generate 3 ideas from student profile
  const handleGenerateIdeas = async (studentProfile: StudentProfile, forceFallback = false) => {
    setProfile(studentProfile);
    setIsLoadingIdeas(true);
    setErrorMessage(null);
    setIsMissingApiKey(false);

    try {
      const res = await fetch('/api/generate-ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile: studentProfile, useFallback: forceFallback }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.missingApiKey) {
          setIsMissingApiKey(true);
        }
        throw new Error(data.error || 'Failed to generate project ideas.');
      }

      setIdeas(data.ideas || []);
      setSelectedProject(data.ideas?.[0] || null);
      setComparedIdeaIds(data.ideas?.map((i: ProjectIdea) => i.id) || []);
      setIsRefiningProfile(false);
      setCurrentTab('find-project');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      setErrorMessage((err as Error).message || 'Failed to generate ideas.');
    } finally {
      setIsLoadingIdeas(false);
    }
  };

  // Generate detailed project blueprint
  const handleGenerateBlueprint = async (idea: ProjectIdea, forceFallback = false) => {
    if (!profile) return;
    setSelectedProject(idea);
    setIsLoadingBlueprint(true);
    setErrorMessage(null);
    setIsMissingApiKey(false);

    try {
      const res = await fetch('/api/generate-blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea, profile, useFallback: forceFallback }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.missingApiKey) {
          setIsMissingApiKey(true);
        }
        throw new Error(data.error || 'Failed to generate project blueprint.');
      }

      setBlueprint(data.blueprint);

      // Append recent activity
      const newActivity: RecentActivity = {
        id: `act-${Date.now()}`,
        text: `Generated project plan for ${idea.title}`,
        timestamp: 'Just now',
        type: 'plan',
      };
      setActivities([newActivity, ...activities]);

      setCurrentTab('plan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      setErrorMessage((err as Error).message || 'Failed to generate blueprint.');
    } finally {
      setIsLoadingBlueprint(false);
    }
  };

  // Toggle individual task in milestone tracker
  const handleToggleTask = (taskId: string) => {
    let taskName = '';
    const updated = milestones.map((m) => ({
      ...m,
      tasks: m.tasks.map((t) => {
        if (t.id === taskId) {
          taskName = t.title;
          return { ...t, completed: !t.completed };
        }
        return t;
      }),
    }));

    setMilestones(updated);

    if (taskName) {
      const newActivity: RecentActivity = {
        id: `act-${Date.now()}`,
        text: `Updated task: ${taskName}`,
        timestamp: 'Just now',
        type: 'task',
      };
      setActivities([newActivity, ...activities.slice(0, 7)]);
    }
  };

  const toggleCompare = (idea: ProjectIdea) => {
    if (comparedIdeaIds.includes(idea.id)) {
      setComparedIdeaIds(comparedIdeaIds.filter((id) => id !== idea.id));
    } else {
      setComparedIdeaIds([...comparedIdeaIds, idea.id]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfa] text-slate-900 font-sans">
      {/* Product Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        hasProject={Boolean(selectedProject)}
        studentName={profile?.name}
        onLoadDemo={handleLoadDemo}
        onReset={handleReset}
        isDemoActive={isDemoActive}
      />

      {/* Main Container */}
      <main className="flex-1 pb-16">
        {/* Error Alert */}
        {errorMessage && (
          <ErrorAlert
            errorMessage={errorMessage}
            isMissingApiKey={isMissingApiKey}
            onRetry={() => {
              if (profile) handleGenerateIdeas(profile);
              else setErrorMessage(null);
            }}
            onUseFallback={() => {
              handleLoadDemo();
            }}
          />
        )}

        {/* Loading Skeletons */}
        {isLoadingIdeas && <LoadingSkeleton type="ideas" />}
        {isLoadingBlueprint && <LoadingSkeleton type="blueprint" />}

        {/* Core Views */}
        {!isLoadingIdeas && !isLoadingBlueprint && !errorMessage && (
          <>
            {/* VIEW 1: Overview / Landing */}
            {currentTab === 'overview' && (
              <LandingHero
                onStart={() => {
                  setCurrentTab('find-project');
                  setIsRefiningProfile(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onExplore={() => {
                  if (ideas.length > 0) {
                    setCurrentTab('find-project');
                  } else {
                    handleLoadDemo();
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onLoadDemo={handleLoadDemo}
              />
            )}

            {/* VIEW 2: My Project Dashboard */}
            {currentTab === 'my-project' && (
              <ProjectDashboard
                studentName={profile?.name || 'Student'}
                project={selectedProject}
                blueprint={blueprint}
                milestones={milestones}
                activities={activities}
                onContinue={() => {
                  setCurrentTab('plan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onNavigateToProgress={() => {
                  setCurrentTab('progress');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onNavigateToViva={() => {
                  setCurrentTab('viva');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onFindNewProject={() => {
                  setCurrentTab('find-project');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {/* VIEW 3: Find a Project / Project Discovery & Profile */}
            {currentTab === 'find-project' && (
              <>
                {ideas.length === 0 || isRefiningProfile ? (
                  <ProfileForm
                    initialProfile={profile || undefined}
                    onSubmit={(p) => handleGenerateIdeas(p)}
                    isLoading={isLoadingIdeas}
                  />
                ) : (
                  <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
                      <div>
                        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                          Projects that fit you
                        </h1>
                        <p className="mt-1 text-xs text-neutral-500">
                          Based on your skills, interests and available time.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setIsComparisonOpen(true)}
                          className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                        >
                          <Scale className="h-3.5 w-3.5 text-neutral-500" />
                          <span>Compare Projects</span>
                        </button>

                        <button
                          onClick={() => setIsRefiningProfile(true)}
                          className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                        >
                          <SlidersHorizontal className="h-3.5 w-3.5 text-neutral-500" />
                          <span>Edit Profile</span>
                        </button>
                      </div>
                    </div>

                    {/* Project Cards Grid */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
                      {ideas.map((idea, index) => (
                        <ProjectCard
                          key={idea.id}
                          idea={idea}
                          index={index}
                          isSelected={selectedProject?.id === idea.id}
                          isCompared={comparedIdeaIds.includes(idea.id)}
                          onSelect={(i) => {
                            setSelectedProject(i);
                            const newAct: RecentActivity = {
                              id: `act-${Date.now()}`,
                              text: `Selected topic: ${i.title}`,
                              timestamp: 'Just now',
                              type: 'creation',
                            };
                            setActivities([newAct, ...activities]);
                          }}
                          onToggleCompare={(i) => toggleCompare(i)}
                          onGenerateBlueprint={(i) => handleGenerateBlueprint(i)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* VIEW 4: Plan / Blueprint */}
            {currentTab === 'plan' && blueprint && (
              <BlueprintView
                blueprint={blueprint}
                idea={selectedProject || undefined}
                onBack={() => {
                  setCurrentTab('find-project');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSavePlan={(bp) => {
                  setBlueprint(bp);
                  const newAct: RecentActivity = {
                    id: `act-${Date.now()}`,
                    text: `Saved plan for ${bp.projectTitle}`,
                    timestamp: 'Just now',
                    type: 'plan',
                  };
                  setActivities([newAct, ...activities]);
                }}
              />
            )}

            {/* VIEW 5: Progress Tracker */}
            {currentTab === 'progress' && (
              <ProgressTracker
                milestones={milestones}
                onToggleTask={handleToggleTask}
                onNavigateToViva={() => {
                  setCurrentTab('viva');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {/* VIEW 6: Viva Preparation */}
            {currentTab === 'viva' && (
              <VivaPreparation
                questions={vivaQuestions}
                projectTitle={selectedProject?.title || 'Your Final-Year Project'}
              />
            )}
          </>
        )}
      </main>

      {/* Comparison Modal */}
      <ComparisonModal
        ideas={ideas}
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        onSelectProject={(idea) => {
          setSelectedProject(idea);
          handleGenerateBlueprint(idea);
        }}
      />

      {/* Clean Minimalist Product Footer */}
      <footer className="border-t border-neutral-200/80 bg-white py-6 text-xs text-neutral-500 no-print">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-800">ProjectForge</span>
            <span className="text-neutral-300">•</span>
            <span>Final-Year Project Workspace</span>
          </div>
          <div className="text-[11px] text-neutral-400">
            Designed for final-year engineering students • Built for university viva defense
          </div>
        </div>
      </footer>
    </div>
  );
}
