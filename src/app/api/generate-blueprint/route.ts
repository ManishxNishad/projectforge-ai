import { NextRequest, NextResponse } from 'next/server';
import { StudentProfile, ProjectIdea, ProjectBlueprint } from '@/types';
import { buildBlueprintPrompt, callGeminiStructured } from '@/lib/gemini';
import { MOCK_PROJECT_BLUEPRINT } from '@/lib/mockData';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { idea, profile, useFallback } = body as {
      idea: ProjectIdea;
      profile: StudentProfile;
      useFallback?: boolean;
    };

    if (!idea || !idea.title) {
      return NextResponse.json(
        { error: 'Invalid project selection. Missing project details.' },
        { status: 400 }
      );
    }

    // Explicit fallback
    if (useFallback) {
      const customizedBlueprint: ProjectBlueprint = {
        ...MOCK_PROJECT_BLUEPRINT,
        projectId: idea.id,
        projectTitle: idea.title,
        overview: `${idea.title}: ${idea.shortDescription} Designed to be built within ${profile?.availableTime || '12 weeks'}.`,
        problemStatement: idea.problemSolved,
        targetUsers: idea.targetUsers,
        proposedSolution: idea.proposedSolution,
      };
      return NextResponse.json({
        blueprint: customizedBlueprint,
        source: 'mock',
        message: 'Loaded realistic project blueprint.',
      });
    }

    const apiKey = process.env.GEMINI_API_KEY?.trim();

    if (!apiKey || apiKey === 'your_api_key_here') {
      return NextResponse.json(
        {
          error:
            'GEMINI_API_KEY is not configured on the server. Please configure it in .env.local or select "Use Demo Blueprint".',
          canUseFallback: true,
          missingApiKey: true,
        },
        { status: 401 }
      );
    }

    // Live AI Generation with Gemini
    const prompt = buildBlueprintPrompt(idea, profile);
    const blueprint = await callGeminiStructured<ProjectBlueprint>(prompt, apiKey);

    // Normalize IDs and titles
    blueprint.projectId = idea.id;
    blueprint.projectTitle = idea.title;

    return NextResponse.json({
      blueprint,
      source: 'gemini',
      model: 'gemini-3.6-flash',
    });
  } catch (error: unknown) {
    console.error('Error in /api/generate-blueprint:', error);
    const message = (error as Error).message || 'An unexpected error occurred while generating the blueprint.';
    return NextResponse.json(
      {
        error: message,
        canUseFallback: true,
      },
      { status: 500 }
    );
  }
}
