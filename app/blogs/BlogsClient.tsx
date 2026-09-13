'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import NewsletterSignup from '../components/NewsletterSignup';
import ScrollAnimation from '../components/ScrollAnimation';

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  category: 'System Design' | 'Next.js' | 'Backend' | 'AI/ML' | 'Cloud/AWS' | 'Data Analytics' | string;
  tags: string[];
  gradient: string;
  icon: string;
  slug: string;
  featured?: boolean;
}

export default function BlogsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'shortest'>('newest');

  // ONLY 1 published blog post (Add future blog posts here!)
  const posts: BlogPost[] = [
    {
      title: "Engineering a White-Label PWA Engine",
      date: "January 4, 2026",
      excerpt: "A deep dive into scalable, multi-tenant SaaS architecture that transforms single applications into thousands of branded experiences with offline capabilities and push notifications.",
      readTime: "15 min read",
      category: "System Design",
      tags: ["PWA", "System Design", "React", "Offline-First", "Multi-Tenancy"],
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      icon: "📱",
      slug: "PWAblog",
      featured: true
    }
  ];

  const categories = ['All', 'System Design', 'AI/ML', 'Next.js', 'Backend', 'Cloud/AWS', 'Data Analytics'];
  const popularTags = ['All', 'PWA', 'System Design', 'React', 'Offline-First', 'AI/ML', 'Next.js', 'Backend'];

  const getCategoryCount = (category: string) => {
    if (category === 'All') return posts.length;
    return posts.filter(p => p.category === category).length;
  };

  const filteredPosts = posts
    .filter(post => {
      const matchesCategory = selectedCategory === 'All' ? true : post.category === selectedCategory;
      const matchesTag = selectedTag === 'All' ? true : post.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase());
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = q === '' || 
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesTag && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (sortBy === 'shortest') {
        return parseInt(a.readTime) - parseInt(b.readTime);
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const featuredPost = posts.find(p => p.featured) || (posts.length > 0 ? posts[0] : null);
  const isFiltering = selectedCategory !== 'All' || selectedTag !== 'All' || searchQuery !== '';

  // Non-featured posts for main grid when not filtering
  const gridPosts = isFiltering 
    ? filteredPosts 
    : posts.filter(p => p.slug !== featuredPost?.slug);

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setSelectedTag('All');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-[#080c14] dark:via-[#0c1322] dark:to-[#080c14] pt-20 pb-20 overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
        {/* Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
              Tech Articles & Insights
            </h1>
            <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed px-4">
              In-depth engineering articles on System Architecture, Artificial Intelligence, Node.js Backends, Cloud (AWS), Data Analytics, and Modern Next.js Applications.
            </p>
          </div>
        </ScrollAnimation>

        {/* Featured Post Card (Hero Banner) */}
        {!isFiltering && featuredPost && (
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mb-12 sm:mb-16 bg-white/90 dark:bg-gray-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-200/80 dark:border-gray-700/60 relative overflow-hidden group card-glow-hover backdrop-blur-md">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-sm">
                      ⭐ Featured Article
                    </span>
                    <span className="bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/60">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    <Link href={`/blogs/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* Featured Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {featuredPost.tags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-700/70 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 dark:text-gray-400 pt-2">
                    <span className="flex items-center gap-1.5">
                      <span>🗓️</span> {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <span>⏱️</span> {featuredPost.readTime}
                    </span>
                  </div>

                  <div className="pt-4">
                    <Link 
                      href={`/blogs/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-7 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Read Featured Story →
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className={`relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gradient-to-br ${featuredPost.gradient} p-8 flex flex-col justify-between text-white shadow-xl border border-white/20 group-hover:scale-[1.02] transition-transform duration-500`}>
                    <div className="text-5xl">{featuredPost.icon}</div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-white/80 mb-1">Architecture & Engineering</div>
                      <div className="text-xl font-bold">{featuredPost.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        )}

        {/* Search, Sort & Filter Bar Section */}
        <div className="mb-10 sm:mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search articles by title, keyword, or tag (#PWA, #React)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 pl-11 rounded-2xl bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700/80 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm font-medium"
              />
              <svg
                className="w-5 h-5 absolute left-4 top-3.5 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 rounded-2xl bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700/80 shadow-md text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md transition-all cursor-pointer"
              >
                <option value="newest">📅 Newest First</option>
                <option value="oldest">⌛ Oldest First</option>
                <option value="shortest">⏱️ Shortest Read</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills with Dynamic Counts */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {categories.map(cat => {
              const count = getCategoryCount(cat);
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4.5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                      : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700/60 shadow-sm'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Popular Tag Quick Filters */}
          <div className="flex flex-wrap justify-center items-center gap-2 max-w-3xl mx-auto pt-1">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mr-1">Filter by Tag:</span>
            {popularTags.map(tag => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-400/50'
                      : 'bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 border border-gray-200 dark:border-gray-700/50'
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
          </div>

          {/* Active Filter Summary Bar */}
          {isFiltering && (
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
              <span className="text-gray-500 dark:text-gray-400 font-semibold">Active Filters:</span>
              {selectedCategory !== 'All' && (
                <span className="bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg border border-blue-300 dark:border-blue-800 font-bold">
                  Category: {selectedCategory}
                </span>
              )}
              {selectedTag !== 'All' && (
                <span className="bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-lg border border-amber-300 dark:border-amber-800 font-bold">
                  Tag: #{selectedTag}
                </span>
              )}
              {searchQuery !== '' && (
                <span className="bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-lg border border-purple-300 dark:border-purple-800 font-bold">
                  Search: "{searchQuery}"
                </span>
              )}
              <button
                onClick={resetAllFilters}
                className="text-red-600 dark:text-red-400 hover:underline font-bold transition-colors cursor-pointer ml-1"
              >
                ✕ Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Blog Posts Grid */}
        {gridPosts.length > 0 && (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {gridPosts.map((post) => (
                <motion.article
                  key={post.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/80 dark:border-gray-700/60 overflow-hidden flex flex-col justify-between p-6 sm:p-7 backdrop-blur-md card-glow-hover hover:-translate-y-1.5"
                >
                  <div>
                    {/* Card Visual Banner Header */}
                    <div className={`relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gradient-to-br ${post.gradient} p-5 flex flex-col justify-between text-white mb-5 shadow-md group-hover:scale-105 transition-transform duration-500`}>
                      <div className="flex justify-between items-start">
                        <span className="text-3xl">{post.icon}</span>
                        <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold border border-white/20">
                          {post.category}
                        </span>
                      </div>
                      <div className="text-xs font-mono opacity-90">{post.readTime}</div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      <span>🗓️ {post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      <Link href={`/blogs/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Card Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.map(t => (
                        <button
                          key={t}
                          onClick={() => setSelectedTag(t)}
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                            selectedTag.toLowerCase() === t.toLowerCase()
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600'
                          } transition-colors cursor-pointer`}
                        >
                          #{t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 dark:border-gray-700/50 flex justify-between items-center">
                    <Link 
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold text-sm transition-colors gap-1 group-hover:translate-x-1 duration-200"
                    >
                      <span>Read Full Article</span>
                      <span>→</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty state when filtering yields no results */}
        {isFiltering && filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800/60 rounded-3xl border border-gray-200 dark:border-gray-700/60 mb-16">
            <div className="text-5xl mb-4">📝</div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">No articles found matching your criteria.</p>
            <button
              onClick={resetAllFilters}
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer"
            >
              Reset search & tag filters
            </button>
          </div>
        )}

        <NewsletterSignup />
      </div>
    </div>
  );
}
