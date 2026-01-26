'use client';

import { useTranslations } from 'next-intl';
import { useActionState, useEffect } from 'react';

import { Button, Input } from '@/src/core/components';
import { appRoutes } from '@/src/core/constants/router-paths';
import type { ErrorModel } from '@/src/core/models';
import { signInServer } from '@/src/core/services';
import { Link } from '@/src/i18n/routing';

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

  return (
    <section className="w-full max-w-[448px]">
      <form action={formAction}>
        <Input
          className="mb-[16px] w-full"
          name="email"
          leftIcon="email"
          id="userNameOrEmail"
          label={labels('email')}
          placeholder={placeholders('email')}
        />

        <Input
          className="w-full"
          name="password"
          id="Password"
          type="password"
          leftIcon="lock"
          rightIcon="eye-open"
          label={labels('password')}
          placeholder={placeholders('password')}
        />

        <Button
          className="mt-[32px] w-full"
          disabled={isPending}
          color="blue"
          text={isPending ? button('pending') : button('logIn')}
          type="submit"
        />
      </form>
      <div className="text-14 mt-[20px] flex justify-center gap-[4px] text-gray-700">
        {descriptions('notHaveAccount')}
        <Link
          className="text-14 font-medium text-indigo-600"
          href={appRoutes.auth.signUp}
        >
          {descriptions('signUp')}
        </Link>
      </div>
    </section>
  );
};
