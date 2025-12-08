'use client';

import { useState } from 'react';

interface BlogSearchProps {
  posts: any[];
  onFilter: (filtered: any[]) => void;
}

export default function BlogSearch({ posts, onFilter }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Next.js', 'React', 'Backend', 'TypeScript', 'CSS', 'Deployment', 'AI & Development'];

  const handleSearch = (term: string, category: string) => {
    let filtered = posts;

    if (term) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(term.toLowerCase()) ||
        post.category.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (category !== 'All') {
      filtered = filtered.filter(post => post.category === category);
    }

    onFilter(filtered);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    handleSearch(term, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleSearch(searchTerm, category);
  };

  return (
    <div className="mb-12 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full px-6 py-4 pl-12 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}