'use client';

import Link from 'next/link';
import { useActionState, useEffect } from 'react';

import { Button } from '@/src/core/components/Button/Button';
import { appRoutes } from '@/src/core/constants/router-paths';
import type { ErrorModel } from '@/src/core/models';
import { signInServer } from '@/src/core/services';

const initialState: ErrorModel = {
  error: '',
};

export const SingInForm = () => {
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
    <section>
      <form action={formAction}>
        <div>
          <label htmlFor="userNameOrEmail">User name or Email</label>
          <input
            id="userNameOrEmail"
            type="text"
            name="email"
            placeholder="Enter your user name or email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <Button
          disabled={isPending}
          color="blue"
          text={isPending ? 'Pending...' : 'Log in'}
        />
      </form>
      <p>
        Don’t have an account? <Link href={appRoutes.auth.signUp}>Sign up</Link>
      </p>
    </section>
  );
};
