import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['fr', 'en'];
const defaultLocale = 'en';

export function middleware(request) {
  if (requestHasLocaleAlready(request)) {
    return;
  }

  return redirectRequestWithLocale(request);
}

function requestHasLocaleAlready(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  return pathnameHasLocale;
}

function redirectRequestWithLocale(request) {
  const { pathname } = request.nextUrl;

  // Redirect if there is no locale
  const locale = getLocale(request);

  console.log('Running locale middleware', locale, pathname);

  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

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

  return match(languages, locales, defaultLocale);
}

export const config = {
  matcher: [
    // Skip all API routes (/api), internal paths (_next), shop images (/images), and metadata files
    '/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)'
    // Optional: only run on root (/) URL
    // '/'
  ]
};
