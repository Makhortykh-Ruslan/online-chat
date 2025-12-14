'use client';

import Link from 'next/link';
import { useActionState, useEffect } from 'react';

import { appRoutes } from '@/src/core/enums/router-paths';
import type { ErrorModel } from '@/src/core/models/error.model';
import { loginServer } from '@/src/core/server';

const initialState: ErrorModel = {
  error: '',
};

export const SingUpForm = () => {
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
          <label htmlFor="userName">User name</label>
          <input
            id="userName"
            type="text"
            name="userName"
            placeholder="Enter your user name"
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
