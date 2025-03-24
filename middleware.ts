import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Log requests
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);

  // Handle redirect from /old-route to /new-route
  if (request.nextUrl.pathname === '/old-route') {
    return NextResponse.redirect(new URL('/new-route', request.url));
  }

  return NextResponse.next();
}