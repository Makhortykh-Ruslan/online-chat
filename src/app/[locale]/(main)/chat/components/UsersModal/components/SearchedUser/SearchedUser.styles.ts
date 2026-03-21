export const searchedUserStyles = {
  button: `flex w-full cursor-pointer items-center gap-3 rounded-lg border border-transparent px-3 py-3
    text-left transition-colors duration-200 ease-in-out
    hover:bg-indigo-50 dark:hover:bg-purple-900/40
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
    dark:focus-visible:ring-offset-gray-900`,
  avatarWrap: 'shrink-0',
  body: 'min-w-0 flex-1',
  nameRow: 'flex items-center gap-2 min-w-0',
  name: 'truncate text-main-title text-16 font-medium',
  statusDot: 'h-2 w-2 shrink-0 rounded-full',
  statusOnline: 'bg-emerald-500',
  statusOffline: 'bg-gray-400 dark:bg-gray-500',
  email: 'mt-0.5 truncate text-main-description text-14',
  plus: 'flex shrink-0 items-center justify-center text-indigo-600 dark:text-indigo-400 pointer-events-none',
  plusIcon: 'h-6 w-6',
};
