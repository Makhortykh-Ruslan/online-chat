import { getProfile } from '@/src/core/services';

import {
  ChangePassword,
  Preferences,
  Profile,
  Session,
  SettingsHeader,
} from './components';
import { SettingsPageStyles } from './page.styles';

export default async function SettingsPage() {
  const profileData = await getProfile();

  if (!profileData.success || !profileData.data) {
    throw new Error(profileData.message || 'Failed to load profile');
  }

  const styles = SettingsPageStyles;

  return (
    <section data-compoennt="SettingsPage" className={styles.page}>
      <header className={styles.page_header}>
        <div className={styles.page_header_item}>
          <SettingsHeader />
        </div>
      </header>

      <main className={styles.page_main}>
        <Profile {...profileData.data} />
        <ChangePassword />
        <Preferences {...profileData.data} />
        <Session />
      </main>
    </section>
  );
}
