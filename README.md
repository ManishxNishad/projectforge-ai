# 🚀 ProjectForge AI
> **From “What project should I build?” to “I know exactly what to build next.”**
ProjectForge AI is an AI-powered project planning workspace built for college students who struggle to choose, plan, execute, and confidently present their final-year projects.
Instead of giving students a random list of project ideas, ProjectForge AI understands their **skills, interests, experience level, available time, and preferred project type** — then helps them discover feasible ideas, evaluate them, create a structured project plan, track progress, and prepare for their viva.
---
## 🌐 Live Demo
**Coming soon — deployment in progress.**
---
## 🎯 The Problem
Choosing a final-year project sounds simple.
In reality, students often struggle with questions like:
- What project should I build?
- Can I actually build it with my current skills?
- Is it realistic for my timeline?
- Which technologies should I use?
- Where should I start?
- What should I build first?
- How do I track my progress?
- What questions might the examiner ask?
Students usually depend on scattered sources such as YouTube, GitHub, Google searches, AI tools, and advice from seniors.
This often leads to projects that are:
- Too difficult
- Too generic
- Poorly planned
- Unrealistic for the available timeline
- Difficult to explain during the viva
---
# 💡 Our Solution
ProjectForge AI brings the complete project journey into one student-friendly workspace.
### Student Journey
```text
Student Profile
      ↓
Personalized Project Ideas
      ↓
Feasibility Evaluation
      ↓
Project Selection
      ↓
Complete Project Blueprint
      ↓
Progress Tracking
      ↓
Viva Preparation

The goal is simple:

Help students build projects they can actually finish and confidently explain.

⸻

✨ Key Features

1. 🧑‍💻 Personalized Student Profile

Students provide information about:

* Programming skills
* Technical experience
* Areas of interest
* Preferred domain
* Available project timeline
* Project type
* Experience level

This information becomes the foundation for personalized recommendations.

⸻

2. 💡 AI-Powered Project Discovery

ProjectForge AI generates project ideas based on the student’s profile.

Recommendations consider factors such as:

* Skill compatibility
* Domain interests
* Project difficulty
* Available development time
* AI opportunity
* Potential uniqueness
* Implementation feasibility

Instead of showing students hundreds of random ideas, the platform focuses on projects that fit their situation.

⸻

3. 📊 Feasibility Evaluation

Before committing to a project, students can understand whether the idea is realistic.

Projects can be evaluated around:

* Skill Match
* Difficulty
* Uniqueness
* AI Opportunity
* Timeline Fit
* Overall Feasibility

This helps students avoid choosing projects that look impressive but are unrealistic to complete.

⸻

4. 🏗️ Complete Project Blueprint

Once a student selects a project, ProjectForge AI turns the idea into a structured implementation plan.

The blueprint can include:

Problem

What real-world problem the project is trying to solve.

Solution

How the proposed system addresses the problem.

Technology Stack

Suggested technologies and tools.

System Workflow

A simple explanation of how the application works.

Development Roadmap

A step-by-step sequence for building the project.

Risks & Challenges

Potential technical and implementation challenges.

Viva Preparation

Important concepts and questions related to the project.

⸻

📈 5. Progress Tracking

A project plan is useful only when students actually follow it.

ProjectForge AI provides a progress workspace where students can:

* View project completion
* See current milestones
* Identify the next task
* Track completed work
* Review recent updates
* Continue from where they stopped

The focus is on answering:

“What should I do next?”

⸻

🎓 6. Viva Preparation

Students can prepare for project presentations and viva examinations from the same workspace.

The Viva section helps students review:

* Project fundamentals
* Architecture
* Technology choices
* AI/ML concepts
* Implementation decisions
* Possible examiner questions
* Project limitations
* Future improvements

The objective is not just to build the project.

It is to make sure the student can understand and explain what they built.

⸻

🤖 AI Integration

ProjectForge AI uses Google’s Gemini models to support intelligent project workflows.

AI can assist with:

* Project idea generation
* Personalized recommendations
* Feasibility reasoning
* Project blueprint generation
* Technical planning
* Viva preparation
* Viva evaluation

The AI layer is intentionally kept behind the product experience.

Instead of exposing complicated AI terminology to students, ProjectForge AI focuses on the outcome:

Better project decisions with less confusion.

⸻

🧠 Product Philosophy

ProjectForge AI follows one simple principle:

Don’t show students how much AI is happening. Show them what the AI is helping them accomplish.

The platform is designed to feel like a knowledgeable senior helping a student — not like an AI research dashboard.

⸻

🖥️ Product Experience

The application is organized around the student’s actual workflow.

Main Workspace

* Overview
* My Project
* Find a Project
* Project Plan
* Progress
* Viva

This keeps the experience focused and reduces unnecessary complexity.

⸻

🧪 Demo Mode

ProjectForge AI includes a local demo experience for situations where live AI generation is unavailable.

The demo workspace provides a complete example project:

Example Project

VitalFlow: Predictive Analytics for Patient Readmission Risk

The demo demonstrates the complete workflow:

Project Discovery
       ↓
Project Selection
       ↓
Project Blueprint
       ↓
Progress Tracking
       ↓
Viva Preparation

The healthcare example is presented as an educational/research prototype and is not intended to provide medical diagnosis or replace professional clinical decision-making.

⸻

🛠️ Tech Stack

Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Lucide React
* Motion

Backend

* Next.js API Routes
* Node.js

AI

* Google Gemini API
* @google/genai

Development

* ESLint
* TypeScript
* npm

Deployment

* Vercel
* GitHub

⸻

🏗️ Project Architecture

ProjectForge AI
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── generate-ideas/
│   │   │   ├── generate-blueprint/
│   │   │   ├── evaluate-viva/
│   │   │   └── status/
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── BlueprintView.tsx
│   │   ├── ComparisonModal.tsx
│   │   ├── ErrorAlert.tsx
│   │   ├── FeasibilityScoreBadge.tsx
│   │   ├── LandingHero.tsx
│   │   ├── LoadingSkeleton.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProfileForm.tsx
│   │   ├── ProgressTracker.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDashboard.tsx
│   │   └── VivaPreparation.tsx
│   │
│   ├── lib/
│   │   ├── demoData.ts
│   │   ├── gemini.ts
│   │   └── mockData.ts
│   │
│   └── types/
│       └── index.ts
│
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md

⸻

🚀 Getting Started

Prerequisites

Make sure you have:

* Node.js installed
* npm installed
* A Gemini API key for live AI functionality

⸻

1. Clone the repository

git clone https://github.com/ManishXNishad/projectforge-ai.git

Then:

cd projectforge-ai

⸻

2. Install dependencies

npm install

⸻

3. Configure the Gemini API

Create a .env.local file in the project root:

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

Never commit your API key to GitHub.

The project already ignores environment files through .gitignore.

⸻

4. Start the development server

npm run dev

Open:

http://localhost:3000

If port 3000 is already in use, Next.js may start on another available port such as:

http://localhost:3001

⸻

🧪 Available Scripts

Development

npm run dev

Lint

npm run lint

Production Build

npm run build

Production Start

npm run start

⸻

🔐 Environment Variables

The application uses:

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

Security

Do not:

* Commit .env.local
* Put API keys directly inside source code
* Share API keys publicly
* Upload API keys to GitHub

Use environment variables for all secrets.

⸻

🔄 How ProjectForge AI Works

Step 1 — Build Your Profile

The student tells ProjectForge AI:

* What they know
* What they like
* How experienced they are
* How much time they have
* What kind of project they want

⸻

Step 2 — Discover Projects

The AI analyzes the profile and generates suitable project opportunities.

⸻

Step 3 — Compare & Evaluate

Students can evaluate ideas based on feasibility and suitability.

⸻

Step 4 — Build the Plan

The selected idea becomes a structured project blueprint.

⸻

Step 5 — Execute

Students follow milestones and track their progress.

⸻

Step 6 — Prepare for Viva

The same project context is used to prepare the student for questions and presentation.

⸻

🎯 Why ProjectForge AI?

Most project platforms focus on:

“Here are some project ideas.”

ProjectForge AI focuses on:

“Here is a project that fits you, here is why it fits, here is how to build it, here is what to do next, and here is how to explain it.”

That difference turns project selection into an actual end-to-end student workflow.

⸻

🌱 Future Roadmap

ProjectForge AI can evolve into a complete student project operating system.

Potential future improvements include:

* Persistent user accounts
* Cloud-based project workspaces
* Team collaboration
* GitHub integration
* Repository activity tracking
* AI-assisted code review
* Automatic milestone generation
* Project documentation generation
* Presentation/PPT generation
* Advanced viva simulation
* Voice-based viva practice
* Project health and risk monitoring
* Mentor and senior feedback
* University-specific project templates
* Project evaluation rubrics

⸻

⚠️ Responsible AI

ProjectForge AI is designed to assist students, not replace their understanding or decision-making.

AI-generated recommendations should be reviewed by the student and, where appropriate, by faculty or mentors.

For domains such as healthcare, finance, cybersecurity, and other high-impact areas, generated project concepts should be treated as prototypes or educational/research ideas unless independently validated and appropriately governed.

⸻

🏆 Hackathon Project

Project: ProjectForge AI

Built for: PromptWars Hackathon

Category: AI / Student Productivity / Education Technology

Core Idea

Personalized project discovery + feasibility + execution planning + progress tracking + viva preparation in one workspace.

⸻

👨‍💻 Built By

Manish Nishad

B.Tech Computer Science & Engineering
AI/ML Enthusiast | Developer | Creator

⸻

⭐ Built With

* Next.js
* React
* TypeScript
* Tailwind CSS
* Google Gemini
* Vercel
* GitHub

⸻

📄 License

This project is currently developed as a hackathon project.

If you plan to reuse, modify, or distribute the code, please check the repository terms or contact the author.

⸻

💬 Final Thought

Students don’t need another list of 100 project ideas.

They need to know:

“Which project is right for me?”

“Can I actually build it?”

“What should I do next?”

“And can I confidently explain it when the examiner asks?”

That’s what ProjectForge AI is built to solve. 🚀

