'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Awards', href: '/awards' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#080c14]/80 backdrop-blur-xl border-b border-gray-200/70 dark:border-gray-800/70 z-50 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-lg group-hover:shadow-purple-500/30 group-hover:scale-105 transition-all duration-300">
              <span className="text-white font-black text-sm tracking-widest">AS</span>
            </div>
            <span className="text-lg font-extrabold text-gray-900 dark:text-white tracking-tight hidden sm:block whitespace-nowrap group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Ananya Shah
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-xl font-medium text-xs xl:text-sm transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/70 font-semibold border border-blue-200/80 dark:border-blue-800/60 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pl-2 border-l border-gray-200 dark:border-gray-800 ml-1">
              <DarkModeToggle />
            </div>
          </div>
          
          <div className="lg:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#080c14]/95 backdrop-blur-2xl border-t border-b border-gray-200 dark:border-gray-800 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-4 space-y-1.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl font-medium transition-all text-sm ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 font-bold shadow-md'
                        : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/70'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}