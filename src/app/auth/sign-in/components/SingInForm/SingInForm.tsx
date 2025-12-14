'use client';

import Link from 'next/link';
import { useActionState, useEffect } from 'react';

import { appRoutes } from '@/src/core/enums/router-paths';
import type { ErrorModel } from '@/src/core/models/error.model';
import { loginServer } from '@/src/core/server';

const initialState: ErrorModel = {
  error: '',
};

export const SingInForm = () => {
  const [state, formAction] = useActionState(loginServer, initialState);

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

        <button role="button">Log in</button>
      </form>
      <p>
        Don’t have an account? <Link href={appRoutes.auth.signUp}>Sign up</Link>
      </p>
    </section>
  );
};
