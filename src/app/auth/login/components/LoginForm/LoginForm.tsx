'use client';

import { useActionState, useEffect } from 'react';

import type { ErrorModel } from '@/src/core/models/error.model';
import { loginServer } from '@/src/core/server';

const initialState: ErrorModel = {
  error: '',
};

export const LoginForm = () => {
  const [state, formAction] = useActionState(loginServer, initialState);

  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state.error]);

  const handleRedirectToSingUp = () => {
    console.log('redirectToSingUp');
  };

  return (
    <section>
      <form action={formAction}>
        <div>
          <label htmlFor="login">Login</label>
          <input
            id="login"
            type="text"
            name="email"
            placeholder="Enter your login"
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
      <p onClick={handleRedirectToSingUp}>Sing up</p>
    </section>
  );
};
