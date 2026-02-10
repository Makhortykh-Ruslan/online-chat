import { signOutServer } from '@/src/core/services';

export const Session = () => {
  return (
    <form action={signOutServer}>
      <button type="submit">Sign out</button>
    </form>
  );
};
