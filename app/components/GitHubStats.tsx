'use client';

import { useState } from 'react';

export default function GitHubStats() {
  const username = 'ananyashah28';
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800/90 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200/80 dark:border-gray-700/60">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <svg className="w-6 h-6 mr-2.5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub Open Source Contributions
      </h3>
      
      {!imgError ? (
        <div className="grid gap-6">
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=react&hide_border=true&bg_color=00000000`}
            alt="GitHub Stats"
            className="w-full rounded-xl min-h-[160px] object-contain"
            onError={() => setImgError(true)}
          />
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=react&hide_border=true&bg_color=00000000`}
            alt="Top Languages"
            className="w-full rounded-xl min-h-[140px] object-contain"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl text-center border border-gray-100 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Repositories</div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl text-center border border-gray-100 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">500+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Commits</div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl text-center border border-gray-100 dark:border-gray-700 col-span-2 sm:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">BE & AI/ML</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Focus Areas</div>
          </div>
        </div>
      )}
      
      <a 
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
      >
        View Full Profile on GitHub (@{username})
      </a>
    </div>
  );
}
