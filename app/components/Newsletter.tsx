'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Stay Updated</h3>
        <p className="text-blue-100 dark:text-blue-200 mb-8 text-base sm:text-lg opacity-95">
          Subscribe to get notified about new technical blog posts, project releases, and tech insights.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none text-sm sm:text-base font-medium shadow-inner"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-gray-900 hover:bg-gray-800 text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg disabled:opacity-50 cursor-pointer whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? '✓ Subscribed!' : 'Subscribe'}
          </button>
        </form>
        
        {status === 'success' && (
          <p className="mt-4 text-emerald-300 font-semibold text-sm">
            🎉 Thanks for subscribing! You're all set.
          </p>
        )}
        
        <p className="mt-4 text-xs text-blue-100/80">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
