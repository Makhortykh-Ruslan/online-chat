import { type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { authProxy } from '@/src/core/proxy-rules/auth.proxy';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default async function proxy(request: NextRequest) {
  // 1. СПОЧАТКУ запускаємо локалізацію.
  // Вона розбереться з /uk/, /en/ і проставить заголовки.
  const response = intlMiddleware(request);

  // 2. Тепер перевіряємо авторизацію (authProxy)
  // ВАЖЛИВО: ми передаємо запит у проксі
  const authRedirect = await authProxy(request);

  // 3. Якщо проксі каже, що треба редирект (юзер не залогінений)
  if (authRedirect) {
    // Ми повертаємо редирект від проксі.
    // Оскільки URL вже буде містити локаль (наприклад /uk/auth/sign-in),
    // наступний цикл запиту пройде успішно.
    return authRedirect;
  }

  // 4. Якщо все добре, повертаємо об'єкт response,
  // який створив intlMiddleware (там лежать всі заголовки локалі)
  return response;
}

export const config = {
  // Matcher має бути широким, щоб intlMiddleware бачив усі запити
  matcher: ['/((?!api|_next|_vercel|.well-known|.*\\..*).*)'],
};
