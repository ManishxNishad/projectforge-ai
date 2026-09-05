import { StudentProfile, ProjectIdea, ProjectBlueprint } from '@/types';

export const SAMPLE_PROFILES: { label: string; profile: StudentProfile }[] = [
  {
    label: 'AIML Student (Python, PyTorch, FastApi, Healthcare)',
    profile: {
      name: 'Priya Sharma',
      college: 'Delhi Technological University',
      interests: ['Healthcare', 'Computer Vision', 'Deep Learning'],
      skills: ['Python', 'PyTorch', 'FastAPI', 'OpenCV', 'React'],
      experienceLevel: 'Intermediate',
      preferredDomain: 'AI/ML',
      availableTime: '4–6 months',
      projectPreference: 'AI-focused',
    },
  },
  {
    label: 'Full-Stack Student (React, Node.js, PostgreSQL, EdTech)',
    profile: {
      name: 'Rohan Gupta',
      college: 'Vellore Institute of Technology',
      interests: ['EdTech', 'Social Good', 'Automation & Agents'],
      skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      experienceLevel: 'Intermediate',
      preferredDomain: 'Web Development',
      availableTime: '2–3 months',
      projectPreference: 'Full-stack',
    },
  },
  {
    label: 'Cybersecurity & Cloud Student (Python, Docker, AWS, FinTech)',
    profile: {
      name: 'Aman Verma',
      college: 'National Institute of Technology',
      interests: ['FinTech', 'Privacy & Security', 'Real-time Analytics'],
      skills: ['Python', 'Docker', 'SQL', 'FastAPI'],
      experienceLevel: 'Advanced',
      preferredDomain: 'Cybersecurity',
      availableTime: '4–6 months',
      projectPreference: 'Research',
    },
  },
];

export const MOCK_PROJECT_IDEAS: ProjectIdea[] = [
  {
    id: 'proj-1',
    title: 'DermaScan AI: Skin Lesion Triage & Clinician Decision Support',
    shortDescription: 'An educational computer-vision prototype classifying dermatological conditions with uncertainty estimation.',
    problemSolved: 'Primary healthcare centers lack specialist dermatologists, causing delays in early detection of treatable skin conditions.',
    targetUsers: 'Medical researchers and community health coordinators seeking preliminary clinical decision-support.',
    proposedSolution: 'A responsive web application combining an EfficientNet-B4 computer vision classifier with Monte Carlo dropout for clinical uncertainty scoring.',
    coreTechnologies: ['Python', 'PyTorch', 'FastAPI', 'React', 'Tailwind CSS', 'Docker'],
    aiRole: 'Ensemble Convolutional Neural Network (EfficientNet-B4 + ViT) for lesion classification and grad-CAM saliency heatmaps highlighting suspicious regions.',
    difficulty: 'Moderate',
    innovationScore: 88,
    feasibilityScore: 94,
    skillFitScore: 96,
    aiPotentialScore: 92,
    buildConfidence: 94,
    aiOpportunity: 'Core',
    domain: 'AI/ML',
    recommendedTeamSize: '1–2 Students',
    estimatedComplexity: 'Moderate (PyTorch + FastAPI + React UI)',
    whyItMatchesProfile: 'Matches your Python, PyTorch, and OpenCV foundation directly. The 4–6 month timeline allows pre-trained model transfer learning without requiring high-cost custom training clusters.',
    estimatedDurationWeeks: 12,
    feasibilityBreakdown: {
      skillMatchPercentage: 96,
      timelineFeasibility: 'High',
      resourceAvailability: 'Open-Source',
      verdict: 'Good fit. Uses open ISIC dataset and standard transfer learning on free Google Colab/Kaggle T4 GPUs.',
    },
  },
  {
    id: 'proj-2',
    title: 'AuraCare: ICU Patient Deterioration Early Warning Research Prototype',
    shortDescription: 'Streaming vital signs telemetry processor that forecasts patient deterioration trends using temporal neural networks.',
    problemSolved: 'Delayed clinical intervention during early-stage deterioration leads to elevated ICU complications.',
    targetUsers: 'Intensive care researchers, clinical informatics teams, and hospital monitoring units.',
    proposedSolution: 'FastAPI microservice ingesting multi-parameter patient timeseries data, projecting deteriorating trends with SHAP interpretability cards.',
    coreTechnologies: ['Python', 'PyTorch', 'FastAPI', 'Next.js', 'PostgreSQL', 'SQL'],
    aiRole: 'Temporal Convolutional Network (TCN) + SHAP explainability engine to predict vital deterioration trends.',
    difficulty: 'Advanced',
    innovationScore: 95,
    feasibilityScore: 78,
    skillFitScore: 84,
    aiPotentialScore: 98,
    buildConfidence: 80,
    aiOpportunity: 'Core',
    domain: 'AI/ML',
    recommendedTeamSize: '2–3 Students',
    estimatedComplexity: 'High (Timeseries processing, clinical data access, SHAP explainers)',
    whyItMatchesProfile: 'High innovation for your ML interests; pushes into temporal data and explainable AI which impresses university examiners.',
    estimatedDurationWeeks: 14,
    feasibilityBreakdown: {
      skillMatchPercentage: 84,
      timelineFeasibility: 'Moderate',
      resourceAvailability: 'Moderate Compute',
      verdict: 'Possible with effort. Requires PhysioNet credentialing or synthetic MIMIC data subset.',
    },
  },
  {
    id: 'proj-3',
    title: 'MedScript Pro: Prescription OCR & Interaction Checker Prototype',
    shortDescription: 'Mobile-first optical character recognition pipeline for doctor scripts with automated contraindication detection.',
    problemSolved: 'Handwritten medical prescriptions suffer from poor legibility, causing pharmacy dispensing errors and hazardous drug interactions.',
    targetUsers: 'Community pharmacists, medical store operators, and patients managing multiple chronic prescriptions.',
    proposedSolution: 'A streamlined web app using fine-tuned TrOCR with a normalized OpenFDA drug interaction knowledge graph.',
    coreTechnologies: ['Python', 'OpenCV', 'FastAPI', 'React', 'SQL'],
    aiRole: 'TrOCR paired with fuzzy string matching against approved medicine database.',
    difficulty: 'Moderate',
    innovationScore: 84,
    feasibilityScore: 91,
    skillFitScore: 92,
    aiPotentialScore: 86,
    buildConfidence: 92,
    aiOpportunity: 'Selective',
    domain: 'Web Development',
    recommendedTeamSize: '1–2 Students',
    estimatedComplexity: 'Moderate (TrOCR inference + lookup table API)',
    whyItMatchesProfile: 'Directly leverages your OpenCV and React frontend skills to build a tangible, high-impact product demo for college project showcases.',
    estimatedDurationWeeks: 10,
    feasibilityBreakdown: {
      skillMatchPercentage: 92,
      timelineFeasibility: 'High',
      resourceAvailability: 'Open-Source',
      verdict: 'Good fit. OpenFDA API provides free structured drug contraindication endpoints.',
    },
  },
];

export const MOCK_PROJECT_BLUEPRINT: ProjectBlueprint = {
  projectId: 'proj-1',
  projectTitle: 'DermaScan AI: Multi-Modal Skin Lesion Triage & Doctor Assistant',
  overview: 'DermaScan AI is a clinician-assisting decision support tool that leverages Transfer Learning on dermatoscopic imagery to identify benign vs. malignant skin lesions with 92%+ sensitivity, accompanied by Grad-CAM visual explanations and epistemic uncertainty metrics.',
  problemStatement: 'Early melanoma detection improves 5-year survival rates past 98%, yet over 60% of rural and semi-urban health centers have zero on-site dermatologists. General physicians misdiagnose atypical lesions at rates above 35%, leading to preventable complications or unnecessary biopsic strain on secondary hospitals.',
  targetUsers: 'Rural Primary Health Center (PHC) doctors, clinical nurse practitioners, telemedicine providers, and academic dermatology research labs.',
  proposedSolution: 'A lightweight client-server architecture where a clinician uploads a macro or dermatoscope phone attachment image. An EfficientNet-B4 backbone runs inference in <500ms, returning the top 3 differential diagnoses, an anomaly score, and a Grad-CAM heatmap highlighting the specific morphological cues driving the prediction.',
  coreFeatures: {
    mvp: [
      'Image upload with automated pre-processing (hair removal artifact filter via DullRazor algorithm).',
      'Multi-class classification (Melanocytic Nevus, Melanoma, Basal Cell Carcinoma, Benign Keratosis).',
      'Confidence score display with Monte Carlo dropout-derived uncertainty warning.',
      'Interactive Grad-CAM heat-map overlay toggles for clinical explainability.',
      'PDF Clinical Triage Summary generation with timestamp, patient ID, and referral recommendation.',
    ],
    stretch: [
      'Metadata fusion (patient age, lesion location, itching/bleeding symptoms integrated via tabular MLP).',
      'Offline PWA caching with ONNX Web Runtime for zero-internet rural clinics.',
      'DICOM format compatibility for enterprise hospital PACS integration.',
    ],
  },
  aiFunctionality: {
    modelRecommended: 'EfficientNet-B4 or ConvNeXt-Tiny pre-trained on ImageNet and fine-tuned on ISIC-2024 archive.',
    pipelineOverview: 'Input Image (512x512) -> DullRazor Artifact Suppression -> Random Data Augmentation (Rotation/Flip/ColorJitter) -> EfficientNet-B4 Feature Extractor -> Dense Classifier -> Softmax Probabilities + Grad-CAM Backprop.',
    technique: 'Transfer Learning with Cross-Entropy Loss weighted by inverse class frequency to counter severe dermatological dataset imbalance.',
    evaluationMetrics: ['Balanced Multi-class Accuracy', 'Melanoma-specific Sensitivity (Recall > 92%)', 'Area Under ROC Curve (AUC-ROC)', 'F1-Score across minority classes'],
  },
  recommendedTechStack: {
    frontend: ['React 18 / Next.js', 'Tailwind CSS', 'Lucide React', 'HTML5 Canvas API for heatmap rendering'],
    backend: ['FastAPI (Python 3.11)', 'Uvicorn ASGI Server', 'Pydantic for validation'],
    database: ['PostgreSQL with Supabase or SQLite for local demo', 'MinIO or Local S3-compatible storage for medical images'],
    aiMl: ['PyTorch 2.2', 'Torchvision', 'Albumentations (data augmentation)', 'PyTorch-Grad-CAM', 'ONNX Runtime'],
    devopsOrHosting: ['Docker & Docker Compose', 'Render / Railway for backend hosting', 'Vercel for frontend'],
    keyLibraries: ['OpenCV-Python', 'ReportLab (PDF report generator)', 'Numpy', 'Scikit-learn'],
  },
  systemArchitectureExplanation: 'The application uses a decoupled microservice structure. The React frontend handles client-side image compression and displays real-time Grad-CAM overlays. The FastAPI backend receives the authenticated multipart image stream, runs pre-processing in an asynchronous worker thread, performs PyTorch GPU/CPU inference, and returns serialized JSON with base64 visual attention masks.',
  architectureDiagram: `+-------------------------------------------------------------+
|                CLINICAL CLIENT (Next.js PWA)                |
|  [Image Capture] ---> [Client Compression] ---> [UI Canvas] |
+------------------------------+------------------------------+
                               | HTTPS / Multipart POST
                               v
+-------------------------------------------------------------+
|                     FASTAPI INFERENCE API                   |
|  +--------------------+   +-------------------------------+ |
|  | DullRazor Filter   |-->| PyTorch EfficientNet-B4      | |
|  +--------------------+   +---------------+---------------+ |
|                                           |                 |
|                   +-----------------------+-------+         |
|                   v                               v         |
|        [Probability Vector]             [Grad-CAM Saliency] |
+-------------------+-------------------------------+---------+
                    |                               |
                    +---------------+---------------+
                                    v
+-------------------------------------------------------------+
|              DATABASE & AUDIT (PostgreSQL / MinIO)          |
|    - Anonymized Session Metadata                            |
|    - Verification Audit Log for Doctors                     |
+-------------------------------------------------------------+`,
  datasetAndApiRequirements: {
    datasets: [
      {
        name: 'ISIC Archive (International Skin Imaging Collaboration)',
        source: 'https://www.isic-archive.com/ (Free, Open Access)',
        description: 'Over 70,000 dermoscopic images curated by clinical dermatologists across 8 diagnostic classes.',
      },
      {
        name: 'HAM10000 Dataset',
        source: 'Kaggle / Harvard Dataverse (Free)',
        description: '10,015 dermatoscopic images verified by histopathology, perfect for rapid baseline training.',
      },
    ],
    apis: [
      {
        name: 'OpenFDA Medical Device & Drug Interaction API',
        freeTier: '100% Free (No API key strictly required, 240 req/min)',
        usage: 'Cross-referencing treatment suggestions against standard topical ointment contraindications.',
      },
    ],
  },
  developmentRoadmap: [
    {
      phase: 'Phase 1: Dataset Preparation & Baseline Model',
      weeks: 'Weeks 1 - 3',
      tasks: [
        'Download and partition HAM10000 into 70/15/15 train/val/test splits.',
        'Implement DullRazor algorithm in OpenCV to filter hair occlusions.',
        'Train baseline ResNet-50 vs EfficientNet-B4 benchmark; establish loss curves.',
      ],
    },
    {
      phase: 'Phase 2: Explainability & FastAPI Service',
      weeks: 'Weeks 4 - 6',
      tasks: [
        'Integrate PyTorch-Grad-CAM to generate visual attention maps on final conv layer.',
        'Implement Monte Carlo dropout sampling to calculate prediction variance.',
        'Build FastAPI endpoints (/predict, /explain, /health) with response schemas.',
      ],
    },
    {
      phase: 'Phase 3: React Frontend & Interactive Dashboard',
      weeks: 'Weeks 7 - 9',
      tasks: [
        'Develop responsive clinical dashboard in Next.js with drag-and-drop dropzone.',
        'Build dual-layer canvas overlay to slider-compare raw image against Grad-CAM heatmap.',
        'Implement PDF export generator with clinical disclaimer and referral note.',
      ],
    },
    {
      phase: 'Phase 4: Evaluation, Testing & Viva Presentation',
      weeks: 'Weeks 10 - 12',
      tasks: [
        'Compute confusion matrix, sensitivity, specificity, and ROC-AUC curve.',
        'Containerize using Docker Compose for 1-click execution on college lab machines.',
        'Prepare viva slide deck and record 3-minute emergency backup demo video.',
      ],
    },
  ],
  milestones: [
    {
      milestone: 'Milestone 1: Project Synopsis & Literature Survey',
      deadline: 'End of Month 1',
      deliverable: 'SRS Document + Baseline Model Training Notebook with >85% validation accuracy.',
      guideChecklist: 'Approved problem statement, verified open dataset legality, clear architecture diagram.',
    },
    {
      milestone: 'Milestone 2: Mid-Term Progress Review',
      deadline: 'End of Month 2',
      deliverable: 'Working FastAPI backend + Grad-CAM explainability pipeline tested on 100 benchmark images.',
      guideChecklist: 'Demonstrate live API endpoint via Swagger UI, show heatmaps correlating with lesion borders.',
    },
    {
      milestone: 'Milestone 3: Final Internal Evaluation',
      deadline: 'End of Month 3',
      deliverable: 'Integrated Full-Stack Web Application + Draft Project Report (Chapters 1 - 5).',
      guideChecklist: 'Complete user flow from upload to diagnostic report, evaluation metrics comparison table.',
    },
  ],
  risksAndLimitations: [
    {
      risk: 'Class Imbalance: Melanoma samples are significantly fewer than common benign nevi.',
      mitigation: 'Use focal loss or weighted cross-entropy combined with Albumentations synthetic affine augmentations.',
    },
    {
      risk: 'Skin Tone Bias: Public datasets predominantly feature Fitzpatrick skin types I-III.',
      mitigation: 'Explicitly state limitation in dissertation and apply CLAHE color constancy pre-processing to equalize illumination.',
    },
    {
      risk: 'Latency on CPU College Lab Machines during Viva.',
      mitigation: 'Quantize PyTorch model to ONNX dynamic INT8 to achieve <400ms inference on standard laptops without GPU.',
    },
  ],
  possibleImprovements: [
    'Fine-tune multimodal Vision-Language Models (LLaVA-Med) for interactive conversational doctor queries.',
    'Incorporate lesion boundary segmentation using U-Net or MobileSAM.',
    'Enable federated learning to allow multiple clinics to train without sharing sensitive patient imagery.',
  ],
  futureScope: [
    'Direct mobile camera video stream analysis with automatic focus detection.',
    'Integration with Electronic Health Record (EHR) standards (FHIR / HL7).',
    'Clinical trial validation with local medical college dermatology department.',
  ],
  suggestedDemoScenario: [
    {
      stepNumber: 1,
      action: 'Open DermaScan AI web dashboard and demonstrate the clean, clinical interface.',
      talkingPoint: '"Good morning esteemed panel. Today we are presenting DermaScan AI, an explainable triage assistant designed for primary health centers lacking specialist dermatologists."',
    },
    {
      stepNumber: 2,
      action: 'Upload a challenging dermatoscope image containing hair artifacts.',
      talkingPoint: '"Notice how the client instantly applies our DullRazor artifact suppression, removing false hair edges that traditionally fool CNN convolutional filters."',
    },
    {
      stepNumber: 3,
      action: 'Click "Run Triage Analysis" and watch results appear in under 500ms.',
      talkingPoint: '"The model achieves 94% confidence for Melanoma, but critically, it provides a low uncertainty variance index of 0.04."',
    },
    {
      stepNumber: 4,
      action: 'Toggle the interactive Grad-CAM heatmap slider over the lesion.',
      talkingPoint: '"Unlike black-box AI, here we see the neural network activated strictly on the irregular pigment network along the lesion perimeter, verifying clinical sound reasoning."',
    },
    {
      stepNumber: 5,
      action: 'Click "Export Clinical Referral PDF".',
      talkingPoint: '"A standardized triage summary is generated instantly, ready for the patient to present at an oncology referral center."',
    },
  ],
  suggestedVivaPresentationPoints: [
    {
      question: 'Why did you choose EfficientNet-B4 instead of training a custom CNN or using ResNet-50?',
      answer: 'EfficientNet utilizes compound scaling to balance depth, width, and resolution uniformly with 19M parameters. In dermatological tasks, image resolution is vital for fine pigment globules, making EfficientNet-B4 superior in FLOPs-to-accuracy ratio over heavier models like ResNet-152.',
      keyConcept: 'Compound Scaling Principle & Transfer Learning Efficiency',
    },
    {
      question: 'How do you prevent the model from hallucinating confidence on completely non-medical images (e.g., a photo of a dog or car)?',
      answer: 'We implemented Monte Carlo Dropout inference. By running 10 forward stochastic passes with dropout enabled at test time, out-of-distribution inputs yield high predictive variance across softmax distributions, flagging an "Indeterminate / Non-Clinical Image" warning.',
      keyConcept: 'Epistemic Uncertainty Quantification via MC-Dropout',
    },
    {
      question: 'How did you handle the severe class imbalance in the ISIC dataset?',
      answer: 'We applied inverse class frequency weighting to our Cross-Entropy loss function and supplemented minority classes with heavy domain-specific data augmentations including random perspective shifts and CLAHE histogram equalization.',
      keyConcept: 'Class Imbalance & Loss Function Optimization',
    },
    {
      question: 'How does Grad-CAM work mathematically to generate the visual explanation?',
      answer: 'Grad-CAM computes the gradients of the target class score with respect to the feature map activations of the final convolutional layer. These gradients are global-average-pooled to obtain importance weights alpha_k, followed by a ReLU operation to capture only features with positive influence.',
      keyConcept: 'Gradient-weighted Class Activation Mapping (Grad-CAM)',
    },
  ],
};
