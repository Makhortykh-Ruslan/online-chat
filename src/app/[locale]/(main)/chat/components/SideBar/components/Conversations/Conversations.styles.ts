import clsx from 'clsx';

export const ConversationsStyles = (isEmptyConversations: boolean) => ({
  component_input: 'px-[16px]',
  component_tabs: 'border-y border-main-border py-[8px] px-[12px] mt-[16px]',
  component_main: clsx(
    'h-[78vh] overflow-y-auto',
    isEmptyConversations && 'flex items-center justify-center',
  ),
  component_empty_text: 'text-main-description text-12',
});
