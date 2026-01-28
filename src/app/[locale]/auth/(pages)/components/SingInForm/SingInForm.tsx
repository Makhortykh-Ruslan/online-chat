'use client';

import { useTranslations } from 'next-intl';
import { useActionState, useEffect } from 'react';

import { Button, Input } from '@/src/core/components';
import { appRoutes } from '@/src/core/constants/router-paths';
import type { ErrorModel } from '@/src/core/models';
import { signInServer } from '@/src/core/services';
import { Link } from '@/src/i18n/routing';

import { getAuthFormStyle } from '../../styles';

const initialState: ErrorModel = {
  error: '',
};

export const SingInForm = () => {
  const labels = useTranslations('labels');
  const button = useTranslations('button');
  const placeholders = useTranslations('placeholders');
  const descriptions = useTranslations('descriptions');

  const [state, formAction, isPending] = useActionState(
    signInServer,
    initialState,
  );

  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state.error]);

  const styles = getAuthFormStyle();

  return (
    <section className={styles.component}>
      <form action={formAction}>
        <Input
          className={styles.component_input}
          name="email"
          leftIcon="email"
          id="userNameOrEmail"
          label={labels('email')}
          placeholder={placeholders('email')}
        />

        <Input
          className={styles.component_input}
          isPasswordFlow
          name="password"
          id="password"
          leftIcon="lock"
          label={labels('password')}
          placeholder={placeholders('password')}
        />

        <Button
          className={styles.component_button}
          disabled={isPending}
          color="blue"
          text={isPending ? button('pending') : button('logIn')}
          type="submit"
        />
      </form>
      <div className={styles.component_link_container}>
        {descriptions('notHaveAccount')}
        <Link className={styles.component_link} href={appRoutes.auth.signUp}>
          {descriptions('signUp')}
        </Link>
      </div>
    </section>
  );
};
