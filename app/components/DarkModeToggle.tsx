'use client';

import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';

  return (
    <button 
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700/80 transition-all duration-300 border border-gray-200 dark:border-gray-700/60 shadow-sm flex items-center justify-center hover:scale-105 active:scale-95 cursor-pointer"
    >
      {mounted ? (
        <span className="text-lg transition-transform duration-300 transform inline-block">
          {isDark ? '☀️' : '🌙'}
        </span>
      ) : (
        <span className="w-5 h-5 block" />
      )}
    </button>
  );
}