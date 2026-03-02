'use client';

import { useState, useEffect } from 'react';

export function EmailLink() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Basic obfuscation to prevent simple bot scraping
    const user = ['d', 'e', 'm', 'o', 's'].join('');
    const domain = ['m', 'i', 'n', 'd', 's', 'e', 'n', 'd', '.', 's', 'p', 'a', 'c', 'e'].join('');
    setEmail(`${user}@${domain}`);
  }, []);

  if (!email) {
    return (
      <div className="h-4 w-40 bg-zinc-900 animate-pulse mx-auto mb-8 rounded" />
    );
  }

  return (
    <a 
      href={`mailto:${email}`} 
      className="text-zinc-300 hover:text-emerald-500 transition-colors text-xs font-bold uppercase tracking-widest mb-8 block"
    >
      {email}
    </a>
  );
}
