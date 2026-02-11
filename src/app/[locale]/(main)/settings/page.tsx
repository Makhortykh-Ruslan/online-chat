import { Preferences, Profile, Session, SettingsHeader } from './components';
import { SettingsPageStyles } from './page.styles';

export default function SettingsPage() {
  const styles = SettingsPageStyles;
  return (
    <section data-compoennt="SettingsPage" className={styles.page}>
      <header className={styles.page_header}>
        <div className={styles.page_header_item}>
          <SettingsHeader />
        </div>
      </header>

      <main className={styles.page_main}>
        <Profile />
        <Preferences />
        <Session />
      </main>
    </section>
  );
}
