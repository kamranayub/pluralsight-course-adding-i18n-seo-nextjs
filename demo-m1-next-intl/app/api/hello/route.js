import { NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';
import { routing } from 'i18n/routing';

export async function GET(request) {
  const locale = new URL(request.url).searchParams.get('locale') || routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'Hello' });

  return NextResponse.json({ greeting: t('greeting') });
}