import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['fr', 'en'];
const defaultLocale = 'en';

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  // Redirect if there is no locale
  const locale = getLocale(request);

  console.log('Running locale middleware', locale, pathname);

  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

function getLocale(request) {
  const languages = new Negotiator({ 
    headers: { 'accept-language': request.headers.get('accept-language') } 
  }).languages();

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
