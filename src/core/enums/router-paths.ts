type AppRoutesShape = {
  auth: {
    signIn: string;
    signUp: string;
  };
  main: {
    chat: string;
  };
};

export const appRoutes = {
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
  },
  main: {
    chat: '/chat',
  },
} as const satisfies AppRoutesShape;
