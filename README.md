# LinkUp Chat

A real-time chat application built as a personal sandbox project to explore and practice with modern web technologies: **Next.js**, **Supabase**, and **Tailwind CSS**.

## Why this project?

The goal was simple — pick three tools I wanted to get hands-on experience with and build something real with them. An online chat felt like a great fit: it touches auth, real-time data, file storage, and UI all at once.

## Features

- Authentication (sign up / sign in)
- Real-time messaging via Supabase Realtime
- Create direct conversations with other users
- Profile settings (avatar, name, email, password, theme)
- Dark / light mode
- Multilingual UI (English, Ukrainian, Polish)
- Mobile-responsive layout

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Backend & Auth | Supabase (PostgreSQL + Auth + Realtime + Storage) |
| Styling | Tailwind CSS |
| Forms | React Hook Form + Zod |
| i18n | next-intl |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
```

## Deploy

Deployed on [Vercel](https://vercel.com).
