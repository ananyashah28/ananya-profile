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
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="mt-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Get the latest articles and insights delivered straight to your inbox
        </p>
        
        {status === 'success' ? (
          <div className="bg-green-500/20 border border-green-400 text-green-100 px-6 py-4 rounded-xl max-w-md mx-auto">
            ✅ Successfully subscribed! Check your email for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              required
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
        
        {status === 'error' && (
          <div className="bg-red-500/20 border border-red-400 text-red-100 px-6 py-4 rounded-xl max-w-md mx-auto mt-4">
            ❌ Failed to subscribe. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}