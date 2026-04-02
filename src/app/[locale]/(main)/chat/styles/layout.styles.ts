export const getLayoutStyles = () => ({
  page: 'flex w-full h-screen overflow-hidden',
  page_conversation:
    'w-[320px] h-full flex flex-col border-r border-main-border bg-gray-0 dark:bg-brand-925',
  page_children: 'flex-1 h-full overflow-hidden',
});

export const getChatLayoutStyles = (conversationOpen: boolean) => ({
  page: 'flex w-full h-screen overflow-hidden',
  sidebar: conversationOpen
    ? 'hidden md:flex md:flex-col md:w-[320px] md:h-full border-r border-main-border bg-gray-0 dark:bg-brand-925'
    : 'flex flex-col w-full h-full border-r border-main-border bg-gray-0 dark:bg-brand-925 md:w-[320px]',
  children: conversationOpen
    ? 'flex flex-col flex-1 h-full overflow-hidden'
    : 'hidden md:flex md:flex-col md:flex-1 md:h-full md:overflow-hidden',
});
