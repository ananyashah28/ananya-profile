import { Metadata } from 'next';
import ScrollAnimation from '../components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Services - Ananya Shah',
  description: 'Web development, mobile apps, backend solutions, and consulting services offered by Ananya Shah',
  keywords: 'web development, mobile development, backend, consulting, react, nextjs, nodejs'
};

export default function Services() {
  const services = [
    {
      title: "AI/ML & Gen-AI Development",
      description: "Intelligent solutions using machine learning, natural language processing, vector databases, and generative AI models",
      icon: "🤖",
      features: ["Generative AI & LLMs", "Vector Databases", "Predictive Analytics", "Custom ML Models"],
      badge: "AI Powered"
    },
    {
      title: "Full-Stack Web Development",
      description: "End-to-end web applications with modern frameworks, responsive design, and optimal rendering performance",
      icon: "🌐",
      features: ["React & Next.js App Router", "TypeScript Development", "Responsive Design System", "High Performance UI"],
      badge: "Full-Stack"
    },
    {
      title: "Backend & API Engineering",
      description: "Scalable server architecture, RESTful APIs, microservices, and database optimization for high throughput",
      icon: "⚙️",
      features: ["Node.js & Express APIs", "FastAPI Python Services", "MongoDB & PostgreSQL", "Authentication & Security"],
      badge: "Scalable Arch"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950/40 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
              Services & Capabilities
            </h1>
            <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Comprehensive digital solutions to transform your ideas into powerful, production-ready applications
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {services.map((service, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.15}>
              <div className="service-card group relative h-full bg-white dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 card-glow-hover">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-2xl flex items-center justify-center text-3xl border border-blue-500/20 dark:border-blue-400/30">
                      {service.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800/50">
                      {service.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <a href="/contact" className="w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] block">
                  Get Started
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-950 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-5 right-5 sm:top-10 sm:right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">Ready to Build Something Remarkable?</h3>
            <p className="text-base sm:text-lg mb-8 opacity-90 leading-relaxed">
              Let's discuss your software project requirements and create a solution tailored to your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                Start Your Project
              </a>
              <a href="mailto:ananya.shah2811@gmail.com" className="border-2 border-white/80 text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-white/10 transition-colors">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}