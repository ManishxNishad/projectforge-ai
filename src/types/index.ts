export type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface StudentProfile {
  name: string;
  college: string;
  specialRequirements?: string;
  interests: string[];
  skills: string[];
  experienceLevel: ExperienceLevel;
  preferredDomain: string;
  availableTime: string;
  projectPreference: string;
}

export interface FeasibilityBreakdown {
  skillMatchPercentage: number;
  timelineFeasibility: 'High' | 'Moderate' | 'Challenging';
  resourceAvailability: 'Open-Source' | 'Moderate Compute' | 'Heavy GPU Required';
  verdict: string;
}

export interface ProjectIdea {
  id: string;
  title: string;
  shortDescription: string;
  problemSolved: string;
  targetUsers: string;
  proposedSolution: string;
  coreTechnologies: string[];
  aiRole: string;
  difficulty: 'Beginner-Friendly' | 'Moderate' | 'Advanced' | 'Challenging';
  innovationScore: number; // 0 - 100
  feasibilityScore: number; // 0 - 100
  skillFitScore: number; // 0 - 100
  aiPotentialScore: number; // 0 - 100
  buildConfidence: number; // 0 - 100
  aiOpportunity: 'High' | 'Moderate' | 'Selective' | 'Core';
  domain: string;
  recommendedTeamSize: string;
  estimatedComplexity: string;
  whyItMatchesProfile: string;
  estimatedDurationWeeks: number;
  feasibilityBreakdown: FeasibilityBreakdown;
}

export interface ProjectBlueprint {
  projectId: string;
  projectTitle: string;
  overview: string;
  problemStatement: string;
  targetUsers: string;
  proposedSolution: string;
  coreFeatures: {
    mvp: string[];
    stretch: string[];
  };
  aiFunctionality: {
    modelRecommended: string;
    pipelineOverview: string;
    technique: string;
    evaluationMetrics: string[];
  };
  recommendedTechStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    aiMl: string[];
    devopsOrHosting: string[];
    keyLibraries: string[];
  };
  systemArchitectureExplanation: string;
  architectureDiagram: string;
  datasetAndApiRequirements: {
    datasets: { name: string; source: string; description: string }[];
    apis: { name: string; freeTier: string; usage: string }[];
  };
  developmentRoadmap: {
    phase: string;
    weeks: string;
    tasks: string[];
  }[];
  milestones: {
    milestone: string;
    deadline: string;
    deliverable: string;
    guideChecklist: string;
  }[];
  risksAndLimitations: {
    risk: string;
    mitigation: string;
  }[];
  possibleImprovements: string[];
  futureScope: string[];
  suggestedDemoScenario: {
    stepNumber: number;
    action: string;
    talkingPoint: string;
  }[];
  suggestedVivaPresentationPoints: {
    question: string;
    answer: string;
    keyConcept: string;
  }[];
}

export interface ProjectTask {
  id: string;
  title: string;
  milestoneId: string;
  completed: boolean;
}

export interface MilestoneProgress {
  id: string;
  name: string;
  description: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  tasks: ProjectTask[];
}

export interface RecentActivity {
  id: string;
  text: string;
  timestamp: string;
  type: 'creation' | 'task' | 'plan' | 'viva';
}

export interface VivaQuestion {
  id: string;
  category:
    | 'Project Basics'
    | 'AI/ML'
    | 'Architecture'
    | 'Technology Choices'
    | 'Dataset'
    | 'Security & Ethics'
    | 'Limitations'
    | 'Future Scope';
  question: string;
  modelAnswer: string;
  keyPoints: string[];
}

export interface PracticeEvaluation {
  score: number; // 0 - 100
  whatWasGood: string;
  whatIsMissing: string;
  howToImprove: string;
}
