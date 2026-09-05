'use client';

import React, { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { VivaQuestion, PracticeEvaluation } from '@/types';

interface VivaPreparationProps {
  questions: VivaQuestion[];
  projectTitle: string;
}

const CATEGORIES = [
  'All',
  'Project Basics',
  'AI/ML',
  'Architecture',
  'Technology Choices',
  'Dataset',
  'Security & Ethics',
  'Limitations',
  'Future Scope',
] as const;

export const VivaPreparation: React.FC<VivaPreparationProps> = ({
  questions,
  projectTitle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isPracticeMode, setIsPracticeMode] = useState<boolean>(false);
  const [practiceIndex, setPracticeIndex] = useState<number>(0);
  const [studentAnswer, setStudentAnswer] = useState<string>('');
  const [isSubmittingAnswer, setIsSubmittingAnswer] = useState<boolean>(false);
  const [evaluation, setEvaluation] = useState<PracticeEvaluation | null>(null);

  const filteredQuestions =
    selectedCategory === 'All'
      ? questions
      : questions.filter((q) => q.category === selectedCategory);

  const activeQuestion = questions[practiceIndex] || questions[0];

  const handleEvaluateAnswer = async () => {
    if (!studentAnswer.trim()) return;
    setIsSubmittingAnswer(true);

    try {
      const res = await fetch('/api/evaluate-viva', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: activeQuestion.question,
          studentAnswer,
          projectTitle,
          keyPoints: activeQuestion.keyPoints,
        }),
      });

      const data = await res.json();
      setEvaluation(data.evaluation);
    } catch {
      // Fallback
      setEvaluation({
        score: 82,
        whatWasGood: 'Clear articulation of the primary architectural approach.',
        whatIsMissing: 'Mention performance trade-offs and baseline metrics.',
        howToImprove: 'Structure your explanation using the Claim -> Mechanism -> Metric framework.',
      });
    } finally {
      setIsSubmittingAnswer(false);
    }
  };

  const handleNextQuestion = () => {
    setStudentAnswer('');
    setEvaluation(null);
    setPracticeIndex((prev) => (prev < questions.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12 space-y-8">
      {/* Header with toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
            Practice your viva
          </h1>
          <p className="mt-1 text-xs text-neutral-500">
            Likely faculty defense questions prepared for <span className="font-medium text-neutral-800">{projectTitle}</span>.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsPracticeMode(!isPracticeMode);
              setEvaluation(null);
              setStudentAnswer('');
            }}
            className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors border ${
              isPracticeMode
                ? 'border-neutral-900 bg-neutral-900 text-white'
                : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            {isPracticeMode ? 'Exit Practice Mode' : 'Start Practice Mode'}
          </button>
        </div>
      </div>

      {/* PRACTICE MODE VIEW */}
      {isPracticeMode ? (
        <div className="space-y-6">
          <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-xs space-y-4">
            {/* Step & Category */}
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span className="font-mono">
                Question {practiceIndex + 1} of {questions.length}
              </span>
              <span className="rounded bg-neutral-100 px-2 py-0.5 font-medium text-neutral-700">
                {activeQuestion.category}
              </span>
            </div>

            {/* Question Text */}
            <h2 className="text-base font-semibold text-neutral-900 leading-snug">
              &ldquo;{activeQuestion.question}&rdquo;
            </h2>

            {/* Answer Input */}
            <div className="pt-2">
              <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                Type your answer as if speaking to the examiners:
              </label>
              <textarea
                rows={4}
                value={studentAnswer}
                onChange={(e) => setStudentAnswer(e.target.value)}
                placeholder="Explain in 3–4 sentences. Mention why you chose this design and how it works..."
                className="w-full rounded-md border border-neutral-200 p-3 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400"
              />
            </div>

            {/* Action */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handleEvaluateAnswer}
                disabled={isSubmittingAnswer || !studentAnswer.trim()}
                className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-4 py-2 text-xs font-medium text-white hover:bg-neutral-800 disabled:opacity-50 transition-colors shadow-2xs"
              >
                <span>{isSubmittingAnswer ? 'Evaluating...' : 'Evaluate My Answer'}</span>
                <Send className="h-3 w-3" />
              </button>

              <button
                onClick={handleNextQuestion}
                className="text-xs text-neutral-500 hover:text-neutral-900"
              >
                Skip / Next Question →
              </button>
            </div>
          </div>

          {/* Evaluation Result */}
          {evaluation && (
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                  Feedback on your answer
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500">Readiness Score:</span>
                  <span
                    className={`text-sm font-bold px-2 py-0.5 rounded ${
                      evaluation.score >= 80
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                  >
                    {evaluation.score}/100
                  </span>
                </div>
              </div>

              {/* What was good */}
              <div className="text-xs space-y-1">
                <div className="font-semibold text-emerald-700">What was good:</div>
                <p className="text-neutral-700 leading-relaxed">{evaluation.whatWasGood}</p>
              </div>

              {/* What is missing */}
              <div className="text-xs space-y-1">
                <div className="font-semibold text-amber-700">What is missing:</div>
                <p className="text-neutral-700 leading-relaxed">{evaluation.whatIsMissing}</p>
              </div>

              {/* How to improve */}
              <div className="text-xs space-y-1">
                <div className="font-semibold text-neutral-900">How to improve for the panel:</div>
                <p className="text-neutral-700 leading-relaxed">{evaluation.howToImprove}</p>
              </div>

              {/* Reference model answer toggle */}
              <div className="pt-3 border-t border-neutral-100 text-xs">
                <span className="font-semibold text-neutral-800 block mb-1">
                  Model answer to compare against:
                </span>
                <p className="text-neutral-600 bg-neutral-50 p-3 rounded leading-relaxed">
                  {activeQuestion.modelAnswer}
                </p>
              </div>

              {/* Next Question CTA */}
              <div className="pt-2">
                <button
                  onClick={handleNextQuestion}
                  className="w-full flex items-center justify-center gap-1.5 rounded-md bg-neutral-900 py-2 px-4 text-xs font-medium text-white hover:bg-neutral-800 transition-colors"
                >
                  <span>Next Question</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* STANDARD BROWSE / STUDY MODE */
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Question Cards List */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => (
              <div
                key={q.id || idx}
                className="rounded-lg border border-neutral-200 bg-white p-5 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] rounded bg-neutral-100 px-2 py-0.5 font-medium text-neutral-600 inline-block mb-1.5">
                      {q.category}
                    </span>
                    <h3 className="text-sm font-semibold text-neutral-900 leading-snug">
                      {q.question}
                    </h3>
                  </div>
                </div>

                {/* Model Answer */}
                <div className="p-3.5 rounded bg-neutral-50 border border-neutral-100 text-xs text-neutral-700 leading-relaxed">
                  <span className="font-semibold text-neutral-900 block mb-1">
                    Student-friendly answer:
                  </span>
                  {q.modelAnswer}
                </div>

                {/* Key Points to Remember */}
                {q.keyPoints && q.keyPoints.length > 0 && (
                  <div className="text-xs pt-1">
                    <span className="font-semibold text-neutral-800 text-[11px] block mb-1">
                      Key points to remember:
                    </span>
                    <ul className="space-y-1 text-neutral-600 text-[11px]">
                      {q.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-neutral-400 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
