import AnimatedCounter from './components/AnimatedCounter';
import Newsletter from './components/Newsletter';
import DynamicTestimonials from './components/DynamicTestimonials';
import TestimonialForm from './components/TestimonialForm';
import ParticleBackground from './components/ParticleBackground';
import ScrollAnimation from './components/ScrollAnimation';

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#080c14] text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden bg-grid-pattern">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 pt-24 pb-16 relative overflow-hidden">
        {/* Interactive Particle Background */}
        <ParticleBackground />

        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-500/15 to-pink-500/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Main Content */}
          <div className="text-center mb-12 lg:mb-16">
            <ScrollAnimation direction="down" delay={0.1}>
              <div className="inline-flex items-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4.5 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 border border-emerald-500/20 shadow-sm backdrop-blur-md">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2.5 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                Available for full-time opportunities & AI projects
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                Hi, I'm <span className="gradient-text">Ananya Shah</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.3}>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-normal">
                A passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">Full-Stack Developer</span> and 
                <span className="text-purple-600 dark:text-purple-400 font-semibold"> AI/ML Engineer</span> with strong 
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> Cloud (AWS) knowledge</span>, crafting scalable web applications, intelligent APIs, and modern cloud solutions.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10 justify-center items-center">
                <a href="/projects" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.03]">
                  View My Work →
                </a>
                <a href="/contact" className="border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 backdrop-blur-md shadow-sm">
                  Get In Touch
                </a>
                <a href="/resume.pdf" download className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-[1.02] shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.5}>
              <div className="flex items-center justify-center space-x-6">
                <a href="https://github.com/ananyashah28" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700 shadow-sm hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ananyashah2811/" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700 shadow-sm hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:ananya.shah2811@gmail.com" className="p-3.5 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700 shadow-sm hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </ScrollAnimation>
          </div>
          
          {/* Tech Stack Marquee Pills */}
          <ScrollAnimation direction="up" delay={0.6}>
            <div className="mb-12 flex justify-center">
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl">
                {['AWS Cloud', 'React.js', 'Next.js', 'Node.js', 'Python', 'Flask', 'FastAPI', 'MongoDB', 'TensorFlow', 'Vector DB', 'Masai x IIT Roorkee AI/ML'].map((tech, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 border border-gray-200/80 dark:border-gray-700/60 shadow-sm hover:border-blue-400 dark:hover:border-purple-400 transition-all cursor-default hover:scale-105">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Stats Box */}
          <ScrollAnimation direction="up" delay={0.7}>
            <div className="flex justify-center">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 max-w-4xl w-full border border-gray-200/80 dark:border-gray-700/60 shadow-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { number: 2, label: 'Years Experience', suffix: '+' },
                    { number: 1, label: 'Award Won', suffix: '' },
                    { number: 10, label: 'Projects Completed', suffix: '+' },
                    { number: 3, label: 'Companies Worked', suffix: '' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#0b101c] dark:via-[#090d16] dark:to-[#0b101c] relative border-t border-b border-gray-200/80 dark:border-gray-800/80">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">About Me</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
          </ScrollAnimation>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a <span className="font-bold text-blue-600 dark:text-blue-400">Software Developer</span> at Operisoft Technologies, 
                  building high-performance full-stack applications and cloud-native services with modern frameworks like AWS, Node.js, Next.js, and React.
                </p>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My background includes specialized <span className="font-bold text-purple-600 dark:text-purple-400">AI/ML development</span>, having built 
                  a Gen-AI powered quotation generation system recognized in the Top 14 at the Dewang Mehta IT Awards 2025 during my internship at Cygnet.One.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="bg-blue-100/80 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm shadow-sm">
                    🎓 BE Computer Engineering
                  </span>
                  <span className="bg-purple-100/80 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm shadow-sm">
                    🏛️ Masai School x IIT Roorkee AI/ML
                  </span>
                  <a href="/awards" className="bg-amber-100/80 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm hover:scale-105 transition-transform shadow-sm">
                    🏆 Dewang Mehta IT Award 2025
                  </a>
                </div>
                
                <div className="pt-4">
                  <a href="/about" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Discover My Journey →
                  </a>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800/90 p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-200/80 dark:border-gray-700/60 glass-panel">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>⚡ Core Technical Stack</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Python', level: 'AI & Data Science' },
                    { name: 'Node.js', level: 'REST APIs & Microservices' },
                    { name: 'AWS Cloud', level: 'S3, EC2 & Infrastructure' },
                    { name: 'React.js', level: 'Frontend Architectures' },
                    { name: 'Next.js', level: 'Full-Stack App Router' },
                    { name: 'MongoDB', level: 'NoSQL & Relational DBs' }
                  ].map((skill) => (
                    <div key={skill.name} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200/60 dark:border-gray-700/80 text-center hover:border-blue-400 dark:hover:border-purple-400 transition-all group hover:scale-105">
                      <div className="font-extrabold text-gray-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">{skill.name}</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-medium">{skill.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">Featured Work</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-normal">
                Innovative software solutions blending AI innovation with solid full-stack engineering
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="project-card card-glow-hover bg-white dark:bg-gray-800/90 rounded-3xl shadow-xl overflow-hidden border border-gray-200/80 dark:border-gray-700/60 p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-block bg-blue-600 text-white px-3.5 py-1 rounded-lg text-xs font-bold mb-4 shadow-sm">
                    🏆 Award Winner
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    Gen-AI Powered Quotation Generation
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                    Intelligent quotation generation platform powered by Generative AI and Vector Databases. Automates customized quotations with product recommendations, tier classification (Basic/Standard/Premium), and PDF export.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800/60">
                      🏆 Selected Top 14 at Dewang Mehta IT Awards 2025
                    </div>
                    <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800/60">
                      🏢 Developed during AI/ML Internship at Cygnet.One
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Python', 'Flask', 'React.js', 'Vector DB', 'SentenceTransformer', 'jsPDF'].map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a href="https://github.com/ananyashah28/Quotation-Generation" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 font-semibold block transition-colors shadow-sm">
                  View Code on GitHub
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.3}>
              <div className="project-card card-glow-hover bg-white dark:bg-gray-800/90 rounded-3xl shadow-xl overflow-hidden border border-gray-200/80 dark:border-gray-700/60 p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-block bg-purple-600 text-white px-3.5 py-1 rounded-lg text-xs font-bold mb-4 shadow-sm">
                    🚀 Featured Full-Stack System
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    Project Submission & Review Platform
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                    Full-stack system for managing student project submissions, automated code review feedback, and grading workflows built with Next.js frontend and FastAPI backend.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-purple-800 dark:text-purple-200 bg-purple-50 dark:bg-purple-950/80 px-3 py-1.5 rounded-lg border border-purple-200 dark:border-purple-800/60">
                      ⚡ FastAPI + Next.js App Router Architecture
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['TypeScript', 'Next.js', 'FastAPI', 'Python', 'TailwindCSS'].map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a href="https://github.com/ananyashah28/project-submission-and-review-project" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 font-semibold block transition-colors shadow-sm">
                  View Code on GitHub
                </a>
              </div>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <a href="/projects" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all hover:scale-105">
                View All 18 GitHub Repositories →
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-slate-900/50 border-t border-b border-gray-200/60 dark:border-gray-800/60">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="max-w-5xl mx-auto">
            <Newsletter />
          </div>
        </ScrollAnimation>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">Testimonials</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Feedback from colleagues and project leaders</p>
            </div>
          </ScrollAnimation>

          <DynamicTestimonials />
        </div>
      </section>

      <TestimonialForm />

      {/* Contact Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Let's Create Something Extraordinary</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Have a project in mind or looking for a skilled developer? Let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3.5 rounded-xl font-bold text-base transition-colors shadow-lg">
                Start Your Project
              </a>
              <a href="mailto:ananya.shah2811@gmail.com" className="border border-white/30 hover:border-white bg-white/10 px-8 py-3.5 rounded-xl font-bold text-base transition-colors">
                Send an Email
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}