import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const locale = params?.locale || new URL(request.url).searchParams.get('locale') || 'en';
  const { default: { Hello: messages } } = await import(`../../../messages/${locale}.json`);

  return NextResponse.json({ greeting: messages.greeting });
}