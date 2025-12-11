import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      Side Bar
      <div>{children}</div>
    </main>
  );
}
