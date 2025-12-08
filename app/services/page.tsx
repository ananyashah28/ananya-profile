import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Ananya Shah',
  description: 'Web development, mobile apps, backend solutions, and consulting services offered by Ananya Shah',
  keywords: 'web development, mobile development, backend, consulting, react, nextjs, nodejs'
};

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "End-to-end web applications with modern frameworks, responsive design, and optimal performance",
      icon: "🌐",
      features: ["React/Next.js", "Node.js APIs", "Database Design", "Responsive UI"],
      price: "Starting at $2,500",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with native performance and seamless user experience",
      icon: "📱",
      features: ["React Native", "iOS & Android", "Push Notifications", "App Store Deploy"],
      price: "Starting at $3,500",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend & API Development",
      description: "Scalable server architecture, RESTful APIs, and database optimization for high-performance applications",
      icon: "⚙️",
      features: ["REST/GraphQL APIs", "Database Design", "Authentication", "Cloud Deployment"],
      price: "Starting at $2,000",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "UI/UX Design & Development",
      description: "User-centered design with modern interfaces, prototyping, and conversion optimization",
      icon: "🎨",
      features: ["Figma Design", "Prototyping", "User Research", "A/B Testing"],
      price: "Starting at $1,500",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Cloud Solutions & DevOps",
      description: "AWS infrastructure, CI/CD pipelines, monitoring, and scalable cloud architecture",
      icon: "☁️",
      features: ["AWS Setup", "CI/CD Pipelines", "Monitoring", "Auto Scaling"],
      price: "Starting at $1,800",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Technical Consulting",
      description: "Code reviews, architecture planning, performance optimization, and team mentoring",
      icon: "💡",
      features: ["Code Review", "Architecture Design", "Performance Audit", "Team Training"],
      price: "$150/hour",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 mb-4 sm:mb-6">
              Services
            </h1>
            <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Comprehensive digital solutions to transform your ideas into powerful, scalable applications
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-700">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-xl sm:text-2xl lg:text-3xl">{service.icon}</span>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6 sm:mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">What's Included:</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-5 right-5 sm:top-10 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-24 h-24 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">Ready to Start Your Project?</h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed px-2">
              Let's discuss your requirements and create something amazing together
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a href="/contact" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
              </a>
              <a href="mailto:ananya@example.com" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg hover:bg-white/10 transition-colors duration-300">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}