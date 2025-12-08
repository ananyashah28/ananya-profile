'use client';

import { useState } from 'react';
import BlogSearch from '../components/BlogSearch';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Blogs() {
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const featuredPost = {
    title: "The Future of Web Development: AI-Powered Applications",
    date: "March 20, 2024",
    excerpt: "Exploring how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences.",
    readTime: "12 min read",
    category: "AI & Development",
    image: "from-purple-600 via-pink-600 to-red-500",
    featured: true
  };

  const posts = [
    {
      title: "Getting Started with Next.js 14",
      date: "March 15, 2024",
      excerpt: "Learn the latest features in Next.js 14 and how to build modern web applications with improved performance and developer experience.",
      readTime: "5 min read",
      category: "Next.js",
      image: "from-blue-500 to-cyan-500",
      views: "2.4k",
      slug: "nextjs-14-guide"
    },
    {
      title: "Building Scalable APIs with Node.js",
      date: "March 10, 2024", 
      excerpt: "Best practices for creating robust and scalable REST APIs using Node.js, Express framework, and modern architectural patterns.",
      readTime: "8 min read",
      category: "Backend",
      image: "from-green-500 to-teal-500",
      views: "1.8k",
      slug: "nodejs-apis"
    },
    {
      title: "React Performance Optimization Tips",
      date: "March 5, 2024",
      excerpt: "Practical techniques to optimize your React applications for better performance, faster loading times, and enhanced user experience.",
      readTime: "6 min read",
      category: "React",
      image: "from-indigo-500 to-purple-500",
      views: "3.1k"
    },
    {
      title: "Mastering TypeScript in 2024",
      date: "February 28, 2024",
      excerpt: "Advanced TypeScript patterns and techniques that will make you a more productive developer in modern web applications.",
      readTime: "10 min read",
      category: "TypeScript",
      image: "from-orange-500 to-red-500",
      views: "2.7k"
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      date: "February 20, 2024",
      excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox, with practical examples and use cases.",
      readTime: "7 min read",
      category: "CSS",
      image: "from-pink-500 to-rose-500",
      views: "1.9k"
    },
    {
      title: "Deploying Full-Stack Apps on Vercel",
      date: "February 15, 2024",
      excerpt: "Step-by-step guide to deploying your full-stack applications on Vercel with database integration and environment configuration.",
      readTime: "9 min read",
      category: "Deployment",
      image: "from-cyan-500 to-blue-500",
      views: "2.2k"
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
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Insights, tutorials, and thoughts on modern web development, emerging technologies, and best practices
            </p>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12 sm:mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden hover:shadow-blue-500/25 transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="mb-3 sm:mb-4">
                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                  ✨ Featured Post
                </span>
              </div>
              <div className="mb-3 sm:mb-4">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 leading-tight text-gray-900 dark:text-white">
                {featuredPost.title}
              </h2>
              <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <a href="/blogs/posts/ai-web-development" className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                Read Full Article
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        {/* <BlogSearch posts={posts} onFilter={setFilteredPosts} /> */}
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {(filteredPosts.length > 0 ? filteredPosts : posts).map((post, index) => (
            <article key={index} className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="mb-2 sm:mb-3">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
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
                
                <a href={`/blogs/posts/${post.slug || '#'}`} className="group/link inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
                  Read Article
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        {/* <NewsletterSignup /> */}
      </div>
    </div>
  );
}