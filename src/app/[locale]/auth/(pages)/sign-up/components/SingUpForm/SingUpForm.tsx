'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useActionState, useEffect } from 'react';

import { Button, Input } from '@/src/core/components';
import { appRoutes } from '@/src/core/constants/router-paths';
import type { ErrorModel } from '@/src/core/models';
import { signUpServer } from '@/src/core/services';

const initialState: ErrorModel = {
  error: '',
};

export const SingUpForm = () => {
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

  return (
    <section className="w-full max-w-[448px]">
      <form action={formAction}>
        <Input
          className="mb-[16px] w-full"
          name="username"
          leftIcon="user"
          id="username"
          label={labels('fullName')}
          placeholder={placeholders('yourName')}
        />

        <Input
          className="mb-[16px] w-full"
          name="email"
          leftIcon="email"
          id="userNameOrEmail"
          label={labels('email')}
          placeholder={placeholders('email')}
        />

        <Input
          className="mb-[16px] w-full"
          name="password"
          id="Password"
          type="password"
          leftIcon="lock"
          rightIcon="eye-open"
          label={labels('password')}
          placeholder={placeholders('password')}
        />

        <Input
          className="mb-[16px] w-full"
          name="password"
          id="Password"
          type="password"
          leftIcon="lock"
          rightIcon="eye-open"
          label={labels('confirmPassword')}
          placeholder={placeholders('confirmPassword')}
        />

        <Button
          className="mt-[32px] w-full"
          disabled={isPending}
          color="blue"
          text={isPending ? button('pending') : button('signUp')}
          type="submit"
        />
      </form>

      <div className="text-14 mt-[20px] flex justify-center gap-[4px] text-gray-700">
        {descriptions('haveAccount')}
        <Link
          className="text-14 font-medium text-indigo-600"
          href={appRoutes.auth.signIn}
        >
          {descriptions('signIn')}
        </Link>
      </div>
    </section>
  );
};
