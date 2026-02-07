'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useActionState, useEffect } from 'react';

import { Button, Input, Loader } from '@/src/core/components';
import { appRoutes } from '@/src/core/constants/router-paths';
import type { ErrorModel } from '@/src/core/models';
import { signUpServer } from '@/src/core/services';

import { getAuthFormStyles } from '../../styles';

const initialState: ErrorModel = {
  error: '',
};

export const SignUpForm = () => {
  const labels = useTranslations('labels');
  const button = useTranslations('button');
  const placeholders = useTranslations('placeholders');
  const descriptions = useTranslations('descriptions');

  const [state, formAction, isPending] = useActionState(
    signUpServer,
    initialState,
  );

  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state.error]);

  const styles = getAuthFormStyles();

  return (
    <section className={styles.component}>
      <form action={formAction}>
        <Input
          className={styles.component_input}
          name="username"
          leftIcon="user"
          id="username"
          label={labels('fullName')}
          placeholder={placeholders('yourName')}
        />

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

        <Input
          className={styles.component_input}
          isPasswordFlow
          name="password"
          id="password"
          leftIcon="lock"
          label={labels('confirmPassword')}
          placeholder={placeholders('confirmPassword')}
        />

        <Button
          className={styles.component_button}
          disabled={isPending}
          color="blue"
          type="submit"
        >
          {isPending && <Loader />}
          {isPending ? button('pending') : button('signUp')}
        </Button>
      </form>

      <div className={styles.component_link_container}>
        {descriptions('haveAccount')}
        <Link className={styles.component_link} href={appRoutes.auth.signIn}>
          {descriptions('signIn')}
        </Link>
      </div>
    </section>
  );
};
