type AppRoutesShape = {
  auth: {
    root: string;
    signIn: string;
    signUp: string;
  };
  main: {
    chat: string;
    settings: string;
  };
};

export const appRoutes = {
  auth: {
    root: '/auth',
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
  },
  main: {
    chat: '/chat',
    settings: '/settings',
  },
} as const satisfies AppRoutesShape;
