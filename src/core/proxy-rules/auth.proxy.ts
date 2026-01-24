import { type NextRequest, NextResponse } from 'next/server';

import { appRoutes } from '@/src/core/constants/router-paths';
import type { TLang } from '@/src/core/types';
import { routing } from '@/src/i18n/routing';
import { createClient } from '@/src/infrastructure/supabase';

export async function authProxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAuthenticated = !!user;

  const segments = pathname.split('/');
  const currentLocaleFromPath = segments[1];

  const acceptLanguage = request.headers.get('accept-language') || '';
  const browserLang = (acceptLanguage.split(',').at(0) || '') as TLang;

  const locale = routing.locales.includes(browserLang)
    ? browserLang
    : routing.defaultLocale;

  const isLocaleValid = routing.locales.includes(currentLocaleFromPath as any);

  if (!isLocaleValid) {
    const browserLocale =
      routing.locales.find((l) => browserLang.includes(l)) ||
      routing.defaultLocale;

    return NextResponse.redirect(
      new URL(`/${browserLocale}${appRoutes.auth.signIn}`, request.url),
    );
  }

  const isAuthRoute =
    pathname.includes(appRoutes.auth.signIn) ||
    pathname.includes(appRoutes.auth.signUp);

  const isRoot =
    pathname === '/' || pathname === `/${locale}` || pathname === `/${locale}/`;

  if (!isAuthenticated) {
    if (!isAuthRoute) {
      return NextResponse.redirect(
        new URL(`/${locale}${appRoutes.auth.signIn}`, request.url),
      );
    }
  }

  if (isAuthenticated) {
    if (isAuthRoute || isRoot) {
      return NextResponse.redirect(
        new URL(`/${locale}${appRoutes.main.chat}`, request.url),
      );
    }
  }

  return null;
}
