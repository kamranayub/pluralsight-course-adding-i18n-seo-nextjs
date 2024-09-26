import { NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';
import { getLocale } from 'middleware';

export async function GET(request) {
  const locale = getLocale(request);
  const t = await getTranslations({ locale, namespace: 'Hello' });

  return NextResponse.json({ greeting: t('greeting') });
}