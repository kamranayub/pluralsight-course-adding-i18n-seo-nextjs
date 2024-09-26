import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export function getLocale({ headers }) {
  const languages = new Negotiator({ 
    headers: { 'accept-language': headers.get('accept-language') }
  }).languages();

  // -> ['fr', 'en', ...] ordered by priority
  // -> ['*'] if any language is accepted

  console.log('Detected accept-languages', languages);

  const isAcceptAny = languages.length === 1 && languages[0] === '*';
  if (isAcceptAny) {
    return defaultLocale;
  }

  return match(languages, routing.locales, routing.defaultLocale);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
};
