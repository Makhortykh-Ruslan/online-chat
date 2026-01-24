import { getRequestConfig } from 'next-intl/server';

import { routing } from '@/src/i18n/routing';

export default getRequestConfig(async ({ locale }) => {
  const activeLocale = (await locale) || routing.defaultLocale;

  return {
    locale: activeLocale,
    messages: (await import(`../../messages/${activeLocale}.json`)).default,
  };
});
