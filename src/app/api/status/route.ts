import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  const hasKey = Boolean(apiKey && apiKey !== 'your_api_key_here');

  return NextResponse.json({
    hasKey,
    model: hasKey ? 'gemini-3.6-flash' : null,
    mode: hasKey ? 'live' : 'demo-ready',
  });
}
