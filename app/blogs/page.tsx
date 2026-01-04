'use client';

import { useState, useEffect } from 'react';
import BlogSearch from '../components/BlogSearch';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Blogs() {
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const posts = [
    {
      title: "Engineering a White-Label PWA Engine",
      date: "January 4, 2026",
      excerpt: "A deep dive into scalable, multi-tenant SaaS architecture that transforms single applications into thousands of branded experiences",
      readTime: "15 min read",
      category: "System Design",
      image: "from-blue-600 to-purple-600",
      slug: "PWAblog"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 mb-4 sm:mb-6">
              Tech Blog
            </h1>
            <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            {/* <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Coming Soon - Insights, tutorials, and thoughts on modern web development
            </p> */}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {(filteredPosts.length > 0 ? filteredPosts : posts).map((post, index) => (
              <article key={index} className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 dark:border-gray-700" style={isDarkMode ? { backgroundColor: '#1f2937', borderColor: '#374151' } : {}}>
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="mb-2 sm:mb-3">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold" style={isDarkMode ? { backgroundColor: '#374151', color: '#d1d5db' } : {}}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <a href={`/blogs/${post.slug}`} className="group/link inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm sm:text-base transition-colors duration-300">
                    Read Article
                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No Blog Posts Yet
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              I'm working on creating valuable content. Check back soon for insights on web development and technology!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}