import type { ConversationDTO } from '@/src/core/dto/conversation.dto';

export const MOCK_CONVERSATIONS: ConversationDTO[] = [
  {
    conversationId: '1',
    title: 'Команда розробки LinkUp',
    type: 'groups',
    avatarUrl: null,
    lastMessage: {
      content: 'Олексій: Я замерджив ПР з табами 🚀',
      createdAt: '2026-02-08T09:45:00Z',
    } as any,
  },
  {
    conversationId: '2',
    title: 'Дизайн Ревʼю (Q1)',
    type: 'groups',
    avatarUrl: 'https://i.pravatar.cc/150?u=group1',
    lastMessage: {
      content: 'Марина: Хто подивиться нові іконки?',
      createdAt: '2026-02-08T08:20:00Z',
    } as any,
  },
  {
    conversationId: '3',
    title: 'Frontend Community Ukraine',
    type: 'groups',
    avatarUrl: null,
    lastMessage: {
      content: 'Сергій: Вийшов Next.js 16.0, хто вже пробував?',
      createdAt: '2026-02-07T15:40:00Z',
    } as any,
  },
  {
    conversationId: '4',
    title: 'Криптовалютний чат (Alpha)',
    type: 'groups',
    avatarUrl: 'https://i.pravatar.cc/150?u=group3',
    lastMessage: {
      content: 'BTC to the moon! 🚀🚀🚀',
      createdAt: '2026-02-05T23:50:00Z',
    } as any,
  },
  {
    conversationId: '5',
    title: 'Сімʼя ❤️',
    type: 'groups',
    avatarUrl: null,
    lastMessage: {
      content: 'Мама: Чекаємо тебе на вечерю',
      createdAt: '2026-02-05T12:00:00Z',
    } as any,
  },
  {
    conversationId: '6',
    title: 'Маркетинг 2026 - Офіційний',
    type: 'groups',
    avatarUrl: 'https://i.pravatar.cc/150?u=group4',
    lastMessage: {
      content: 'Надіслано план на наступний тиждень',
      createdAt: '2026-02-04T19:10:00Z',
    } as any,
  },
  {
    conversationId: '7',
    title: 'Вечірка у пʼятницю 🕺',
    type: 'groups',
    avatarUrl: null,
    lastMessage: {
      content: 'Дмитро: Я замовлю піцу на всіх',
      createdAt: '2026-02-03T14:00:00Z',
    } as any,
  },
  {
    conversationId: '8',
    title: 'English Speaking Club',
    type: 'groups',
    avatarUrl: 'https://i.pravatar.cc/150?u=group5',
    lastMessage: {
      content: 'Next meeting is on Tuesday at 7 PM',
      createdAt: '2026-02-01T10:00:00Z',
    } as any,
  },
  // --- DIRECT CHATS ---
  {
    conversationId: '9',
    title: 'Олександр Петренко',
    type: 'direct',
    avatarUrl: 'https://i.pravatar.cc/150?u=1',
    lastMessage: {
      content: 'Привіт! Як справи? Домовилися?',
      createdAt: '2026-02-08T10:00:00Z',
    } as any,
  },
  {
    conversationId: '10',
    title: 'Марія Ковальчук',
    type: 'direct',
    avatarUrl: 'https://i.pravatar.cc/150?u=3',
    lastMessage: {
      content: 'Дякую за допомогу!',
      createdAt: '2026-02-08T09:30:00Z',
    } as any,
  },
  {
    conversationId: '11',
    title: 'Дмитро (Back-end)',
    type: 'direct',
    avatarUrl: 'https://i.pravatar.cc/150?u=5',
    lastMessage: {
      content: 'Ендпоінт для пагінації готовий',
      createdAt: '2026-02-07T21:15:00Z',
    } as any,
  },
  {
    conversationId: '12',
    title: 'HR Менеджер',
    type: 'direct',
    avatarUrl: 'https://i.pravatar.cc/150?u=6',
    lastMessage: {
      content: 'Чи зручно завтра зідзвонитися?',
      createdAt: '2026-02-07T18:00:00Z',
    } as any,
  },
  {
    conversationId: '13',
    title: 'Юлія Сидоренко',
    type: 'direct',
    avatarUrl: 'https://i.pravatar.cc/150?u=9',
    lastMessage: {
      content: 'З днем народження! 🎉',
      createdAt: '2026-02-06T10:00:00Z',
    } as any,
  },
  {
    conversationId: '14',
    title: 'Іван Бойко',
    type: 'direct',
    avatarUrl: 'https://i.pravatar.cc/150?u=12',
    lastMessage: {
      content: 'Я надіслав договір на пошту',
      createdAt: '2026-02-05T16:20:00Z',
    } as any,
  },
  {
    conversationId: '15',
    title: 'Новий користувач',
    type: 'direct',
    avatarUrl: 'https://i.pravatar.cc/150?u=15',
    lastMessage: null,
  },
];
