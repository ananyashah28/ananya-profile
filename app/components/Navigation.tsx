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
    { name: 'Certifications', href: '/certifications' },
    // { name: 'Services', href: '/services' },
    // { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-black text-lg">AS</span>
            </div>
            <span className="text-xl font-black text-gray-900 dark:text-gray-100 tracking-tight hidden sm:block whitespace-nowrap">
              Ananya Shah
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 shadow-lg'
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/60'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <DarkModeToggle />
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="p-3 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800/60 transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center ${
                    pathname === item.href
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                      : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}