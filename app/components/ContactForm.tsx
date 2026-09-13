'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-input text-sm sm:text-base"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input text-sm sm:text-base"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
          Project Type *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="form-select text-sm sm:text-base"
        >
          <option value="" className="dark:bg-gray-800">Select a project type</option>
          <option value="web-development" className="dark:bg-gray-800">Full-Stack Web Development</option>
          <option value="ai-ml" className="dark:bg-gray-800">AI / ML Integration</option>
          <option value="backend" className="dark:bg-gray-800">Backend & API Architecture</option>
          <option value="consulting" className="dark:bg-gray-800">Consulting & Architecture</option>
          <option value="other" className="dark:bg-gray-800">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="form-textarea text-sm sm:text-base resize-none"
          placeholder="Tell me about your project requirements, timeline, and goals..."
        />
      </div>
      
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3.5 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === 'loading' ? 'Sending Message...' : status === 'success' ? '✓ Message Sent!' : 'Send Message'}
      </button>
      
      {status === 'success' && (
        <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 px-4 py-3 rounded-xl text-sm font-medium">
          Thank you for reaching out! I'll get back to you within 24 hours.
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/50 text-rose-800 dark:text-rose-300 px-4 py-3 rounded-xl text-sm font-medium">
          Something went wrong. Please try again or email me directly at ananya.shah2811@gmail.com
        </div>
      )}
    </form>
  );
}
