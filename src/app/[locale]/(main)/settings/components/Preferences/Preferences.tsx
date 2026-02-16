'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useState } from 'react';

import { Toggle } from '@/src/core/components';
import type { ProfileDTO } from '@/src/core/dto';

import { PreferencesStyles } from './Preferences.styles';

export const Preferences = (profileData: ProfileDTO) => {
  const titles = useTranslations('titles');
  const descriptions = useTranslations('descriptions');

  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useTheme();

  const handleToggleChange = (value: boolean) => {
    setToggle(value);

    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const styles = PreferencesStyles;

  return (
    <section className={styles.component}>
      <h2 className={styles.component_title}>{titles('preferences')}</h2>

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
