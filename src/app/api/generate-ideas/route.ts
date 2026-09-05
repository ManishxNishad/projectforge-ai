import { NextRequest, NextResponse } from 'next/server';
import { StudentProfile, ProjectIdea } from '@/types';
import { buildIdeasPrompt, callGeminiStructured } from '@/lib/gemini';
import { MOCK_PROJECT_IDEAS } from '@/lib/mockData';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { profile, useFallback } = body as {
      profile: StudentProfile;
      useFallback?: boolean;
    };

    if (!profile || !profile.skills || profile.skills.length === 0) {
      return NextResponse.json(
        { error: 'Invalid profile data. Please provide at least one technical skill.' },
        { status: 400 }
      );
    }

    if (!profile.interests || profile.interests.length === 0) {
      return NextResponse.json(
        { error: 'Invalid profile data. Please provide at least one interest.' },
        { status: 400 }
      );
    }

    // Explicit fallback requested by user (e.g. testing UI without API key)
    if (useFallback) {
      // Customize mock data slightly with the student's skills
      const customizedMock: ProjectIdea[] = MOCK_PROJECT_IDEAS.map((idea, idx) => ({
        ...idea,
        id: `mock-idea-${Date.now()}-${idx}`,
        whyItMatchesProfile: `Tailored to your skills in ${profile.skills.slice(0, 3).join(', ')} and your ${profile.availableTime} timeline.`,
      }));
      return NextResponse.json({
        ideas: customizedMock,
        source: 'mock',
        message: 'Loaded realistic fallback project ideas.',
      });
    }

    const apiKey = process.env.GEMINI_API_KEY?.trim();

    if (!apiKey || apiKey === 'your_api_key_here') {
      return NextResponse.json(
        {
          error:
            'GEMINI_API_KEY is not configured on the server. Please add your key to .env.local or choose "Explore with Demo Mode".',
          canUseFallback: true,
          missingApiKey: true,
        },
        { status: 401 }
      );
    }

    // Live AI Generation with Gemini
    const prompt = buildIdeasPrompt(profile);
    const ideas = await callGeminiStructured<ProjectIdea[]>(prompt, apiKey);

    // Validate array format
    if (!Array.isArray(ideas) || ideas.length === 0) {
      throw new Error('Gemini did not return an array of project ideas.');
    }

    // Ensure unique IDs
    const normalizedIdeas = ideas.slice(0, 3).map((idea, index) => ({
      ...idea,
      id: idea.id || `idea-${Date.now()}-${index}`,
    }));

    return NextResponse.json({
      ideas: normalizedIdeas,
      source: 'gemini',
      model: 'gemini-3.6-flash',
    });
  } catch (error: unknown) {
    console.error('Error in /api/generate-ideas:', error);
    const message = (error as Error).message || 'An unexpected error occurred while generating ideas.';
    return NextResponse.json(
      {
        error: message,
        canUseFallback: true,
      },
      { status: 500 }
    );
  }
}
