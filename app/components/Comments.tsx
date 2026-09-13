'use client';

import { useEffect, useRef } from 'react';

interface CommentsProps {
  repo?: string;
  repoId?: string;
  category?: string;
  categoryId?: string;
}

export default function Comments({ 
  repo = 'ananyashah28/ananya-portfolio',
  repoId = 'R_kgDONd8Yzg',
  category = 'General',
  categoryId = 'DIC_kwDONd8Yzs4Clh8Q'
}: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    commentsRef.current?.appendChild(script);
  }, []);

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Comments</h3>
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
        <div ref={commentsRef} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Comments powered by <a href="https://giscus.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Giscus</a>
        </p>
      </div>
    </div>
  );
}
