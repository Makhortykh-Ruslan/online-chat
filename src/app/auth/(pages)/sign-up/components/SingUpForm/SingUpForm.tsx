'use client';

import Link from 'next/link';
import { useActionState, useEffect } from 'react';

import { appRoutes } from '@/src/core/constants/router-paths';
import type { ErrorModel } from '@/src/core/models';
import { signUpServer } from '@/src/core/services';

const initialState: ErrorModel = {
  error: '',
};

export const SingUpForm = () => {
  const [state, formAction] = useActionState(signUpServer, initialState);

  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state.error]);

  return (
    <section>
      <form action={formAction}>
        <div>
          <label htmlFor="username">User name</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label htmlFor="display_name">Display name</label>
          <input
            id="display_name"
            type="text"
            name="display_name"
            placeholder="Enter your display name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email"
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

        <button role="button">Create an account</button>
      </form>

      <p>
        Back to
        <Link href={appRoutes.auth.signIn}>sing in</Link>
      </p>
    </section>
  );
};
