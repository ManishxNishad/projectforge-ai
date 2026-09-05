import {
  StudentProfile,
  ProjectIdea,
  ProjectBlueprint,
  MilestoneProgress,
  RecentActivity,
  VivaQuestion,
} from '@/types';

export const DEMO_STUDENT_PROFILE: StudentProfile = {
  name: 'Manish Nishad',
  college: 'National Institute of Technology',
  specialRequirements: 'IEEE format documentation and working web demo for final faculty viva',
  skills: ['Python', 'React', 'Machine Learning', 'SQL'],
  preferredDomain: 'AI/ML',
  interests: ['Generative AI', 'Computer Vision', 'Automation & Agents'],
  experienceLevel: 'Intermediate',
  availableTime: '4–6 months',
  projectPreference: 'AI-focused',
};

export const DEMO_PROJECT_IDEAS: ProjectIdea[] = [
  {
    id: 'demo-proj-vitalflow',
    title: 'VitalFlow: Predictive Analytics for Patient Readmission Risk',
    shortDescription:
      'An educational machine-learning prototype providing clinician decision-support by forecasting 30-day post-discharge readmission likelihood using tabular patient records and SHAP interpretability.',
    problemSolved:
      'Hospital teams often discharge chronic care patients without automated risk stratifications, leading to preventable complications and high re-hospitalization rates within 30 days.',
    targetUsers:
      'Academic medical researchers, hospital administration students, and clinical care coordinators exploring predictive analytics.',
    proposedSolution:
      'A full-stack clinical analytics dashboard with an XGBoost/LightGBM risk scoring engine, providing feature importance breakdowns for doctors without black-box opacity.',
    coreTechnologies: ['Python', 'React', 'SQL', 'FastAPI', 'Scikit-learn', 'SHAP', 'Tailwind CSS'],
    aiRole:
      'Supervised Gradient Boosted Decision Trees (XGBoost) with SHAP (SHapley Additive exPlanations) for human-in-the-loop feature attribution.',
    difficulty: 'Moderate',
    innovationScore: 89,
    feasibilityScore: 95,
    skillFitScore: 98,
    aiPotentialScore: 92,
    buildConfidence: 94,
    aiOpportunity: 'Core',
    domain: 'AI/ML & Healthcare Analytics',
    recommendedTeamSize: '1–2 Students',
    estimatedComplexity: 'Moderate (Tabular ML + FastAPI backend + React UI)',
    whyItMatchesProfile:
      'Directly leverages your Python, SQL, and ML foundation. Working with tabular hospital benchmarks (MIMIC/UCI) avoids expensive GPU requirements while providing outstanding viva presentation value.',
    estimatedDurationWeeks: 16,
    feasibilityBreakdown: {
      skillMatchPercentage: 98,
      timelineFeasibility: 'High',
      resourceAvailability: 'Open-Source',
      verdict:
        'Extremely buildable within 4-6 months. Uses free open clinical research datasets and standard CPU/Colab computation.',
    },
  },
  {
    id: 'demo-proj-neurosync',
    title: 'NeuroSync: Multimodal Vision & Speech Assistant for Motor Rehab',
    shortDescription:
      'An assistive computer vision and audio agent that tracks patient physical therapy exercises in real-time and provides encouraging audio-visual posture corrections.',
    problemSolved:
      'Patients undergoing at-home orthopedic rehabilitation lack continuous clinical supervision, leading to incorrect posture repetition and prolonged recovery times.',
    targetUsers:
      'Physical therapy clinics, home rehab patients, and sports medicine researchers.',
    proposedSolution:
      'A browser-based client utilizing MediaPipe pose estimation paired with lightweight audio feedback agents running at 30 FPS locally.',
    coreTechnologies: ['Python', 'React', 'OpenCV', 'MediaPipe', 'FastAPI', 'WebSockets'],
    aiRole:
      'MediaPipe 33-landmark kinematic body pose extraction with geometric joint angle calculation and LLM exercise coaching.',
    difficulty: 'Advanced',
    innovationScore: 94,
    feasibilityScore: 84,
    skillFitScore: 86,
    aiPotentialScore: 96,
    buildConfidence: 82,
    aiOpportunity: 'Core',
    domain: 'AI/ML & Computer Vision',
    recommendedTeamSize: '2–3 Students',
    estimatedComplexity: 'High (Real-time computer vision streaming + kinematics)',
    whyItMatchesProfile:
      'Aligns with your Computer Vision interest and React front-end experience. The 4–6 month timeline allows fine-tuning joint angle thresholds.',
    estimatedDurationWeeks: 18,
    feasibilityBreakdown: {
      skillMatchPercentage: 86,
      timelineFeasibility: 'Moderate',
      resourceAvailability: 'Open-Source',
      verdict:
        'Challenging but doable. MediaPipe runs client-side in browser without cloud inference latency.',
    },
  },
  {
    id: 'demo-proj-smarttriage',
    title: 'SmartTriage: Rural Clinic OPD Flow & Agentic Telehealth Router',
    shortDescription:
      'A low-bandwidth triage router and automated patient queue optimizer designed for semi-urban community clinics managing severe doctor shortages.',
    problemSolved:
      'Rural Outpatient Departments (OPD) experience chaotic queues where acute emergency cases wait behind routine consultations due to lack of preliminary triage staffing.',
    targetUsers:
      'Primary Health Center front-desk coordinators, rural triage nurses, and visiting medical officers.',
    proposedSolution:
      'A fast offline-first web portal with an automated symptom severity prioritization algorithm and structured doctor handover notes.',
    coreTechnologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    aiRole:
      'Constrained generative symptom summarization agent coupled with deterministic rule-based pediatric and geriatric triage flags.',
    difficulty: 'Moderate',
    innovationScore: 86,
    feasibilityScore: 96,
    skillFitScore: 94,
    aiPotentialScore: 84,
    buildConfidence: 96,
    aiOpportunity: 'Selective',
    domain: 'Full-stack & Social Good',
    recommendedTeamSize: '1–2 Students',
    estimatedComplexity: 'Moderate (Relational DB schema + symptom router + React frontend)',
    whyItMatchesProfile:
      'Maximizes your SQL and React capabilities to build a robust, demonstrable product that external evaluators love for its immediate social utility.',
    estimatedDurationWeeks: 14,
    feasibilityBreakdown: {
      skillMatchPercentage: 94,
      timelineFeasibility: 'High',
      resourceAvailability: 'Open-Source',
      verdict:
        'Super high feasibility. Zero heavy model training required; focuses on engineering stability and presentation.',
    },
  },
];

export const DEMO_BLUEPRINT: ProjectBlueprint = {
  projectId: 'demo-proj-vitalflow',
  projectTitle: 'VitalFlow: Predictive Analytics for Patient Readmission Risk',
  overview:
    'VitalFlow is an academic research prototype and AI-assisted clinical decision support system designed to help care teams identify high-risk readmissions prior to patient discharge. Operating strictly as educational decision-support (not autonomous diagnosis), it pairs gradient-boosted risk stratification with SHAP explainability so clinicians understand the exact lab metrics driving every risk score.',
  problemStatement:
    'According to healthcare analytics benchmarks, unplanned hospital readmissions within 30 days cost healthcare systems billions annually and frequently reflect avoidable post-discharge complications. Busy clinical staff lack rapid, interpretable tools to flag which patients require specialized outpatient follow-up before leaving the ward.',
  targetUsers:
    'Care coordinators, nursing supervisors, hospital administrative researchers, and final-year medical informatics review panels.',
  proposedSolution:
    'A decoupled web application where a care coordinator inputs or uploads standardized patient discharge parameters (length of stay, prior admissions, lab metrics, diagnostic codes). The FastAPI backend runs calibrated XGBoost inference, outputting a risk score (Low, Moderate, High), an interactive SHAP waterfall explanation, and an exportable discharge recommendation summary.',
  coreFeatures: {
    mvp: [
      'Patient Profile & Encounter Data Ingestion via clean form or CSV batch import.',
      'Calibrated 30-Day Readmission Probability Score (0% to 100%) with risk tiers.',
      'Explainable AI Waterfall Plot highlighting top positive and negative contributing factors.',
      'Discharge Checklist Generator suggesting tailored follow-up actions based on risk indicators.',
      'Exportable Clinical Referral Summary (PDF/Markdown) with clear research disclaimers.',
    ],
    stretch: [
      'Interactive "What-If" Counterfactual Explorer (e.g. "How does HbA1c control impact risk?").',
      'Electronic Health Record (FHIR standard JSON) mock integration adapter.',
      'Longitudinal patient history timeseries trend visualization.',
    ],
  },
  aiFunctionality: {
    modelRecommended: 'XGBoost (Extreme Gradient Boosting) and LightGBM with Platt Probability Calibration.',
    pipelineOverview:
      'Tabular Clinical Data (Demographics, Diagnoses, Prior Visits, Labs) -> Missing Value Imputation (IterativeImputer) -> One-Hot & Target Encoding -> Scaled Feature Vector -> Calibrated XGBoost Classifier -> Probability Output -> SHAP TreeExplainer Attribution.',
    technique:
      'Supervised Binary Classification with stratified K-fold cross-validation and SMOTE-NC balancing for readmission class skew.',
    evaluationMetrics: [
      'Area Under ROC Curve (AUC-ROC > 0.82)',
      'Precision-Recall AUC (PR-AUC)',
      'Sensitivity / Recall at 80% Specificity operating threshold',
      'Brier Score (Probability Calibration Accuracy)',
    ],
  },
  recommendedTechStack: {
    frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Recharts (for SHAP visualizations)', 'Lucide React'],
    backend: ['FastAPI (Python 3.11)', 'Uvicorn ASGI', 'Pydantic for clinical schema validation'],
    database: ['PostgreSQL', 'SQLAlchemy ORM', 'SQLite (for zero-config local viva demo)'],
    aiMl: ['Scikit-learn', 'XGBoost', 'SHAP (SHapley Additive exPlanations)', 'Pandas & NumPy'],
    devopsOrHosting: ['Docker & Docker Compose', 'Render / Vercel', 'Localhost for offline exam defense'],
    keyLibraries: ['Joblib (model serialization)', 'ReportLab (PDF referral generator)', 'Matplotlib'],
  },
  systemArchitectureExplanation:
    'The system follows a clean 3-tier architectural model. The React frontend presents a modern clinician portal that collects encounter metrics and visualizes feature attributions. The FastAPI service orchestrates data validation via Pydantic, passes cleaned features to the serialized XGBoost model pipeline, and invokes the SHAP TreeExplainer to return human-interpretable JSON payloads. All encounter logs are persisted in PostgreSQL.',
  architectureDiagram: `+-------------------------------------------------------------+
|               CLINICIAN WORKSPACE (React 18 UI)             |
|   [Patient Form] ---> [Encounter Upload] ---> [SHAP Charts] |
+------------------------------+------------------------------+
                               | HTTPS / REST JSON
                               v
+-------------------------------------------------------------+
|                     FASTAPI APPLICATION SERVER              |
|  +--------------------+   +-------------------------------+ |
|  | Pydantic Validator |-->| Feature Preprocessing Pipeline| |
|  +--------------------+   +---------------+---------------+ |
|                                           |                 |
|                   +-----------------------+-------+         |
|                   v                               v         |
|        [Calibrated XGBoost Model]       [SHAP TreeExplainer]|
+-------------------+-------------------------------+---------+
                    |                               |
                    +---------------+---------------+
                                    v
+-------------------------------------------------------------+
|            DATA STORAGE LAYER (PostgreSQL / SQLite)         |
|      - De-identified Patient Benchmarks                     |
|      - Historical Risk Log & Audit Trail                    |
+-------------------------------------------------------------+`,
  datasetAndApiRequirements: {
    datasets: [
      {
        name: 'UCI Diabetes 130-US Hospitals Readmission Dataset (1999–2008)',
        source: 'UCI Machine Learning Repository / Kaggle (Public Domain)',
        description: 'Over 100,000 clinical encounters analyzing patient readmission factors across 10 years.',
      },
      {
        name: 'MIMIC-III Clinical Database (Demo Subset)',
        source: 'PhysioNet (Open Academic Access)',
        description: 'De-identified intensive care clinical records ideal for advanced research citations in project reports.',
      },
    ],
    apis: [
      {
        name: 'OpenFDA Drug Information API',
        freeTier: '100% Free (240 requests/min, no key required)',
        usage: 'Cross-referencing high-risk patient medication counts against known interaction hazards.',
      },
    ],
  },
  developmentRoadmap: [
    {
      phase: 'Phase 1: Problem Definition & Data Preprocessing',
      weeks: 'Weeks 1–4',
      tasks: [
        'Download and clean UCI Diabetes readmission dataset (handle missing lab values).',
        'Perform exploratory data analysis (EDA) and identify high-correlation readmission drivers.',
        'Implement training/test splits and evaluate initial logistic regression baseline.',
      ],
    },
    {
      phase: 'Phase 2: Model Architecture & Explainability',
      weeks: 'Weeks 5–8',
      tasks: [
        'Train and hyperparameter-tune XGBoost and LightGBM models with cross-validation.',
        'Apply Platt Scaling / Isotonic regression for calibrated probability outputs.',
        'Integrate SHAP TreeExplainer for real-time local feature attribution vectors.',
      ],
    },
    {
      phase: 'Phase 3: Backend API & Full-Stack Integration',
      weeks: 'Weeks 9–12',
      tasks: [
        'Build FastAPI endpoints (/predict-risk, /explain-factors, /export-report).',
        'Develop React clinician portal with interactive patient entry form and risk gauges.',
        'Implement Recharts waterfall graphs for SHAP values.',
      ],
    },
    {
      phase: 'Phase 4: Evaluation, Testing & Viva Presentation Prep',
      weeks: 'Weeks 13–16',
      tasks: [
        'Compute ROC-AUC, Brier score, and confusion matrix across test cohort.',
        'Draft final project documentation following IEEE university project standards.',
        'Rehearse viva presentation deck and verify offline localhost demo execution.',
      ],
    },
  ],
  milestones: [
    {
      milestone: 'Milestone 1: Synopsis & Literature Survey Sign-off',
      deadline: 'End of Month 1',
      deliverable: 'Approved project synopsis, dataset legality verification, and architecture flow diagram.',
      guideChecklist: 'Verified non-confidentiality of open dataset; guide sign-off on problem scope.',
    },
    {
      milestone: 'Milestone 2: Mid-Term Model Evaluation Review',
      deadline: 'End of Month 3',
      deliverable: 'Jupyter notebook demonstrating >0.80 AUC-ROC and functional SHAP explanation plots.',
      guideChecklist: 'Demonstrate live model inference on unseen validation sample; show code modularity.',
    },
    {
      milestone: 'Milestone 3: Final Internal & External Viva Defense',
      deadline: 'End of Month 5',
      deliverable: 'Complete web application demo, IEEE project dissertation, and viva presentation slides.',
      guideChecklist: 'Full working demo on university lab machine; answered faculty defense question bank.',
    },
  ],
  risksAndLimitations: [
    {
      risk: 'Class Imbalance: The vast majority of patients are not readmitted within 30 days.',
      mitigation: 'Use SMOTE-NC or class-weighted cross-entropy loss to ensure high sensitivity for high-risk patients.',
    },
    {
      risk: 'Healthcare AI Framing & Regulatory Limitations.',
      mitigation:
        'Explicitly label the system as an "educational research prototype for decision-support", mandating human clinical oversight.',
    },
    {
      risk: 'Feature Drift across different hospital demographic distributions.',
      mitigation:
        'Document model transferability limitations in the thesis and demonstrate model calibration on subgroup metrics.',
    },
  ],
  possibleImprovements: [
    'Incorporate Natural Language Processing (ClinicalBERT) on discharge summary notes.',
    'Build real-time SMS follow-up appointment reminders for discharged patients.',
    'Add multi-hospital federated training simulation using Flower framework.',
  ],
  futureScope: [
    'Integration with regional hospital Electronic Health Record (EHR) systems via HL7/FHIR.',
    'Mobile application for community health workers visiting discharged patients at home.',
    'Prospective observational validation study conducted with academic medical centers.',
  ],
  suggestedDemoScenario: [
    {
      stepNumber: 1,
      action: 'Open the VitalFlow Clinician Dashboard on screen.',
      talkingPoint:
        '"Good morning respected external examiners and faculty panel. Today I am demonstrating VitalFlow, an explainable machine learning decision-support tool for patient readmission risk stratification."',
    },
    {
      stepNumber: 2,
      action: 'Load an example high-risk patient encounter (e.g. elderly diabetic with 4 prior admissions).',
      talkingPoint:
        '"Notice how our Pydantic validation pipeline automatically structures demographic, medication, and past-admission metrics from the patient record in under 50 milliseconds."',
    },
    {
      stepNumber: 3,
      action: 'Click "Calculate Readmission Risk" and reveal the calibrated 78% risk score.',
      talkingPoint:
        '"The model outputs a 78% risk tier. But crucially, rather than acting as an opaque black box, VitalFlow immediately renders a SHAP waterfall breakdown below."',
    },
    {
      stepNumber: 4,
      action: 'Point to the SHAP waterfall graph showing high prior admissions and elevated glucose as primary drivers.',
      talkingPoint:
        '"Here examiners can see that prior emergency visits contributed +0.34 log-odds, while consistent outpatient medication adherence provided a -0.12 protective buffer."',
    },
    {
      stepNumber: 5,
      action: 'Click "Generate Discharge Referral Plan" and show the formatted summary.',
      talkingPoint:
        '"The system generates an actionable follow-up checklist for the clinical care coordinator, directly bridging predictive AI into practical healthcare operations."',
    },
  ],
  suggestedVivaPresentationPoints: [
    {
      question: 'Why did you choose XGBoost instead of a Deep Learning Neural Network like an MLP or Transformer?',
      answer:
        'Empirical machine learning literature shows Gradient Boosted Decision Trees consistently outperform Deep Neural Networks on tabular clinical data with heterogeneous features. XGBoost trains in seconds on CPU, prevents overfitting via L1/L2 regularization, and natively integrates with tree-based SHAP algorithms for exact Shapley value computations.',
      keyConcept: 'Tabular Data Inductive Bias & XGBoost Efficiency',
    },
    {
      question: 'What are Shapley values and how does SHAP ensure mathematical fairness in model explanations?',
      answer:
        'Rooted in cooperative game theory, Shapley values distribute the total payout among players based on their marginal contribution across all possible feature coalitions. In machine learning, SHAP satisfies Efficiency, Symmetry, and Additivity axioms, guaranteeing explanations faithfully reflect model reasoning.',
      keyConcept: 'Game Theoretic Model Interpretability (SHAP Axioms)',
    },
    {
      question: 'How did you validate that your predicted probabilities are accurate rather than just ranked correctly?',
      answer:
        'High AUC-ROC only measures ranking ability, not probability reliability. We evaluated Brier score and plotted Calibration Curves (Reliability Diagrams), applying Platt Scaling to guarantee a predicted 80% risk corresponds to an empirical 80% event frequency in hospital test batches.',
      keyConcept: 'Probability Calibration & Brier Score Optimization',
    },
    {
      question: 'What ethical and clinical disclaimers apply to your system?',
      answer:
        'VitalFlow is strictly scoped as an educational research prototype and clinical decision-support tool. It does not replace medical diagnosis, makes no autonomous pharmaceutical recommendations, and mandates human clinician verification for all discharge protocols.',
      keyConcept: 'AI Clinical Safety & Human-in-the-Loop Governance',
    },
  ],
};

export const DEMO_MILESTONES: MilestoneProgress[] = [
  {
    id: 'm1',
    name: 'Research',
    description: 'Literature survey, dataset exploration & problem finalization',
    status: 'completed',
    tasks: [
      { id: 't1-1', milestoneId: 'm1', title: 'Review 5 IEEE papers on readmission prediction', completed: true },
      { id: 't1-2', milestoneId: 'm1', title: 'Verify legality and licensing of UCI Diabetes dataset', completed: true },
      { id: 't1-3', milestoneId: 'm1', title: 'Finalize problem statement and get guide synopsis approval', completed: true },
    ],
  },
  {
    id: 'm2',
    name: 'Setup',
    description: 'Development environment, repository & backend boilerplate',
    status: 'completed',
    tasks: [
      { id: 't2-1', milestoneId: 'm2', title: 'Initialize Git repository with structured branch workflow', completed: true },
      { id: 't2-2', milestoneId: 'm2', title: 'Setup Python virtual environment with FastAPI & Scikit-learn', completed: true },
      { id: 't2-3', milestoneId: 'm2', title: 'Configure React 18 frontend with Tailwind CSS and Lucide icons', completed: true },
    ],
  },
  {
    id: 'm3',
    name: 'Core Development',
    description: 'Data cleaning, feature engineering & database schema',
    status: 'completed',
    tasks: [
      { id: 't3-1', milestoneId: 'm3', title: 'Build data preprocessing pipeline with missing value imputation', completed: true },
      { id: 't3-2', milestoneId: 'm3', title: 'Implement SQL database schema for de-identified patient encounters', completed: true },
      { id: 't3-3', milestoneId: 'm3', title: 'Create FastAPI CRUD endpoints for patient records', completed: true },
    ],
  },
  {
    id: 'm4',
    name: 'AI Integration',
    description: 'Model training, probability calibration & SHAP explainers',
    status: 'in_progress',
    tasks: [
      { id: 't4-1', milestoneId: 'm4', title: 'Train XGBoost and LightGBM models with cross-validation', completed: true },
      { id: 't4-2', milestoneId: 'm4', title: 'Implement SHAP TreeExplainer for local feature attribution', completed: true },
      { id: 't4-3', milestoneId: 'm4', title: 'Serialize model pipeline with Joblib for live FastAPI inference', completed: false },
    ],
  },
  {
    id: 'm5',
    name: 'Testing',
    description: 'Evaluation metrics, unit tests & edge case validation',
    status: 'upcoming',
    tasks: [
      { id: 't5-1', milestoneId: 'm5', title: 'Calculate ROC-AUC, Brier score, and confusion matrix curves', completed: false },
      { id: 't5-2', milestoneId: 'm5', title: 'Test edge cases (missing lab values, out-of-range inputs)', completed: false },
      { id: 't5-3', milestoneId: 'm5', title: 'Verify offline localhost execution on lab machines without internet', completed: false },
    ],
  },
  {
    id: 'm6',
    name: 'Documentation',
    description: 'Project report, architecture diagrams & IEEE paper draft',
    status: 'upcoming',
    tasks: [
      { id: 't6-1', milestoneId: 'm6', title: 'Complete Chapters 1–4 of university project report', completed: false },
      { id: 't6-2', milestoneId: 'm6', title: 'Export system architecture diagrams and database ER diagram', completed: false },
      { id: 't6-3', milestoneId: 'm6', title: 'Submit draft report for internal guide review', completed: false },
    ],
  },
  {
    id: 'm7',
    name: 'Demo',
    description: 'Live presentation flow & emergency video backup',
    status: 'upcoming',
    tasks: [
      { id: 't7-1', milestoneId: 'm7', title: 'Rehearse 3-minute exhibition demo scenario script', completed: false },
      { id: 't7-2', milestoneId: 'm7', title: 'Record a high-definition backup demonstration video', completed: false },
      { id: 't7-3', milestoneId: 'm7', title: 'Prepare project presentation slide deck (12 slides)', completed: false },
    ],
  },
  {
    id: 'm8',
    name: 'Viva',
    description: 'Faculty defense Q&A & conceptual readiness',
    status: 'upcoming',
    tasks: [
      { id: 't8-1', milestoneId: 'm8', title: 'Practice top 10 external examiner questions with model answers', completed: false },
      { id: 't8-2', milestoneId: 'm8', title: 'Review mathematical foundations of XGBoost and SHAP', completed: false },
      { id: 't8-3', milestoneId: 'm8', title: 'Conduct peer mock viva simulation', completed: false },
    ],
  },
];

export const DEMO_RECENT_ACTIVITIES: RecentActivity[] = [
  {
    id: 'act-1',
    text: 'Completed SHAP TreeExplainer integration for local feature attribution',
    timestamp: 'Today, 10:45 AM',
    type: 'task',
  },
  {
    id: 'act-2',
    text: 'Project blueprint generated for VitalFlow (14 sections)',
    timestamp: 'Yesterday, 4:20 PM',
    type: 'plan',
  },
  {
    id: 'act-3',
    text: 'Model trained with XGBoost achieving 0.84 AUC-ROC on test split',
    timestamp: '2 days ago',
    type: 'task',
  },
  {
    id: 'act-4',
    text: 'Profile calibrated for Manish Nishad (NIT)',
    timestamp: '3 days ago',
    type: 'creation',
  },
];

export const DEMO_VIVA_QUESTIONS: VivaQuestion[] = [
  {
    id: 'vq-1',
    category: 'Project Basics',
    question: 'Can you summarize your project in two sentences and state the primary problem it solves?',
    modelAnswer:
      'VitalFlow is an explainable machine learning decision-support prototype that predicts 30-day patient readmission risk from clinical encounter data. It solves the problem of high, costly re-hospitalization rates by giving clinicians interpretable risk scores before discharge.',
    keyPoints: [
      'State the project name clearly',
      'Mention readmission risk and explainable AI',
      'Highlight clinician decision-support rather than autonomous decision-making',
    ],
  },
  {
    id: 'vq-2',
    category: 'AI/ML',
    question: 'Why did you select XGBoost over standard Logistic Regression or a Deep Neural Network?',
    modelAnswer:
      'While Logistic Regression provides a linear baseline, it fails to capture complex non-linear feature interactions in multi-morbid patient records. Deep Neural Networks, on the other hand, require massive data and often overfit on tabular structures. XGBoost delivers superior AUC-ROC on tabular datasets, uses L1/L2 regularization to prevent overfitting, and pairs natively with TreeSHAP for millisecond-fast explanations.',
    keyPoints: [
      'Non-linear interactions in tabular health records',
      'L1 and L2 regularization mechanism',
      'Native compatibility with fast TreeSHAP explainers',
    ],
  },
  {
    id: 'vq-3',
    category: 'Architecture',
    question: 'How do the frontend, backend, and machine learning components communicate in your architecture?',
    modelAnswer:
      'We implemented a decoupled client-server architecture. The React frontend gathers patient encounter inputs and issues an authenticated REST request to the FastAPI server. The backend validates parameters using Pydantic schemas, runs the serialized XGBoost pipeline in memory, computes SHAP feature importance vectors, and streams structured JSON back for client-side Recharts rendering.',
    keyPoints: [
      'Decoupled 3-tier architecture',
      'Pydantic schema validation at the API boundary',
      'Asynchronous JSON response for front-end visual charts',
    ],
  },
  {
    id: 'vq-4',
    category: 'Technology Choices',
    question: 'Why did you use FastAPI instead of Flask or Django for the backend?',
    modelAnswer:
      'FastAPI was chosen because it is built natively on ASGI (Starlette) for high-performance asynchronous request handling. It provides automatic Pydantic data validation and auto-generates interactive Swagger API documentation, which allows immediate endpoint testing during university lab evaluations.',
    keyPoints: [
      'Asynchronous ASGI speed',
      'Built-in Pydantic validation',
      'Auto-generated Swagger/OpenAPI documentation for viva demonstration',
    ],
  },
  {
    id: 'vq-5',
    category: 'Dataset',
    question: 'What dataset did you train on, and how did you verify its ethical and legal usability?',
    modelAnswer:
      'We utilized the UCI Diabetes 130-US Hospitals Readmission Dataset, which is curated for academic research and de-identified under HIPAA Safe Harbor standards. It spans over 100,000 diabetic patient encounters across 130 medical centers, containing zero personally identifiable information (PII).',
    keyPoints: [
      'UCI 130-US Hospitals dataset',
      'De-identified under HIPAA Safe Harbor rules',
      'No PII contained in the data',
    ],
  },
  {
    id: 'vq-6',
    category: 'Security & Ethics',
    question: 'What are the safety and liability boundaries of deploying an AI system in a clinical setting?',
    modelAnswer:
      'VitalFlow is strictly framed as an educational decision-support tool, not an autonomous medical diagnostic device. It requires human-in-the-loop review by licensed medical practitioners and includes prominent UI disclaimers. In production, it would comply with local health data regulations and regular algorithmic bias audits.',
    keyPoints: [
      'Human-in-the-loop clinical supervision mandatory',
      'Educational and research prototype framing',
      'Algorithmic fairness audits across demographics',
    ],
  },
  {
    id: 'vq-7',
    category: 'Limitations',
    question: 'What is the biggest technical limitation of your current implementation?',
    modelAnswer:
      'The primary limitation is that our current model relies strictly on structured tabular encounter data and does not yet ingest unstructured clinical nursing notes or doctor dictations. Unstructured physician notes often contain nuanced social determinants of health that tabular metrics miss.',
    keyPoints: [
      'Reliance on structured tabular data only',
      'Missing unstructured clinical physician notes',
      'Social determinants of health often omitted in basic lab tables',
    ],
  },
  {
    id: 'vq-8',
    category: 'Future Scope',
    question: 'How would you scale this project if you had an additional six months of development time?',
    modelAnswer:
      'With additional time, we would implement a multimodal pipeline using ClinicalBERT to extract sentiment and clinical risk markers from discharge summaries, and integrate the HL7/FHIR standard to allow plug-and-play electronic health record interoperability with hospital management systems.',
    keyPoints: [
      'Multimodal ClinicalBERT integration for doctor notes',
      'HL7/FHIR healthcare interoperability standards',
      'Prospective validation with local teaching hospitals',
    ],
  },
];
