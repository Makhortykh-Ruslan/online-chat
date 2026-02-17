'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useState } from 'react';

import { Select, Toggle } from '@/src/core/components';
import { DEFAULT_SELECTED_LANG, LANGUAGES_MOCK } from '@/src/core/constants';
import type { ProfileDTO } from '@/src/core/dto';
import type { TIdName } from '@/src/core/types';
import { usePathname, useRouter } from '@/src/i18n/routing';

import { PreferencesStyles } from './Preferences.styles';

export const Preferences = (profileData: ProfileDTO) => {
  const titles = useTranslations('titles');
  const descriptions = useTranslations('descriptions');

  const router = useRouter();
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();

  const [toggle, setToggle] = useState(true);
  const [language, setLanguage] = useState<TIdName<string, string> | null>(
    DEFAULT_SELECTED_LANG,
  );

  const handleToggleChange = (value: boolean) => {
    setToggle(value);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleChangeLanguages = (value: TIdName<string, string>) => {
    setLanguage(value);

    router.replace({ pathname }, { locale: value.id });
  };

  const styles = PreferencesStyles;

  return (
    <section className={styles.component}>
      <h2 className={styles.component_title}>{titles('preferences')}</h2>

      <Select value={language} onChange={handleChangeLanguages}>
        <Select.Trigger placeholder="Choose language" />
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
