import type { ConversationDTO } from '@/src/core/dto/conversation.dto';

export const MOCK_CONVERSATIONS: ConversationDTO[] = [
  {
    conversationId: '1',
    title: 'Олександр Петренко',
    avatarUrl: 'https://i.pravatar.cc/150?u=1',
    lastMessage: {
      content: 'Привіт! Як справи? Домовилися про зустріч?',
      createdAt: '2026-02-08T10:00:00Z',
    } as any,
  },
  {
    conversationId: '2',
    title: 'Команда розробки LinkUp',
    avatarUrl: null,
    lastMessage: {
      content: 'Олексій: Я замерджив ПР з табами 🚀',
      createdAt: '2026-02-08T09:45:00Z',
    } as any,
  },
  {
    conversationId: '3',
    title: 'Марія Ковальчук',
    avatarUrl: 'https://i.pravatar.cc/150?u=3',
    lastMessage: {
      content: 'Дякую за допомогу!',
      createdAt: '2026-02-08T09:30:00Z',
    } as any,
  },
  {
    conversationId: '4',
    title: 'Дизайн Ревʼю',
    avatarUrl: 'https://i.pravatar.cc/150?u=4',
    lastMessage: {
      content: 'Надіслав нові мокапи в Figma',
      createdAt: '2026-02-08T08:20:00Z',
    } as any,
  },
  {
    conversationId: '5',
    title: 'Дмитро (Back-end)',
    avatarUrl: 'https://i.pravatar.cc/150?u=5',
    lastMessage: {
      content: 'Ендпоінт для пагінації готовий',
      createdAt: '2026-02-07T21:15:00Z',
    } as any,
  },
  {
    conversationId: '6',
    title: 'HR Менеджер',
    avatarUrl: 'https://i.pravatar.cc/150?u=6',
    lastMessage: {
      content: 'Чи зручно завтра зідзвонитися?',
      createdAt: '2026-02-07T18:00:00Z',
    } as any,
  },
  {
    conversationId: '7',
    title: 'Frontend Community',
    avatarUrl: null,
    lastMessage: {
      content: 'Хто вже пробував Tailwind v4?',
      createdAt: '2026-02-07T15:40:00Z',
    } as any,
  },
  {
    conversationId: '8',
    title: 'Андрій (DevOps)',
    avatarUrl: 'https://i.pravatar.cc/150?u=8',
    lastMessage: {
      content: 'Стейджинг оновився',
      createdAt: '2026-02-07T12:00:00Z',
    } as any,
  },
  {
    conversationId: '9',
    title: 'Юлія Сидоренко',
    avatarUrl: 'https://i.pravatar.cc/150?u=9',
    lastMessage: {
      content: 'З днем народження! 🎉',
      createdAt: '2026-02-06T10:00:00Z',
    } as any,
  },
  {
    conversationId: '10',
    title: 'Support Bot',
    avatarUrl: 'https://i.pravatar.cc/150?u=10',
    lastMessage: {
      content: 'Ваш тікет #1234 закритий',
      createdAt: '2026-02-06T09:00:00Z',
    } as any,
  },
  {
    conversationId: '11',
    title: 'Криптовалютний чат',
    avatarUrl: 'https://i.pravatar.cc/150?u=11',
    lastMessage: {
      content: 'BTC to the moon! 🚀',
      createdAt: '2026-02-05T23:50:00Z',
    } as any,
  },
  {
    conversationId: '12',
    title: 'Іван Бойко',
    avatarUrl: 'https://i.pravatar.cc/150?u=12',
    lastMessage: {
      content: 'Я надіслав договір на пошту',
      createdAt: '2026-02-05T16:20:00Z',
    } as any,
  },
  {
    conversationId: '13',
    title: 'Сімʼя ❤️',
    avatarUrl: null,
    lastMessage: {
      content: 'Мама: Коли будеш вдома?',
      createdAt: '2026-02-05T12:00:00Z',
    } as any,
  },
  {
    conversationId: '14',
    title: 'Олена (QA)',
    avatarUrl: 'https://i.pravatar.cc/150?u=14',
    lastMessage: {
      content: 'Знайшла баг у табах на мобайлі',
      createdAt: '2026-02-04T19:10:00Z',
    } as any,
  },
  {
    conversationId: '15',
    title: 'Новий користувач',
    avatarUrl: 'https://i.pravatar.cc/150?u=15',
    lastMessage: null, // Перевірка відображення порожнього повідомлення
  },
];
