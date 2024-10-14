import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(fr|en)/:path*']

  // Optional: Run on all paths EXCEPT special pathnames
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
};
