'use client';

import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Full Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300" 
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300" 
          />
        </div>
      </div>
      
      {/* <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Project Type</label>
        <select 
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
        >
          <option value="">Select project type</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile App</option>
          <option value="backend">Backend API</option>
          <option value="design">UI/UX Design</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Project Budget</label>
        <select 
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
        >
          <option value="">Select budget range</option>
          <option value="1k-5k">$1,000 - $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k+">$25,000+</option>
        </select>
      </div> */}
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Message</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6} 
          placeholder="Tell me about your message..."
          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
        />
      </div>
      
      {status === 'success' && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-4 py-3 rounded-lg">
          Failed to send message. Please try again or email me directly.
        </div>
      )}
      
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {status === 'loading' && <LoadingSpinner />}
          {status === 'loading' ? 'Sending...' : 'Send Project Details'}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {status !== 'loading' && (
          <span className="absolute right-6 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        )}
      </button>
    </form>
  );
}