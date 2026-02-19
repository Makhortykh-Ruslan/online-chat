'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Select, Toggle } from '@/src/core/components';
import { DEFAULT_SELECTED_LANG, LANGUAGES_MOCK } from '@/src/core/constants';
import type { ProfileDTO } from '@/src/core/dto';
import { updateProfilePreference } from '@/src/core/services';
import type { TIdName } from '@/src/core/types';
import { usePathname, useRouter } from '@/src/i18n/routing';

import { PreferencesStyles } from './Preferences.styles';

export const Preferences = (profileData: ProfileDTO) => {
  const titles = useTranslations('titles');
  const descriptions = useTranslations('descriptions');
  const placeholders = useTranslations('placeholders');

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(profileData.theme === 'dark');
  const [language, setLanguage] = useState<TIdName<string, string> | null>(
    LANGUAGES_MOCK.find((el) => el.id === profileData.language) ||
      DEFAULT_SELECTED_LANG,
  );

  useEffect(() => {
    initData();
  }, []);

  const handleToggleChange = async (isDark: boolean) => {
    setToggle(isDark);
    const newTheme = isDark ? 'dark' : 'light';
    setTheme(newTheme);

    if (language && newTheme) {
      await updateProfilePreference({
        language: language.id,
        theme: newTheme,
      });
    }
  };

  const handleChangeLanguages = async (value: TIdName<string, string>) => {
    setLanguage(value);

    if (value && theme) {
      await updateProfilePreference({
        language: value.id,
        theme,
      });
    }

    router.replace({ pathname }, { locale: value.id, scroll: false });
  };

  const initData = async () => {
    let resolvedTheme = profileData.theme;

    if (profileData.theme === 'system') {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      await updateProfilePreference({
        language: profileData.language,
        theme: resolvedTheme,
      });
    }

    setTheme(resolvedTheme);
    setToggle(resolvedTheme === 'dark');

    if (profileData.language !== locale) {
      router.replace(
        { pathname },
        { locale: profileData.language, scroll: false },
      );
    }
  };

  const styles = PreferencesStyles;

  return (
    <section className={styles.component}>
      <h2 className={styles.component_title}>{titles('preferences')}</h2>

      <Select value={language} onChange={handleChangeLanguages}>
        <Select.Trigger placeholder={placeholders('chooseLang')} />
        <Select.Content>
          {LANGUAGES_MOCK.map((el) => (
            <Select.Option key={el.id} value={el}>
              {el.value}
            </Select.Option>
          ))}
        </Select.Content>
      </Select>

      <div className={styles.component_row}>
        <div>
          <p className={styles.component_subtitle}>{titles('darkMode')}</p>
          <p className={styles.component_description}>
            {descriptions('darkModeDescription')}
          </p>
        </div>

        <Toggle value={toggle} onChange={handleToggleChange} />
      </div>
    </section>
  );
};
