'use client';

import React, { useState } from 'react';
import {
  Copy,
  Check,
  Download,
  Printer,
  ArrowLeft,
  Bookmark,
} from 'lucide-react';
import { ProjectBlueprint, ProjectIdea } from '@/types';

interface BlueprintViewProps {
  blueprint: ProjectBlueprint;
  idea?: ProjectIdea;
  onBack: () => void;
  onSavePlan?: (blueprint: ProjectBlueprint) => void;
}

type PlanTab = 'overview' | 'tech' | 'tasks' | 'milestones' | 'risks' | 'viva';

export const BlueprintView: React.FC<BlueprintViewProps> = ({
  blueprint,
  idea,
  onBack,
  onSavePlan,
}) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<PlanTab>('overview');

  const formatBlueprintToMarkdown = (): string => {
    return `# ${blueprint.projectTitle}
*Project Plan — Generated on ProjectForge*

## 1. Goal & Overview
${blueprint.overview}

## 2. Problem Statement
${blueprint.problemStatement}

## 3. Target Users
${blueprint.targetUsers}

## 4. Proposed Solution
${blueprint.proposedSolution}

## 5. Core Features
### Must-Have Deliverables
${blueprint.coreFeatures.mvp.map((f) => `- ${f}`).join('\n')}

### Future / Stretch Features
${blueprint.coreFeatures.stretch.map((f) => `- ${f}`).join('\n')}

## 6. Architecture & System Flow
${blueprint.systemArchitectureExplanation}

\`\`\`
${blueprint.architectureDiagram}
\`\`\`

## 7. Technology Stack
- Frontend: ${blueprint.recommendedTechStack.frontend.join(', ')}
- Backend: ${blueprint.recommendedTechStack.backend.join(', ')}
- Database: ${blueprint.recommendedTechStack.database.join(', ')}
- Machine Learning: ${blueprint.recommendedTechStack.aiMl.join(', ')}
- DevOps & Tools: ${blueprint.recommendedTechStack.devopsOrHosting.join(', ')}

## 8. Datasets & Resources
${blueprint.datasetAndApiRequirements.datasets.map((d) => `- **${d.name}** (${d.source}): ${d.description}`).join('\n')}
${blueprint.datasetAndApiRequirements.apis.map((a) => `- **${a.name}** (Free tier: ${a.freeTier}): ${a.usage}`).join('\n')}

## 9. Weekly Tasks & Sprint Roadmap
${blueprint.developmentRoadmap.map((phase) => `### ${phase.phase} (${phase.weeks})\n${phase.tasks.map((t) => `- ${t}`).join('\n')}`).join('\n\n')}

## 10. College Milestones
${blueprint.milestones.map((m) => `- **${m.milestone}** (${m.deadline}): ${m.deliverable}\n  Guide criteria: ${m.guideChecklist}`).join('\n')}

## 11. Risks & Practical Mitigations
${blueprint.risksAndLimitations.map((r) => `- **Risk:** ${r.risk}\n  Mitigation: ${r.mitigation}`).join('\n')}

## 12. Viva Preparation Points
${blueprint.suggestedVivaPresentationPoints.map((v, i) => `### Q${i + 1}: ${v.question}\n**Key concept:** ${v.keyConcept}\n**Answer:** ${v.answer}`).join('\n\n')}
`;
  };

  const handleCopyMarkdown = async () => {
    try {
      const md = formatBlueprintToMarkdown();
      await navigator.clipboard.writeText(md);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Failed to copy to clipboard.');
    }
  };

  const handleDownloadMarkdown = () => {
    const md = formatBlueprintToMarkdown();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `${blueprint.projectTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_plan.md`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSave = () => {
    if (onSavePlan) {
      onSavePlan(blueprint);
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
      {/* Top Action & Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-200">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Projects</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            <Bookmark className="h-3.5 w-3.5 text-neutral-500" />
            <span>{saved ? 'Saved to Workspace' : 'Save Plan'}</span>
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 text-neutral-500" />}
            <span>{copied ? 'Copied' : 'Copy Plan'}</span>
          </button>

          <button
            onClick={handleDownloadMarkdown}
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            <Download className="h-3.5 w-3.5 text-neutral-500" />
            <span className="hidden sm:inline">Export Markdown</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            <Printer className="h-3.5 w-3.5 text-neutral-500" />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </div>

      {/* Project Plan Title & Goal Banner */}
      <div className="mt-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">
          <span>Project Plan</span>
          {idea && (
            <>
              <span>•</span>
              <span className="text-emerald-700 font-medium">Good fit ({idea.feasibilityScore}% feasible)</span>
            </>
          )}
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
          {blueprint.projectTitle}
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-4xl">
          {blueprint.overview}
        </p>

        {idea && (
          <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap gap-4 text-xs text-neutral-600">
            <div>
              <span className="text-neutral-400">Timeline: </span>
              <span className="font-medium text-neutral-800">{idea.estimatedDurationWeeks || 12} Weeks</span>
            </div>
            <div>
              <span className="text-neutral-400">Team Size: </span>
              <span className="font-medium text-neutral-800">{idea.recommendedTeamSize || '1–2 Students'}</span>
            </div>
            <div>
              <span className="text-neutral-400">Difficulty: </span>
              <span className="font-medium text-neutral-800">{idea.difficulty}</span>
            </div>
          </div>
        )}
      </div>

      {/* Clean Tabs */}
      <div className="mt-6 border-b border-neutral-200 flex overflow-x-auto gap-1 text-xs pb-px">
        {[
          { id: 'overview', label: 'Overview & Problem' },
          { id: 'tech', label: 'Tech Stack & Architecture' },
          { id: 'tasks', label: 'Weekly Tasks' },
          { id: 'milestones', label: 'College Milestones' },
          { id: 'risks', label: 'Risks & Mitigations' },
          { id: 'viva', label: 'Viva Preparation' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as PlanTab)}
            className={`px-3 py-2 rounded-t-md font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
              activeTab === tab.id
                ? 'border-neutral-900 text-neutral-900 font-semibold bg-white'
                : 'border-transparent text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="mt-6 space-y-6">
        {/* TAB 1: Overview & Problem */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-neutral-200 bg-white p-5">
                <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                  Problem Statement
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {blueprint.problemStatement}
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100 text-xs">
                  <span className="font-medium text-neutral-800">Target Users: </span>
                  <span className="text-neutral-600">{blueprint.targetUsers}</span>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-white p-5">
                <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                  Proposed Solution
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {blueprint.proposedSolution}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-3">
                Core Deliverables vs Future Scope
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-medium text-neutral-800 mb-2">Must-Have Deliverables</h4>
                  <ul className="space-y-2 text-xs text-neutral-600">
                    {blueprint.coreFeatures.mvp.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-0.5">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-neutral-800 mb-2">Future Scope / Extensions</h4>
                  <ul className="space-y-2 text-xs text-neutral-600">
                    {blueprint.coreFeatures.stretch.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-0.5">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Tech Stack & Architecture */}
        {activeTab === 'tech' && (
          <div className="space-y-6">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-4">
                Recommended Technology Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded border border-neutral-100 bg-neutral-50/60">
                  <div className="font-semibold text-neutral-800 mb-1.5">Frontend</div>
                  <div className="text-neutral-600">{blueprint.recommendedTechStack.frontend.join(', ')}</div>
                </div>

                <div className="p-3 rounded border border-neutral-100 bg-neutral-50/60">
                  <div className="font-semibold text-neutral-800 mb-1.5">Backend & API</div>
                  <div className="text-neutral-600">{blueprint.recommendedTechStack.backend.join(', ')}</div>
                </div>

                <div className="p-3 rounded border border-neutral-100 bg-neutral-50/60">
                  <div className="font-semibold text-neutral-800 mb-1.5">Data & Storage</div>
                  <div className="text-neutral-600">{blueprint.recommendedTechStack.database.join(', ')}</div>
                </div>

                <div className="p-3 rounded border border-neutral-100 bg-neutral-50/60">
                  <div className="font-semibold text-neutral-800 mb-1.5">Machine Learning / Algorithms</div>
                  <div className="text-neutral-600">{blueprint.recommendedTechStack.aiMl.join(', ')}</div>
                </div>

                <div className="p-3 rounded border border-neutral-100 bg-neutral-50/60">
                  <div className="font-semibold text-neutral-800 mb-1.5">DevOps & Hosting</div>
                  <div className="text-neutral-600">{blueprint.recommendedTechStack.devopsOrHosting.join(', ')}</div>
                </div>

                <div className="p-3 rounded border border-neutral-100 bg-neutral-50/60">
                  <div className="font-semibold text-neutral-800 mb-1.5">Key Utility Libraries</div>
                  <div className="text-neutral-600">{blueprint.recommendedTechStack.keyLibraries.join(', ')}</div>
                </div>
              </div>
            </div>

            {/* Architecture Explanation & Diagram */}
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                System Architecture
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {blueprint.systemArchitectureExplanation}
              </p>

              <div className="mt-4">
                <div className="text-[11px] font-mono text-neutral-500 mb-1">Architecture Flow Diagram:</div>
                <pre className="overflow-x-auto rounded border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs text-neutral-800 leading-normal">
                  {blueprint.architectureDiagram}
                </pre>
              </div>
            </div>

            {/* Datasets & APIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-neutral-200 bg-white p-5">
                <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-3">
                  Datasets & Data Sources
                </h4>
                <div className="space-y-3 text-xs">
                  {blueprint.datasetAndApiRequirements.datasets.map((d, i) => (
                    <div key={i} className="p-3 rounded border border-neutral-100 bg-neutral-50/60">
                      <div className="font-semibold text-neutral-900">{d.name}</div>
                      <div className="text-[11px] text-blue-600 mt-0.5">{d.source}</div>
                      <div className="text-neutral-600 mt-1">{d.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-white p-5">
                <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-3">
                  APIs & External Services
                </h4>
                <div className="space-y-3 text-xs">
                  {blueprint.datasetAndApiRequirements.apis.map((a, i) => (
                    <div key={i} className="p-3 rounded border border-neutral-100 bg-neutral-50/60">
                      <div className="font-semibold text-neutral-900">{a.name}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">Free tier: {a.freeTier}</div>
                      <div className="text-neutral-600 mt-1">{a.usage}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Weekly Tasks */}
        {activeTab === 'tasks' && (
          <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">
                Weekly Sprint Tasks
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Organized week-by-week so you stay on schedule without last-minute panic.
              </p>
            </div>

            <div className="space-y-6">
              {blueprint.developmentRoadmap.map((phase, idx) => (
                <div key={idx} className="border-l-2 border-neutral-300 pl-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-neutral-900">{phase.phase}</span>
                    <span className="text-[11px] rounded bg-neutral-100 px-2 py-0.5 text-neutral-600">
                      {phase.weeks}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-600 pt-1">
                    {phase.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-0.5">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: College Milestones */}
        {activeTab === 'milestones' && (
          <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">
                College Evaluation Milestones
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Key review checkpoints required by project guides and internal committees.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {blueprint.milestones.map((m, idx) => (
                <div key={idx} className="rounded-md border border-neutral-200 p-4 text-xs space-y-2 bg-neutral-50/50">
                  <div className="font-semibold text-neutral-900">{m.milestone}</div>
                  <div className="text-[11px] text-neutral-500">Timeline: {m.deadline}</div>
                  <div className="pt-2 border-t border-neutral-200/80">
                    <div className="font-medium text-neutral-800">Deliverable:</div>
                    <div className="text-neutral-600 mt-0.5">{m.deliverable}</div>
                  </div>
                  <div>
                    <div className="font-medium text-neutral-800">Guide Checklist:</div>
                    <div className="text-neutral-600 mt-0.5">{m.guideChecklist}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: Risks & Mitigations */}
        {activeTab === 'risks' && (
          <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">
                Risks & Practical Mitigations
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Anticipated bottlenecks and how to solve them before they stall your project.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {blueprint.risksAndLimitations.map((item, idx) => (
                <div key={idx} className="p-4 rounded-md border border-neutral-200 text-xs space-y-1.5">
                  <div className="font-medium text-red-900">
                    <span className="font-semibold">Risk: </span>
                    {item.risk}
                  </div>
                  <div className="text-neutral-700 pl-3 border-l-2 border-emerald-500">
                    <span className="font-semibold text-neutral-800">Mitigation: </span>
                    {item.mitigation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: Viva Preparation */}
        {activeTab === 'viva' && (
          <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">
                Viva Defense Questions & Answers
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Questions faculty examiners commonly ask during project review sessions.
              </p>
            </div>

            <div className="space-y-4">
              {blueprint.suggestedVivaPresentationPoints.map((viva, idx) => (
                <div key={idx} className="p-4 rounded-md border border-neutral-200 text-xs space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-semibold text-neutral-900">
                      <span>Q{idx + 1}: </span>
                      {viva.question}
                    </div>
                    <span className="shrink-0 text-[11px] rounded bg-neutral-100 px-2 py-0.5 text-neutral-600">
                      {viva.keyConcept}
                    </span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded text-neutral-700 leading-relaxed border-l-2 border-neutral-800">
                    <span className="font-semibold text-neutral-900 block mb-1">Answer to give panel:</span>
                    {viva.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
