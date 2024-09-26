import { NextResponse } from 'next/server';
import { getLocale } from 'middleware';

export async function GET(request, { params }) {
  const locale = params?.locale || getLocale(request);
  const { default: { Hello: messages } } = await import(`../../../messages/${locale}.json`);

  return NextResponse.json({ greeting: messages.greeting });
}