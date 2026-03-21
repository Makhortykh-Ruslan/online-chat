'use client';

import { useTranslations } from 'next-intl';
import { type ChangeEvent, useMemo, useState } from 'react';

import { Icon, Input, Modal } from '@/src/core/components';
import { debounce } from '@/src/core/utils';

import { SearchedUser } from './components';
import { MOCK_USERS } from './mock-users';
import { UsersModalStyles } from './UsersModal.styles';

type UsersModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const UsersModal = ({ isOpen, onClose }: UsersModalProps) => {
  const titles = useTranslations('titles');
  const placeholders = useTranslations('placeholders');

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const scheduleDebouncedSearch = useMemo(
    () => debounce((value: string) => setDebouncedSearch(value), 300),
    [],
  );

  const filteredUsers = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    if (!q) {
      return [];
    }
    return MOCK_USERS.filter((user) => user.fullName.toLowerCase().includes(q));
  }, [debouncedSearch]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    scheduleDebouncedSearch(value);

    console.log('value', value);
  };

  const styles = UsersModalStyles;

  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="fixed">
      <section className={styles.component} data-component="UsersModal">
        <header className={styles.header}>
          <h2 className={styles.title}>{titles('searchUsers')}</h2>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            <Icon className={styles.close_icon} name="close" />
          </button>
        </header>
        <main className={styles.main}>
          <div className={styles.input}>
            <Input
              id="search-users"
              type="search"
              placeholder={placeholders('searchUsers')}
              leftIcon="search"
              aria-label={titles('searchUsers')}
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          {filteredUsers.length > 0 && (
            <div className={styles.list}>
              {filteredUsers.map((user) => (
                <SearchedUser
                  key={user.id}
                  fullName={user.fullName}
                  email={user.email}
                  avatarUrl={user.avatarUrl}
                  isOnline={user.isOnline}
                />
              ))}
            </div>
          )}
        </main>
      </section>
    </Modal>
  );
};
