import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { authProxy } from '@/src/core/proxy-rules/auth.proxy';

export function proxy(request: NextRequest) {
  const authResult = authProxy(request);

  if (authResult) return authResult;

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*', '/main/:path*'],
};
