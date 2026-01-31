export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Available for work
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm Ananya Shah
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              A passionate <span className="text-blue-600 font-semibold">Full-Stack Developer</span> and 
              <span className="text-purple-600 font-semibold">AI Specialist</span> who loves creating 
              digital experiences that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 justify-center">
              <a href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-colors text-center">
                View My Work
              </a>
              <a href="/contact" className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 text-gray-700 dark:text-gray-300 hover:text-blue-600 px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-colors text-center">
                Get In Touch
              </a>
              <a href="/resume.pdf" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 px-6 py-3 font-medium text-sm sm:text-base transition-colors text-center">
                Download CV ↓
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-6">
              <a href="https://github.com/ananyashah28" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ananyashah2811/" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:ananya.shah2811@gmail.com" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Stats Box - Centered below main content
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 sm:p-8 max-w-3xl w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { number: '2+', label: 'Years Experience' },
                  { number: '1', label: 'Award Won' },
                  { number: '5+', label: 'Projects Completed' },
                  { number: '3', label: 'Companies Worked' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 mb-4 sm:mb-6">About Me</h2>
              <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-light">
                  I'm a <span className="font-semibold text-blue-600">passionate Software Developer</span> at Operisoft Technologies, 
                  building scalable full-stack applications with modern technologies like Node.js, Next.js, and React.
                </p>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-light">
                  My expertise spans <span className="font-semibold text-purple-600">AI/ML development</span>, having developed 
                  a Gen-AI powered quotation system recognized at the Dewang Mehta IT Awards 2025 during my internship at Cygnet.One.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg text-sm sm:text-base">
                  BE Computer Engineering
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg text-sm sm:text-base">
                  Top 14 Selected 2025
                </div>
              </div>
              
              <a href="/about" className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                Discover My Journey
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-600">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">Technologies</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { name: 'Python', level: 80 },
                    { name: 'Node.js', level: 85 },
                    { name: 'React', level: 95 },
                    { name: 'Next.js', level: 90 },
                    { name: 'MongoDB', level: 82 },
                    { name: 'PostgreSQL', level: 88 },
                    { name: '.NET', level: 40 },
                    { name: 'C Programming', level: 40 }
                  ].map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer text-sm sm:text-base">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 mb-4 sm:mb-6">Featured Work</h2>
              <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6 sm:mt-8 font-light leading-relaxed px-4">
              Showcasing innovative solutions that blend <span className="font-semibold text-blue-600">technical excellence</span> with 
              <span className="font-semibold text-purple-600">creative design</span>
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-blue-200 dark:border-blue-800 max-w-3xl w-full">
              <div className="p-6 sm:p-8">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    🏆 Award Winner
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  Gen-AI Powered Quotation Generation
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Intelligent quotation generation platform powered by Generative AI and Vector Databases. Automates customized quotations with product recommendations, tier classification (Basic/Standard/Premium), and PDF export functionality.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-lg text-sm font-medium mb-4">
                  🏆 Selected at Dewang Mehta IT Awards 2025
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-2 rounded-lg text-sm font-medium mb-4">
                  🏢 Associated with Cygnet.One
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python (Flask)', 'React.js', 'Tailwind CSS', 'OpenLLaMA', 'SentenceTransformer', 'Vector Databases', 'jsPDF'].map((tech) => (
                    <span key={tech} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div>
                  <a href="https://github.com/ananyashah28/Quotation-Generation" className="w-full block border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-center py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <a href="/projects" className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 overflow-hidden">
              <span className="relative z-10">View Complete Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 mb-4 sm:mb-6">
                Services
              </h2>
              <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
                Comprehensive digital solutions to transform your ideas into powerful, scalable applications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
            {[
              {
                title: "AI/ML Projects",
                description: "Intelligent solutions using machine learning, natural language processing, and computer vision to solve complex business problems",
                icon: "🤖",
                features: ["Machine Learning Models", "Data Analysis", "AI Integration", "Predictive Analytics"]
              },
              {
                title: "Full-Stack Web Development",
                description: "End-to-end web applications with modern frameworks, responsive design, and optimal performance",
                icon: "🌐",
                features: ["React/Next.js", "Node.js APIs", "Database Design", "Responsive UI"]
              },
              {
                title: "Backend & API Development",
                description: "Scalable server architecture, RESTful APIs, and database optimization for high-performance applications",
                icon: "⚙️",
                features: ["REST/GraphQL APIs", "Database Design", "Authentication", "Cloud Deployment"]
              }
            ].map((service, index) => (
              <div key={index} className="group relative h-full">
                <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-700 h-full flex flex-col">
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
                    <div className="flex flex-col gap-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-xl sm:text-2xl lg:text-3xl">{service.icon}</span>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed flex-grow">
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
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105 mt-auto">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/services" className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 overflow-hidden">
              <span className="relative z-10">View All Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-40">
            <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
          </div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-12 sm:mb-16">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4 sm:mb-6">
                Let's Create Something
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 sm:mb-8">
                Extraordinary
              </h2>
              <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mt-6 sm:mt-8 font-light leading-relaxed px-4">
              Ready to transform your vision into reality? Let's collaborate and build something that makes a lasting impact.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a href="/contact" className="group relative bg-white text-gray-900 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-white/25 transition-all duration-500 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 font-bold">
                Let's Talk →
              </span>
            </a>
            
            <a href="mailto:ananya.shah2811@gmail.com" className="group bg-transparent border-2 border-white/30 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:border-white hover:bg-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              Send Message
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">✉</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { icon: '🚀', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
              { icon: '💎', title: 'Premium Quality', desc: 'Exceptional standards in every project' },
              { icon: '🤝', title: 'Collaborative', desc: 'Working together every step of the way' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100 font-light text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}