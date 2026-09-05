import { NextRequest, NextResponse } from 'next/server';
import { PracticeEvaluation } from '@/types';
import { callGeminiStructured } from '@/lib/gemini';

function evaluateLocally(
  question: string,
  studentAnswer: string,
  keyPoints: string[]
): PracticeEvaluation {
  const words = studentAnswer.trim().split(/\s+/).length;
  const lowerAnswer = studentAnswer.toLowerCase();

  // Count key points mentioned
  let matchedPoints = 0;
  keyPoints.forEach((kp) => {
    const tokens = kp.toLowerCase().split(/\s+/).filter((t) => t.length > 3);
    if (tokens.some((token) => lowerAnswer.includes(token))) {
      matchedPoints++;
    }
  });

  if (words < 10) {
    return {
      score: 45,
      whatWasGood: 'You attempted a response, which is a good starting point under examination pressure.',
      whatIsMissing:
        'The answer is too brief. External examiners look for technical depth, specific metrics, and rationale.',
      howToImprove:
        'Elaborate with at least 3-4 sentences. Mention the exact algorithms used and why your design choice is superior.',
    };
  }

  if (matchedPoints >= 2 || words > 40) {
    return {
      score: 88,
      whatWasGood:
        'Strong technical articulation! You effectively addressed the core question and highlighted practical implementation details.',
      whatIsMissing:
        'Ensure you explicitly mention performance trade-offs (e.g. latency vs accuracy) before the examiners ask follow-up questions.',
      howToImprove:
        'Structure your answer using the "Claim -> Technical Mechanism -> Outcome" framework for maximum faculty marks.',
    };
  }

  return {
    score: 72,
    whatWasGood: 'Good conceptual clarity. Your foundational explanation is accurate and understandable.',
    whatIsMissing:
      'Missing deep terminology and concrete evaluation metrics. Examiners often penalize vague responses.',
    howToImprove:
      'Incorporate specific keywords such as cross-validation, regularization parameters, and baseline comparison numbers.',
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { question, studentAnswer, projectTitle, keyPoints, useFallback } = body as {
      question: string;
      studentAnswer: string;
      projectTitle: string;
      keyPoints: string[];
      useFallback?: boolean;
    };

    if (!question || !studentAnswer) {
      return NextResponse.json(
        { error: 'Both question and student answer are required for evaluation.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY?.trim();

    if (useFallback || !apiKey || apiKey === 'your_api_key_here') {
      const localEval = evaluateLocally(question, studentAnswer, keyPoints || []);
      return NextResponse.json({
        evaluation: localEval,
        source: 'local-deterministic',
      });
    }

    // Call Gemini API
    const prompt = `You are an experienced external university faculty examiner evaluating a final-year engineering student's viva voce defense.
PROJECT TITLE: ${projectTitle}
EXAMINER QUESTION: ${question}
EXPECTED KEY POINTS: ${(keyPoints || []).join('; ')}

STUDENT'S SPOKEN/TYPED ANSWER:
"${studentAnswer}"

Evaluate the student's answer constructively. Return a JSON object matching this schema:
{
  "score": 85,
  "whatWasGood": "String (1-2 sentences highlighting what was technically sound or well-phrased)",
  "whatIsMissing": "String (1-2 sentences specifying omitted technical concepts, metrics, or trade-offs)",
  "howToImprove": "String (1-2 concrete sentences on how to say this better in front of examiners)"
}`;

    const evaluation = await callGeminiStructured<PracticeEvaluation>(prompt, apiKey);

    return NextResponse.json({
      evaluation,
      source: 'gemini',
    });
  } catch (err: unknown) {
    console.error('Error evaluating viva answer:', err);
    // Graceful fallback
    return NextResponse.json({
      evaluation: evaluateLocally('', '', []),
      source: 'fallback',
    });
  }
}
