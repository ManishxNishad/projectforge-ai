import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ProjectForge — Final-Year Project Workspace',
  description:
    'Choose a realistic final-year project, plan the execution, track milestone progress, and prepare for your university viva defense.',
  keywords: [
    'final-year project',
    'computer science engineering',
    'AIML final year projects',
    'project planner',
    'viva defense preparation',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fbfbfa] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
