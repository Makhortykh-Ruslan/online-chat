'use client';

import { useState } from 'react';

import { Toggle } from '@/src/core/components';

export const Preferences = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggleChange = (value: boolean) => {
    setToggle(value);
  };

  return (
    <div>
      <h2>Preferences</h2>
      <div>
        <div>
          <p>Push Notifications</p>
          <p>Receive notifications for new messages</p>
        </div>

        <Toggle value={toggle} onChange={handleToggleChange} />
      </div>
    </div>
  );
};
