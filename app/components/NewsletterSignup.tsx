'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-950 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Stay Updated</h3>
        <p className="text-base sm:text-lg mb-8 opacity-95 text-blue-100">
          Get the latest articles and software insights delivered straight to your inbox
        </p>
        
        {status === 'success' ? (
          <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-100 px-6 py-4 rounded-xl max-w-md mx-auto font-semibold text-sm">
            ✅ Successfully subscribed! Thank you.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              required
              className="flex-1 px-5 py-3.5 rounded-xl bg-white text-gray-900 placeholder-gray-500 font-medium text-sm sm:text-base focus:outline-none shadow-inner"
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="bg-gray-900 hover:bg-gray-800 text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-colors shadow-lg disabled:opacity-50 cursor-pointer whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
        
        {status === 'error' && (
          <div className="bg-rose-500/20 border border-rose-400 text-rose-100 px-6 py-3 rounded-xl max-w-md mx-auto mt-4 text-xs font-semibold">
            ❌ Failed to subscribe. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}