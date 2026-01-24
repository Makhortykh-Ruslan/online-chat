import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { appRoutes } from '@/src/core/constants/router-paths';
import { routing } from '@/src/i18n/routing';

export default async function NotFound() {
  const headerList = await headers();
  const acceptLang = headerList.get('accept-language') || '';

  const locale =
    routing.locales.find((l) => acceptLang.includes(l)) ||
    routing.defaultLocale;

  redirect(`/${locale}${appRoutes.auth.signIn}`);
}
