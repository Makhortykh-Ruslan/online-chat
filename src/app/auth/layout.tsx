import React from 'react';

import { Icon } from '@/src/core/components/Icon/Icon';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex gap-2">
      <article>
        <Icon name="message" className="text-blue-500" size={20} />
      </article>
      {children}
    </section>
  );
}
