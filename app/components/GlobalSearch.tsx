'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const searchResults = [
    { title: 'Home', url: '/', type: 'Page' },
    { title: 'About Me', url: '/about', type: 'Page' },
    { title: 'Projects Portfolio', url: '/projects', type: 'Page' },
    { title: 'Experience & Journey', url: '/experience', type: 'Page' },
    { title: 'Awards & Recognition', url: '/awards', type: 'Page' },
    { title: 'Certifications', url: '/certifications', type: 'Page' },
    { title: 'Services', url: '/services', type: 'Page' },
    { title: 'Tech Blog', url: '/blogs', type: 'Page' },
    { title: 'Contact', url: '/contact', type: 'Page' },
    { title: 'Engineering a White-Label PWA Engine', url: '/blogs/PWAblog', type: 'Blog' }
  ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center pt-20 p-4" onClick={() => setIsOpen(false)}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-200 dark:border-gray-700" onClick={e => e.stopPropagation()}>
        <div className="relative border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
          <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Type to search pages or articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-4 text-base sm:text-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
            autoFocus
          />
          <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600">
            ESC
          </kbd>
        </div>
        <div className="max-h-96 overflow-y-auto p-2">
          {searchResults.map((result, i) => (
            <button
              key={i}
              onClick={() => { router.push(result.url); setIsOpen(false); }}
              className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-700/70 rounded-xl flex items-center justify-between transition-colors group cursor-pointer"
            >
              <span className="text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium text-sm sm:text-base">
                {result.title}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-semibold">
                {result.type}
              </span>
            </button>
          ))}
          {searchResults.length === 0 && query && (
            <div className="px-4 py-10 text-center text-gray-500 dark:text-gray-400 text-sm">No matching pages or articles found</div>
          )}
        </div>
      </div>
    </div>
  );
}
