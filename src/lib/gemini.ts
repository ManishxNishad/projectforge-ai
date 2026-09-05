import { StudentProfile, ProjectIdea } from '@/types';

const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent';

/**
 * Server-side helper to make a structured JSON generation request to Gemini API
 */
export async function callGeminiStructured<T>(prompt: string, apiKey: string): Promise<T> {
  const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage =
      errorData?.error?.message ||
      `Gemini API returned status ${response.status}: ${response.statusText}`;
    throw new Error(errorMessage);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!rawText) {
    throw new Error('Gemini API returned an empty response.');
  }

  try {
    const cleanJson = rawText
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
    return JSON.parse(cleanJson) as T;
  } catch (err: unknown) {
    console.error('Failed to parse Gemini JSON output:', rawText);
    throw new Error(`Malformed JSON returned by Gemini: ${(err as Error).message}`);
  }
}

/**
 * Builds the structured prompt for generating 3 personalized final-year project ideas
 */
export function buildIdeasPrompt(profile: StudentProfile): string {
  return `You are ProjectForge AI, a senior engineering mentor and university final-year project evaluator.
Evaluate the following student's profile and generate EXACTLY 3 personalized, distinct final-year project ideas.

STUDENT PROFILE:
- Interests: ${profile.interests.join(', ')}
- Technical Skills: ${profile.skills.join(', ')}
- Experience Level: ${profile.experienceLevel}
- Preferred Domain: ${profile.preferredDomain}
- Available Timeline: ${profile.availableTime}
- Project Preference: ${profile.projectPreference}

CRITICAL REQUIREMENT - FEASIBILITY SCORE EVALUATION:
A final year project must not only be innovative; it MUST be realistically buildable by this specific student within their ${profile.availableTime} timeline and current skills (${profile.skills.join(', ')}).
Evaluate:
1. Feasibility Score (0-100): High score means the student can realistically build and demo this project without getting stuck or needing massive computing budgets.
2. Innovation Score (0-100): Originality, novelty, and relevance to modern technology trends.
3. Skill Fit Score (0-100): How closely the required stack matches the student's existing skills.
4. AI Potential Score (0-100): How effectively AI/ML solves the core problem (if applicable).
5. Difficulty: 'Beginner-Friendly' | 'Moderate' | 'Advanced' | 'Challenging'

Generate 3 projects with varied styles:
- Project 1: High Feasibility & High Skill Fit (Solid, guaranteed-to-finish project).
- Project 2: High Innovation & Ambitious (Cutting-edge, pushes their skills slightly).
- Project 3: Practical Industry Problem & High Product Utility (Impressive portfolio/startup-grade MVP).

Return a JSON array with EXACTLY 3 objects conforming to this schema:
[
  {
    "id": "project-1",
    "title": "String (engaging, academic yet modern project title)",
    "shortDescription": "String (1-2 sentences summarizing the project)",
    "problemSolved": "String (concrete real-world or industry problem being solved)",
    "targetUsers": "String (specific target audience or industry segment)",
    "proposedSolution": "String (how the software/system addresses the problem)",
    "coreTechnologies": ["String", "String", "String"],
    "aiRole": "String (specific ML/AI algorithms or models used, or 'Rule-based / Heuristic' if non-AI)",
    "difficulty": "Moderate",
    "innovationScore": 88,
    "feasibilityScore": 93,
    "skillFitScore": 95,
    "aiPotentialScore": 85,
    "estimatedComplexity": "String (e.g. 'Moderate (FastAPI + React + Pre-trained PyTorch model)')",
    "whyItMatchesProfile": "String (clear 2-sentence explanation of why this fits their specific skills and timeline)",
    "estimatedDurationWeeks": 12,
    "feasibilityBreakdown": {
      "skillMatchPercentage": 95,
      "timelineFeasibility": "High",
      "resourceAvailability": "Open-Source",
      "verdict": "String (1 sentence verdict on why this is realistically buildable)"
    }
  }
]`;
}

/**
 * Builds the structured prompt for generating the comprehensive 15-section project blueprint
 */
export function buildBlueprintPrompt(idea: ProjectIdea, profile: StudentProfile): string {
  return `You are ProjectForge AI, a university faculty guide and technical architect.
Generate an in-depth, production-ready, academic-defense-grade PROJECT BLUEPRINT for the following final-year project:

PROJECT DETAILS:
- Title: ${idea.title}
- Domain: ${profile.preferredDomain}
- Short Description: ${idea.shortDescription}
- Problem Solved: ${idea.problemSolved}
- Student Skills: ${profile.skills.join(', ')}
- Available Timeline: ${profile.availableTime} (${idea.estimatedDurationWeeks} weeks)
- Core Technologies: ${idea.coreTechnologies.join(', ')}

Provide a comprehensive, exhaustive blueprint with all 15 sections required for university review and viva defense.
Return a SINGLE JSON object matching this exact schema:

{
  "projectId": "${idea.id}",
  "projectTitle": "${idea.title}",
  "overview": "String (comprehensive 2-3 paragraph executive summary and elevator pitch)",
  "problemStatement": "String (detailed problem analysis with statistics/real-world context and market pain points)",
  "targetUsers": "String (detailed user personas, beneficiaries, and stakeholders)",
  "proposedSolution": "String (thorough breakdown of how the platform solves the problem end-to-end)",
  "coreFeatures": {
    "mvp": ["String", "String", "String", "String", "String"],
    "stretch": ["String", "String", "String"]
  },
  "aiFunctionality": {
    "modelRecommended": "String (exact models or libraries e.g. YOLOv8, RoBERTa, LangChain, etc.)",
    "pipelineOverview": "String (step-by-step data ingestion, preprocessing, inference, and response pipeline)",
    "technique": "String (e.g. Fine-Tuning, Transfer Learning, RAG with Vector DB, Quantization)",
    "evaluationMetrics": ["String", "String", "String", "String"]
  },
  "recommendedTechStack": {
    "frontend": ["String", "String"],
    "backend": ["String", "String"],
    "database": ["String", "String"],
    "aiMl": ["String", "String"],
    "devopsOrHosting": ["String", "String"],
    "keyLibraries": ["String", "String", "String"]
  },
  "systemArchitectureExplanation": "String (detailed explanation of component interactions, data flow, API boundaries)",
  "architectureDiagram": "String (clean multi-line ASCII flow diagram showing client -> API -> models -> database)",
  "datasetAndApiRequirements": {
    "datasets": [
      {
        "name": "String",
        "source": "String (e.g. Kaggle / Hugging Face / Govt Portal)",
        "description": "String"
      }
    ],
    "apis": [
      {
        "name": "String",
        "freeTier": "String (e.g. 1000 free calls/month)",
        "usage": "String"
      }
    ]
  },
  "developmentRoadmap": [
    {
      "phase": "Phase 1: Requirements & Data Setup",
      "weeks": "Weeks 1 - 3",
      "tasks": ["Task 1", "Task 2", "Task 3"]
    },
    {
      "phase": "Phase 2: Core Algorithm & Backend",
      "weeks": "Weeks 4 - 7",
      "tasks": ["Task 1", "Task 2", "Task 3"]
    },
    {
      "phase": "Phase 3: Frontend & Integration",
      "weeks": "Weeks 8 - 10",
      "tasks": ["Task 1", "Task 2"]
    },
    {
      "phase": "Phase 4: Testing & Viva Prep",
      "weeks": "Weeks 11 - 12",
      "tasks": ["Task 1", "Task 2"]
    }
  ],
  "milestones": [
    {
      "milestone": "Milestone 1: Synopsis & Feasibility Sign-off",
      "deadline": "Month 1",
      "deliverable": "String",
      "guideChecklist": "String"
    },
    {
      "milestone": "Milestone 2: Mid-Term Demo",
      "deadline": "Month 2",
      "deliverable": "String",
      "guideChecklist": "String"
    },
    {
      "milestone": "Milestone 3: Final Project Defense",
      "deadline": "Month 3/End",
      "deliverable": "String",
      "guideChecklist": "String"
    }
  ],
  "risksAndLimitations": [
    {
      "risk": "String",
      "mitigation": "String"
    },
    {
      "risk": "String",
      "mitigation": "String"
    }
  ],
  "possibleImprovements": ["String", "String", "String"],
  "futureScope": ["String", "String", "String"],
  "suggestedDemoScenario": [
    {
      "stepNumber": 1,
      "action": "String (what the presenter shows on screen)",
      "talkingPoint": "String (exact script to say to university examiners)"
    },
    {
      "stepNumber": 2,
      "action": "String",
      "talkingPoint": "String"
    },
    {
      "stepNumber": 3,
      "action": "String",
      "talkingPoint": "String"
    },
    {
      "stepNumber": 4,
      "action": "String",
      "talkingPoint": "String"
    }
  ],
  "suggestedVivaPresentationPoints": [
    {
      "question": "String (likely examiner question)",
      "answer": "String (solid technical answer)",
      "keyConcept": "String"
    },
    {
      "question": "String",
      "answer": "String",
      "keyConcept": "String"
    },
    {
      "question": "String",
      "answer": "String",
      "keyConcept": "String"
    },
    {
      "question": "String",
      "answer": "String",
      "keyConcept": "String"
    }
  ]
}`;
}
