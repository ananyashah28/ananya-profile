'use client';

import { useState, useEffect } from 'react';
import SocialShare from '@/app/components/SocialShare';
import ViewCounter from '@/app/components/ViewCounter';
import Comments from '@/app/components/Comments';

export default function PWABlog() {
  const [activeSection, setActiveSection] = useState('intro');
  const [readingProgress, setReadingProgress] = useState(0);

  const sections = [
    { id: 'intro', title: 'Introduction', icon: '🚀' },
    { id: 'strategy', title: 'Strategic Impact', icon: '💡' },
    { id: 'architecture', title: 'System Architecture', icon: '🏗️' },
    { id: 'challenges', title: 'Engineering Challenges', icon: '⚡' },
    { id: 'security', title: 'Security & Performance', icon: '🔒' },
    { id: 'impact', title: 'Summary of Impact', icon: '📊' },
    { id: 'conclusion', title: 'Final Thoughts', icon: '🎯' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));

      // Update active section based on scroll position
      const sectionElements = sections.map(section => document.getElementById(section.id));
      const currentSection = sectionElements.find(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
      >
        ↑
      </button>

      {/* Blog Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Technical Deep Dive • 15 min read • System Design
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Engineering a White-Label PWA Engine
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
            A deep dive into scalable, multi-tenant SaaS architecture that transforms single applications into thousands of branded experiences
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <span className="text-xl font-bold">AS</span>
              </div>
              <div>
                <div className="font-semibold text-lg">Ananya Shah</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm opacity-75">
              <span>📅 January 4, 2026</span>
              <span>•</span>
              <ViewCounter slug="PWAblog" />
            </div>
          </div>
          <div className="mt-6">
            <SocialShare title="Engineering a White-Label PWA Engine" url="https://ananyashah.dev/blogs/PWAblog" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Enhanced Table of Contents */}
          <aside className="lg:w-1/4">
            <div className="sticky top-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="text-lg mr-2">📋</span>
                  Table of Contents
                </h3>
                <nav className="space-y-3">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`group w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 flex items-center space-x-3 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <span className="text-lg">{section.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium">{section.title}</div>
                        <div className="text-xs opacity-75">Part {index + 1}</div>
                      </div>
                      {activeSection === section.id && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </nav>
                
                {/* Reading Progress */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Reading Progress</span>
                    <span>{Math.round(readingProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${readingProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Enhanced Main Content */}
          <main className="lg:w-3/4">
            <article className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              <div className="p-8 md:p-12">
                {/* Introduction */}
                <section id="intro" className="mb-20">
                  <div className="mb-10">
                    <img 
                      src="/images/PWAblog/pwa.png" 
                      alt="PWA Engine Architecture" 
                      className="w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                    />
                  </div>
                  
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-bold mb-6 flex items-center">
                      <span className="mr-3">🎯</span>
                      <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">The Architecture Challenge</span>
                    </h2>
                    <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                      In the modern product landscape, users expect fast load times, offline access, and a native-like experience—without the friction of an app store. Progressive Web Apps (PWAs) are the standard solution, but traditional PWA architecture fails when serving thousands of independent business tenants from a single codebase.
                    </p>
                    <div className="bg-blue-100 dark:bg-blue-900/50 rounded-2xl p-6 border-l-4 border-blue-500">
                      <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        <strong>By implementing a White-Label PWA Engine</strong>, a single web application can be dynamically transformed into thousands of uniquely branded, installable mobile experiences. This approach handles identity resolution, branding, and security isolation at scale.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Strategic Impact */}
                <section id="strategy" className="mb-20">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-bold mb-8 flex items-center">
                      <span className="mr-3">❓</span>
                      <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Part 1: Strategic Impact — Why PWAs?</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-gradient-to-br dark:from-blue-900/40 dark:to-blue-800/40 rounded-2xl p-8 border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl mr-3">🚀</span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Bypassing Native App Friction</h3>
                        </div>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">Native apps are often the default choice, but for multi-tenant SaaS, they introduce massive operational hurdles. <strong>By moving to a PWA model, a platform achieves:</strong></p>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong>Elimination of Platform Tax:</strong>
                              <span className="text-gray-600 dark:text-gray-300"> Bypassing the 30% App Store commission and unpredictable approval cycles.</span>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong>Instant Global Updates:</strong>
                              <span className="text-gray-600 dark:text-gray-300"> A single deployment updates the experience for all tenants immediately.</span>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong>Frictionless Onboarding:</strong>
                              <span className="text-gray-600 dark:text-gray-300"> Removing the "Store → Download → Authenticate" hurdle reduces onboarding drop-offs by </span>
                              <strong className="text-green-600 dark:text-green-400">20–25%</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:bg-gradient-to-br dark:from-yellow-900/40 dark:to-orange-900/40 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-700 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl mr-3">🔄</span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">The Shift from "Static" to "Dynamic"</h3>
                        </div>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">A traditional PWA relies on a static manifest file. In a white-label environment, this creates a bottleneck. If Tenant A needs a different app name than Tenant B, a static manifest would require separate builds.</p>
                        <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                          <p className="font-medium text-sm text-gray-900 dark:text-gray-100">By shifting PWA configuration from the build layer to the request layer, the system becomes infinitely scalable.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* System Architecture */}
                <section id="architecture" className="mb-20">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-bold mb-8 flex items-center">
                      <span className="mr-3">🏛️</span>
                      <span className="text-gray-900 dark:text-white font-bold">Part 2: System Architecture Overview</span>
                    </h2>
                    
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl p-8 border-l-4 border-indigo-500 mb-8">
                      <p className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
                        The core principle of this engine is <strong>Identity Resolution at the Edge</strong>. Every incoming request must identify the tenant context before the application logic executes.
                      </p>
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Multi-Tenant Entry Patterns</h3>
                    <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">The architecture supports three primary access patterns:</p>
                    
                    <div className="grid md:grid-cols-3 gap-6 my-8">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl mr-3">🌐</span>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">Shared Subdomains</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Identifying the tenant via the unique subdomain prefix.</p>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl mr-3">🔗</span>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">Custom Domains</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Mapping independent domains directly to tenant profiles.</p>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl mr-3">🧪</span>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">Staging Environments</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Ensuring consistent behavior across development pipelines.</p>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Edge Middleware + Context Injection</h3>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">By implementing Edge Middleware, requests are intercepted at the network perimeter.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
                        <h4 className="font-bold mb-3 flex items-center text-gray-900 dark:text-gray-100">
                          <span className="text-lg mr-2">⚙️</span>
                          The Process
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">The middleware inspects the hostname, resolves the tenant identity from a high-speed cache or database, and injects contextual headers into the request.</p>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-6">
                        <h4 className="font-bold mb-3 flex items-center text-gray-900 dark:text-gray-100">
                          <span className="text-lg mr-2">✅</span>
                          The Result
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">The entire stack—API routes, database queries, and PWA manifests—becomes tenant-aware by default without manual configuration for each user.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Engineering Challenges */}
                <section id="challenges" className="mb-20">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      🛠️ Part 3: Solving PWA Engineering Challenges
                    </h2>
                    
                    <div className="space-y-10">
                      {/* Challenge 1 */}
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:bg-gradient-to-r dark:from-red-900/40 dark:to-pink-900/40 rounded-2xl p-8 border-l-4 border-red-500">
                        <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                          <span className="text-2xl mr-3">📱</span>
                          1. Standardizing iOS "Standalone" Behavior
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">The Challenge:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">iOS Safari is restrictive, often ignoring manifest theme colors and omitting system navigation controls in standalone mode.</p>
                          </div>
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">The Solution:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">By building a platform-detection layer, the application can programmatically identify if it is running in "Standalone" (installed) mode or within a standard browser.</p>
                          </div>
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">The Result:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">When the app detects it is installed, the layout dynamically injects a custom, branded navigation bar optimized for touch-first interactions. This ensures users never feel "trapped" and provides a premium native-like feel.</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Challenge 2 */}
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:bg-gradient-to-r dark:from-yellow-900/40 dark:to-orange-900/40 rounded-2xl p-8 border-l-4 border-yellow-500">
                        <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                          <span className="text-2xl mr-3">👻</span>
                          2. Eliminating Manifest Caching ("Ghost Branding")
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">The Challenge:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Browsers aggressively cache the PWA manifest, meaning logo or name updates may not appear for weeks even after a tenant changes their branding.</p>
                          </div>
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">The Solution:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">By dynamically versioning the manifest URL in the document metadata.</p>
                          </div>
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">The Result:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">By appending a versioning hash to the manifest link, a "cache-busting" effect is created. This ensures the browser fetches the absolute latest branding the moment a user initiates an installation.</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Challenge 3 */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gradient-to-r dark:from-blue-900/40 dark:to-indigo-900/40 rounded-2xl p-8 border-l-4 border-blue-500">
                        <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                          <span className="text-2xl mr-3">🎨</span>
                          3. Automating Branding via Image Pipelines
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">The Challenge:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Manually designing dozens of icon sizes for thousands of tenants is impossible.</p>
                          </div>
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">The Solution:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">By implementing an automated pipeline using image processing libraries:</p>
                            <ul className="text-xs mt-2 space-y-1">
                              <li>• <strong>Logo Processing:</strong> Uploaded logos are automatically converted into all required PWA icon dimensions.</li>
                              <li>• <strong>Dynamic Fallbacks:</strong> If no logo exists, high-fidelity icons are generated using tenant initials and brand colors via SVG-to-PNG templates.</li>
                            </ul>
                          </div>
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">The Result:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Fully automated branding pipeline that scales to thousands of tenants without manual intervention.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Security & Performance */}
                <section id="security" className="mb-20">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      🔐 Part 4: Security, Isolation & Performance
                    </h2>
                    
                    <div className="space-y-8">
                      {/* Security Section */}
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:bg-gradient-to-r dark:from-red-900/40 dark:to-orange-900/40 rounded-2xl p-8 border border-red-200 dark:border-red-700">
                        <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                          <span className="text-2xl mr-3">🛡️</span>
                          Preventing Cross-Tenant Data Leakage
                        </h3>
                        <p className="mb-6 text-gray-700 dark:text-gray-300">In a shared browser environment, the Service Worker must act as a gatekeeper. By implementing these safeguards, data integrity is maintained:</p>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <div className="flex items-center mb-3">
                              <span className="text-lg mr-2">🔑</span>
                              <h4 className="font-semibold text-gray-900 dark:text-white">Tenant-Scoped Cache Keys</h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Every cached asset is prefixed with a unique ID to prevent cross-tenant data bleed.</p>
                          </div>
                          
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <div className="flex items-center mb-3">
                              <span className="text-lg mr-2">🌐</span>
                              <h4 className="font-semibold text-gray-900 dark:text-white">Explicit Network-Only Routes</h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Sensitive authentication and identity endpoints are strictly excluded from the service worker cache.</p>
                          </div>
                          
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                            <div className="flex items-center mb-3">
                              <span className="text-lg mr-2">🔄</span>
                              <h4 className="font-semibold text-gray-900 dark:text-white">Lifecycle Cleanup</h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Using service worker lifecycle events to purge stale tenant data ensures safe usage on shared devices.</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Performance Section */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:bg-gradient-to-r dark:from-green-900/40 dark:to-emerald-900/40 rounded-2xl p-8 border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                          <span className="text-2xl mr-3">⚡</span>
                          Achieving Sub-200ms Perceived Loads
                        </h3>
                        <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6">
                          <p className="text-lg text-gray-700 dark:text-gray-300">By implementing <strong>Predictive Prefetching</strong> inside the Service Worker, the app anticipates user movement. While a user is on the Login page, the system silently background-loads the core assets for that specific tenant context, making transitions feel instantaneous.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Impact */}
                <section id="impact" className="mb-20">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      📊 Summary of Impact
                    </h2>
                    
                    <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:bg-gradient-to-r dark:from-green-900/40 dark:via-emerald-900/40 dark:to-teal-900/40 rounded-3xl p-8 border border-green-200 dark:border-green-700">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                              <th className="py-4 px-6 font-bold text-gray-900 dark:text-white">Metric</th>
                              <th className="py-4 px-6 font-bold text-gray-900 dark:text-white">Traditional Static PWA</th>
                              <th className="py-4 px-6 font-bold text-gray-900 dark:text-white">Dynamic White-Label Engine</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm">
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <td className="py-4 px-6 font-semibold">Onboarding</td>
                              <td className="py-4 px-6 text-red-600 dark:text-red-400">High Friction</td>
                              <td className="py-4 px-6 text-green-600 dark:text-green-400 font-semibold">Instant</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <td className="py-4 px-6 font-semibold">Update Velocity</td>
                              <td className="py-4 px-6 text-red-600 dark:text-red-400">Delayed by App Stores</td>
                              <td className="py-4 px-6 text-green-600 dark:text-green-400 font-semibold">Immediate</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <td className="py-4 px-6 font-semibold">User Retention</td>
                              <td className="py-4 px-6 text-gray-600 dark:text-gray-400">Baseline</td>
                              <td className="py-4 px-6 text-green-600 dark:text-green-400 font-semibold">+30% increase</td>
                            </tr>
                            <tr>
                              <td className="py-4 px-6 font-semibold">Maintenance</td>
                              <td className="py-4 px-6 text-red-600 dark:text-red-400">High (Per Tenant)</td>
                              <td className="py-4 px-6 text-green-600 dark:text-green-400 font-semibold">Low (Single Codebase)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-16">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      💡 Final Thoughts
                    </h2>
                    
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:bg-gradient-to-r dark:from-indigo-900/40 dark:to-purple-900/40 rounded-2xl p-8 border-l-4 border-indigo-500">
                      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        PWAs are no longer just "lighter alternatives" to native apps. By architecting at the request level, they become first-class application platforms that scale to thousands of tenants with zero additional deployment overhead. This approach proves that the open web can provide the same premium, branded experience as any proprietary app store.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </article>
            
            <div className="mt-12">
              <Comments />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}