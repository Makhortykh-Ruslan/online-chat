import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { appRoutes } from '@/src/core/constants/router-paths';
import { createClient } from '@/src/infrastructure/supabase';

export async function authProxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAuthRoute = pathname.startsWith(appRoutes.auth.root);
  const isMainRoute = pathname.startsWith(appRoutes.main.root);

  const isAuthenticated = !!user;

  if (!isAuthenticated && isMainRoute) {
    return NextResponse.redirect(new URL(appRoutes.auth.signIn, request.url));
  }

  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL(appRoutes.main.chat, request.url));
  }

  return null;
}
