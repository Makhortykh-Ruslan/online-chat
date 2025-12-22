import { type NextRequest, NextResponse } from 'next/server';

import { appRoutes } from '@/src/core/constants/router-paths';
import { createClient } from '@/src/infrastructure/supabase';

export async function authProxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAuthenticated = user;

  const isAuthRoute =
    pathname === appRoutes.auth.signIn || pathname === appRoutes.auth.signUp;
  const isChatRoute = pathname.startsWith(appRoutes.main.chat);

  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL(appRoutes.main.chat, request.url));
  }

  if (!isAuthenticated && isChatRoute) {
    return NextResponse.redirect(new URL(appRoutes.auth.signIn, request.url));
  }

  return NextResponse.next();
}
