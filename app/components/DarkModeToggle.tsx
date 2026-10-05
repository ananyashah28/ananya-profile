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
        isDark ? (
          <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )
      ) : (
        <span className="w-5 h-5 block" />
      )}
    </button>
  );
}