'use client';

import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button 
      onClick={toggle}
      className="p-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-lg hover:scale-110"
    >
      <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
}