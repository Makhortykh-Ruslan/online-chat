import { format } from 'date-fns';
import { enUS, uk } from 'date-fns/locale';

const locales = { uk, en: enUS };

export const formatMessageTime = (date: string, localeKey: 'uk' | 'en') => {
  const d = new Date(date);

  const pattern = localeKey === 'uk' ? 'HH:mm' : 'hh:mm a';

  return format(d, pattern, { locale: locales[localeKey] });
};
