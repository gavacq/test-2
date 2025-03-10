import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

/**
 * Troubleshooting:
 * - Variables are not allowed in matchers. Nextjs generates an AST from the config object and variables will not be read.
 */
export const config = {
  matcher: [
    {
      source:
        '/((?!api|_next/static|_next/image|favicon.ico|public|monitoring-tunnel|icon.png|image-cdn|test?_).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
      // has: [{ type: 'cookie', key: 'test' }],
    },
  ],
};

export function middleware(request: NextRequest) {
  console.log('middleware', request.nextUrl.pathname);
  if (request.nextUrl.pathname === '/test') {
    console.log;
    return NextResponse.redirect(`${request.nextUrl.origin}/test/redirect`);
  }

  return NextResponse.next();
}
