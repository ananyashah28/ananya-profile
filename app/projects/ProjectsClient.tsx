'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: 'AI/ML' | 'Full-Stack' | 'Python' | 'RL';
  type: string;
  github: string;
  live?: string;
  featured?: boolean;
  award?: string;
  company?: string;
  image?: string;
  images?: string[];
}

function ProjectCardBanner({ 
  project, 
  onOpenModal 
}: { 
  project: Project; 
  onOpenModal: (images: string[], index: number, title: string) => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  const imgList: string[] = project.images && project.images.length > 0 
    ? project.images 
    : project.image 
    ? [project.image] 
    : [];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? imgList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === imgList.length - 1 ? 0 : prev + 1));
  };

  if (imgList.length === 0) {
    return (
      <div className={`relative aspect-[16/9] w-full mb-5 rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-700/60 bg-gradient-to-br ${
        project.category === 'AI/ML' ? 'from-purple-900/20 via-indigo-900/30 to-slate-900/40' :
        project.category === 'RL' ? 'from-amber-900/20 via-orange-900/30 to-slate-900/40' :
        project.category === 'Full-Stack' ? 'from-blue-900/20 via-cyan-900/30 to-slate-900/40' :
        'from-slate-800/40 via-gray-900/40 to-slate-900/40'
      }`}>
        <div className="w-full h-full flex flex-col justify-between p-4 relative overflow-hidden">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>
            <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 ml-2 truncate">
              github.com/ananyashah28
            </span>
          </div>
          <div className="my-auto text-center">
            <div className="text-2xl mb-1 opacity-90">
              {project.category === 'AI/ML' ? '🤖' : project.category === 'RL' ? '🏎️' : project.category === 'Full-Stack' ? '💻' : '🐍'}
            </div>
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300 tracking-wide font-mono">
              {project.category} System
            </div>
          </div>
          <div className="text-[10px] text-gray-400 dark:text-gray-500 text-right font-mono">
            {project.type}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onOpenModal(imgList, activeIdx, project.title)}
      className="relative aspect-[16/9] w-full mb-5 rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-700/60 cursor-pointer group/img bg-slate-900 shadow-inner"
    >
      {/* Current Screenshot Image */}
      <img
        src={imgList[activeIdx]}
        alt={`${project.title} screenshot ${activeIdx + 1}`}
        className="w-full h-full object-cover object-top transition-all duration-300 group-hover/img:scale-105"
      />
      
      {/* Top Left: Enlarge Badge */}
      <div className="absolute top-2.5 left-2.5 z-10 bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1 shadow-md transition-all">
        <span>🔍 Click to Enlarge</span>
      </div>

      {/* Top Right: Slide Counter Badge */}
      {imgList.length > 1 && (
        <div className="absolute top-2.5 right-2.5 z-10 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-md">
          {activeIdx + 1} / {imgList.length}
        </div>
      )}

      {/* Navigation Arrows on Card */}
      {imgList.length > 1 && (
        <>
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center text-xl font-black shadow-lg z-20 cursor-pointer border border-white/30 transition-all hover:scale-110 active:scale-95"
            aria-label="Previous image"
            title="Previous screenshot"
          >
            ‹
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center text-xl font-black shadow-lg z-20 cursor-pointer border border-white/30 transition-all hover:scale-110 active:scale-95"
            aria-label="Next image"
            title="Next screenshot"
          >
            ›
          </button>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-slate-950/80 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-md">
            {imgList.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveIdx(i); }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === activeIdx ? 'bg-blue-400 w-4' : 'bg-white/40 w-1.5 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsClient() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<{ images: string[]; index: number; title: string } | null>(null);

  const projects: Project[] = [
    {
      title: 'Gen-AI Powered Quotation Generation',
      description: 'Intelligent quotation generation platform powered by Generative AI and Vector Databases. Automates customized quotations with product recommendations, tier classification (Basic/Standard/Premium), and PDF export functionality.',
      tech: ['Python', 'Flask', 'React', 'AI/ML', 'Vector DB', 'SentenceTransformer', 'jsPDF'],
      category: 'AI/ML',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/Quotation-Generation',
      featured: true,
      award: 'Selected Top 14 at Dewang Mehta IT Awards 2025',
      company: 'Cygnet.One Internship',
      images: [
        '/images/projects/quotation-gen-1.svg',
        '/images/projects/quotation-gen-2.svg',
        '/images/projects/quotation-gen-3.svg'
      ]
    },
    {
      title: 'Project Submission & Review Platform',
      description: 'Full-stack platform for managing student project submissions, automated review feedback, and grading workflows featuring Next.js frontend, FastAPI backend, and AWS Cloud hosting.',
      tech: ['TypeScript', 'Next.js', 'FastAPI', 'AWS Cloud', 'Python', 'TailwindCSS', 'Full-Stack'],
      category: 'Full-Stack',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/project-submission-and-review-project',
      featured: true
    },
    {
      title: 'Resume Shapeshifter',
      description: 'AI-driven resume customization platform that dynamically tailors resume content, skills, and highlights to match specific job descriptions and ATS criteria.',
      tech: ['TypeScript', 'React', 'Next.js', 'AI/ML', 'TailwindCSS'],
      category: 'Full-Stack',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/resume-shapeshifter',
      live: 'https://resume-shapeshifter-nine.vercel.app',
      featured: true
    },
    {
      title: 'AI Job Search & Application Agent',
      description: 'Autonomous Python agent designed for intelligent job posting scraping, candidate profile matching, and automated application workflow tracking.',
      tech: ['Python', 'AI/ML', 'NLP', 'Automation', 'Scraping'],
      category: 'AI/ML',
      type: 'AI/ML',
      github: 'https://github.com/ananyashah28/ai-job-agent',
      featured: true
    },
    {
      title: 'Cold Email Parser',
      description: 'Natural language processing utility for parsing cold outreach emails, extracting candidate/prospect contact details, intent classification, and key highlights.',
      tech: ['Python', 'NLP', 'Data Extraction', 'AI/ML'],
      category: 'AI/ML',
      type: 'AI/ML',
      github: 'https://github.com/ananyashah28/cold-email-parser'
    },
    {
      title: 'Predictive Modeling of Customer Bookings',
      description: 'Machine learning predictive analytics model trained with Scikit-learn and Random Forest algorithms to forecast customer airline booking behavior and conversion.',
      tech: ['Python', 'Jupyter Notebook', 'Scikit-learn', 'Predictive Modeling', 'Pandas'],
      category: 'AI/ML',
      type: 'AI/ML',
      github: 'https://github.com/ananyashah28/Predictive-modeling-of-customer-bookings'
    },
    {
      title: 'Process Optimization via Q-Learning',
      description: 'Reinforcement learning system implementing Q-Learning algorithms to solve industrial process scheduling and automated workflow optimization.',
      tech: ['Python', 'Reinforcement Learning', 'Q-Learning', 'Optimization', 'AI/ML'],
      category: 'RL',
      type: 'AI/ML',
      github: 'https://github.com/ananyashah28/Process-Optimization-QLearning'
    },
    {
      title: 'Autonomous Racing RL Agent',
      description: 'Deep reinforcement learning model trained for autonomous track navigation, steering control, and obstacle avoidance in simulated racing environments.',
      tech: ['Python', 'PyTorch', 'Reinforcement Learning', 'Deep Q-Networks'],
      category: 'RL',
      type: 'AI/ML',
      github: 'https://github.com/ananyashah28/autonomous-racing-rl'
    },
    {
      title: 'Pacman AI Search Algorithms',
      description: 'Artificial intelligence agent utilizing classical search algorithms (A*, BFS, DFS, Expectimax) to navigate complex Pacman mazes and avoid ghosts.',
      tech: ['Python', 'A* Search', 'Algorithmic Optimization', 'AI/ML'],
      category: 'AI/ML',
      type: 'AI/ML',
      github: 'https://github.com/ananyashah28/pacman-ai'
    },
    {
      title: 'A3C Kung-Fu Master RL Agent',
      description: 'Asynchronous Advantage Actor-Critic (A3C) Deep Reinforcement Learning agent trained on OpenAI Gym to play Arcade Kung-Fu Master.',
      tech: ['Python', 'PyTorch', 'A3C', 'Deep RL', 'OpenAI Gym'],
      category: 'RL',
      type: 'AI/ML',
      github: 'https://github.com/ananyashah28/a3c-kung-fu-master'
    },
    {
      title: 'AI Moon Landing Lander',
      description: 'Deep Q-Network (DQN) space craft lander model trained to safely land a lunar module between designated landing flags with minimum fuel consumption.',
      tech: ['Python', 'PyTorch', 'DQN', 'Reinforcement Learning', 'OpenAI Gym'],
      category: 'RL',
      type: 'AI/ML',
      github: 'https://github.com/ananyashah28/ai-moon-landing'
    },
    {
      title: 'Focus Flow Dashboard',
      description: 'Modern web-based productivity application featuring Pomodoro timers, task organization, and daily focus analytics.',
      tech: ['JavaScript', 'React', 'TailwindCSS', 'Vercel'],
      category: 'Full-Stack',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/focus-flow',
      live: 'https://focus-flow-lyart.vercel.app'
    },
    {
      title: 'Backpack Flight Scheduler',
      description: 'Travel planning and flight schedule optimization tool designed for budget backpackers to organize multi-destination travel itineraries.',
      tech: ['JavaScript', 'React', 'APIs', 'Web Dev'],
      category: 'Full-Stack',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/backpack-flight-scheduler'
    },
    {
      title: 'Interactive Web Celebration Experience',
      description: 'Rich multimedia web presentation with custom keyframe animations, audio synchronization, and responsive design layouts.',
      tech: ['CSS', 'JavaScript', 'HTML5', 'Vercel'],
      category: 'Full-Stack',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/anniversary-present',
      live: 'https://anniversary-present-zeta.vercel.app'
    },
    {
      title: 'QWords NLP Utility',
      description: 'Python utility for word puzzle analysis, anagram solving algorithms, and natural language query processing.',
      tech: ['Python', 'NLP', 'Algorithms'],
      category: 'Python',
      type: 'Python',
      github: 'https://github.com/ananyashah28/qwords'
    },
    {
      title: 'Emoji Algebra Solver',
      description: 'Symbolic algebra solver capable of evaluating visual emoji math equations and multi-variable puzzle systems automatically.',
      tech: ['Python', 'Algorithms', 'Mathematics'],
      category: 'Python',
      type: 'Python',
      github: 'https://github.com/ananyashah28/emoji-algebra'
    },
    {
      title: 'Scientific Data Processor',
      description: 'Scientific dataset analysis and data cleaning library for processing numerical datasets and formatting mathematical outputs.',
      tech: ['Python', 'NumPy', 'Pandas', 'Data Science'],
      category: 'Python',
      type: 'Python',
      github: 'https://github.com/ananyashah28/scientific-processor'
    },
    {
      title: 'Ananya Shah Developer Portfolio',
      description: 'Modern, highly responsive personal developer portfolio showcase built with Next.js App Router, TypeScript, and TailwindCSS.',
      tech: ['TypeScript', 'Next.js', 'React', 'TailwindCSS', 'Vercel'],
      category: 'Full-Stack',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/ananya-profile',
      live: 'https://ananyas-portfolio.vercel.app'
    },
    {
      title: 'Emotion-Based Dance Music Recommendation App',
      description: 'Computer vision application that detects user emotion from face expression or voice inputs to recommend dance moves and customized playlist tracks.',
      tech: ['Python', 'OpenCV', 'AI/ML', 'Computer Vision', 'Recommendation System'],
      category: 'AI/ML',
      type: 'AI/ML',
      github: 'https://github.com/ananyashah28/Emotion-Based-Dance-Music-Recommendation-App'
    },
    {
      title: 'My Notes App',
      description: 'Efficient personal note-taking and document management desktop application built with C# and .NET framework.',
      tech: ['C#', '.NET', 'Software Architecture', 'Desktop Dev'],
      category: 'Full-Stack',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/My-Notes-App'
    },
    {
      title: 'Task Manager',
      description: 'Backend-focused task tracking and management system built with C# and ASP.NET framework featuring task scheduling and state persistence.',
      tech: ['C#', 'ASP.NET', 'Backend API', 'Database'],
      category: 'Full-Stack',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/Task-Manager'
    },
    {
      title: 'Expense Tracker',
      description: 'Financial management and personal expense tracking application built with C# and .NET providing visual analytics and budget limits.',
      tech: ['C#', '.NET', 'Finance App', 'Software Architecture'],
      category: 'Full-Stack',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/Expense-Tracker'
    },
    {
      title: 'The Wedding Choreo',
      description: 'Digital home and interactive web platform showcasing dance choreography services, portfolio media, and booking inquiries.',
      tech: ['TypeScript', 'Next.js', 'React', 'TailwindCSS', 'Full-Stack'],
      category: 'Full-Stack',
      type: 'Full-Stack',
      github: 'https://github.com/ananyashah28/ananya-dance-website'
    }
  ];

  const filters = ['All', 'Featured', 'AWS Cloud', 'AI/ML', 'Full-Stack', 'RL', 'Python'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = 
      selectedFilter === 'All' ? true :
      selectedFilter === 'Featured' ? project.featured :
      selectedFilter === 'AWS Cloud' ? (project.tech.some(t => t.toLowerCase().includes('aws') || t.toLowerCase().includes('cloud')) || project.description.toLowerCase().includes('aws') || project.description.toLowerCase().includes('cloud')) :
      selectedFilter === 'RL' ? (project.category === 'RL' || project.tech.some(t => t.toLowerCase().includes('rl') || t.toLowerCase().includes('reinforcement'))) :
      project.category === selectedFilter || project.tech.includes(selectedFilter);

    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedGallery) return;
      if (e.key === 'Escape') {
        setSelectedGallery(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedGallery(prev => prev ? { ...prev, index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1 } : null);
      } else if (e.key === 'ArrowRight') {
        setSelectedGallery(prev => prev ? { ...prev, index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1 } : null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGallery]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-[#080c14] dark:via-[#0c1322] dark:to-[#080c14] pt-20 pb-20 overflow-hidden relative">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 relative z-10">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-semibold">Projects</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Projects
          </h1>
          <div className="w-20 sm:w-28 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 font-normal">
            A comprehensive showcase of {projects.length} public GitHub repositories across AI/ML, Reinforcement Learning, Full-Stack Development, and Python systems.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 sm:mb-12 space-y-6">
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search projects by keyword or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3.5 pl-11 rounded-2xl bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700/80 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
            <svg
              className="w-5 h-5 absolute left-4 top-4 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700/60 shadow-sm'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold">
            Showing {filteredProjects.length} of {projects.length} repositories
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isFeatured = project.featured;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`project-card card-glow-hover flex flex-col justify-between h-full bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border p-6 sm:p-8 backdrop-blur-md ${
                    isFeatured 
                      ? 'border-blue-500/50 dark:border-purple-500/50 ring-1 ring-blue-500/20' 
                      : 'border-gray-200/80 dark:border-gray-700/60'
                  }`}
                >
                  <div>
                    {/* Project Banner / Screenshot Carousel */}
                    <ProjectCardBanner 
                      project={project} 
                      onOpenModal={(imgs, idx, title) => setSelectedGallery({ images: imgs, index: idx, title })}
                    />

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {project.award && (
                        <span className="bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200 px-3 py-1 rounded-lg text-xs font-bold border border-amber-300 dark:border-amber-800">
                          🏆 {project.award}
                        </span>
                      )}
                      {project.company && (
                        <span className="bg-emerald-100/70 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 px-3 py-1 rounded-lg text-xs font-semibold border border-emerald-300 dark:border-emerald-800">
                          {project.company}
                        </span>
                      )}
                      {isFeatured && !project.award && (
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                          ⭐ Featured Project
                        </span>
                      )}
                      <span className="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 px-2.5 py-0.5 rounded-md text-xs font-semibold border border-indigo-200 dark:border-indigo-800/60">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 text-sm font-semibold transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm flex items-center justify-center gap-1.5 whitespace-nowrap"
                        >
                          <span>Live Demo</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800/60 rounded-2xl border border-gray-200 dark:border-gray-700/60 mt-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">No projects found matching your filter or search query.</p>
            <button
              onClick={() => { setSelectedFilter('All'); setSearchQuery(''); }}
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Multi-Image Screenshot Gallery Modal */}
      {selectedGallery && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedGallery(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl flex flex-col relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  {selectedGallery.title}
                </h3>
                {selectedGallery.images.length > 1 && (
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    Screenshot {selectedGallery.index + 1} of {selectedGallery.images.length}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedGallery.images[selectedGallery.index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline bg-blue-50 dark:bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800/60"
                >
                  <span>↗ Open Image</span>
                </a>
                <button 
                  onClick={() => setSelectedGallery(null)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-bold text-xl cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Image Viewer with Controls */}
            <div className="p-4 sm:p-6 overflow-hidden flex-1 flex items-center justify-center bg-gray-950 relative min-h-[300px]">
              <img 
                src={selectedGallery.images[selectedGallery.index]} 
                alt={`${selectedGallery.title} screenshot ${selectedGallery.index + 1}`}
                className="w-full max-w-4xl max-h-[70vh] rounded-xl shadow-2xl border border-gray-800 object-contain transition-all"
              />

              {/* Navigation Arrows */}
              {selectedGallery.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedGallery(prev => prev ? { ...prev, index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1 } : null)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center text-2xl font-bold border border-white/20 transition-all shadow-xl hover:scale-110 cursor-pointer"
                    aria-label="Previous screenshot"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setSelectedGallery(prev => prev ? { ...prev, index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1 } : null)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center text-2xl font-bold border border-white/20 transition-all shadow-xl hover:scale-110 cursor-pointer"
                    aria-label="Next screenshot"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Bottom Dots Indicator */}
            {selectedGallery.images.length > 1 && (
              <div className="py-3 bg-gray-900 border-t border-gray-800 flex justify-center items-center gap-2">
                {selectedGallery.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedGallery(prev => prev ? { ...prev, index: idx } : null)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === selectedGallery.index ? 'bg-blue-500 w-6' : 'bg-gray-600 w-2.5 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
