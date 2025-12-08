import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Ananya Shah',
  description: 'Explore the portfolio of web development projects by Ananya Shah, featuring React, Next.js, and full-stack applications',
  keywords: 'projects, portfolio, web development, react projects, nextjs, full-stack applications'
};

export default function Projects() {
  const projects = [
    {
      title: 'Gen-AI Powered Quotation Generation',
      description: 'Intelligent quotation generation platform powered by Generative AI and Vector Databases. Automates customized quotations with product recommendations, tier classification (Basic/Standard/Premium), and PDF export functionality.',
      tech: ['Python (Flask)', 'React.js', 'Tailwind CSS', 'OpenLLaMA', 'SentenceTransformer', 'Vector Databases', 'jsPDF'],
      image: 'from-violet-400 via-purple-500 to-indigo-600',
      demo: '#',
      github: 'https://github.com/ananyashah28/Quotation-Generation',
      featured: true,
      stats: 'Selected at Dewang Mehta IT Awards 2025',
      award: 'Dewang Mehta IT Awards 2025',
      company: 'Associated with Cygnet.One'
    }
    /*,
    {
      title: 'ShopFlow - E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Stripe payments, admin dashboard, inventory management, and order tracking. Built for scalability with 10k+ products.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      image: 'from-emerald-400 via-teal-500 to-blue-600',
      demo: 'https://shopflow-demo.vercel.app',
      github: 'https://github.com/ananyashah/shopflow',
      featured: true,
      stats: '50k+ users, $2M+ processed'
    },
    {
      title: 'TeamSync - Project Management',
      description: 'Collaborative workspace with real-time updates, Kanban boards, time tracking, and team analytics. Used by 100+ companies.',
      tech: ['React', 'Firebase', 'Material-UI', 'WebSocket', 'Chart.js'],
      image: 'from-purple-400 via-pink-500 to-red-500',
      demo: 'https://teamsync-app.netlify.app',
      github: 'https://github.com/ananyashah/teamsync',
      featured: true,
      stats: '100+ companies, 5k+ projects'
    },
    {
      title: 'DataViz Pro - Analytics Dashboard',
      description: 'Interactive business intelligence platform with custom reports, real-time data visualization, and automated insights generation.',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Python'],
      image: 'from-orange-400 via-red-500 to-pink-500',
      demo: 'https://dataviz-pro.herokuapp.com',
      github: 'https://github.com/ananyashah/dataviz-pro',
      featured: true,
      stats: '1M+ data points processed'
    },
    {
      title: 'DevBlog - Technical Blog Platform',
      description: 'Modern blogging platform with MDX support, syntax highlighting, SEO optimization, and comment system for developers.',
      tech: ['Next.js', 'MDX', 'Prisma', 'Vercel', 'Algolia'],
      image: 'from-indigo-400 via-purple-500 to-pink-500',
      demo: 'https://devblog-platform.vercel.app',
      github: 'https://github.com/ananyashah/devblog',
      stats: '10k+ monthly readers'
    },
    {
      title: 'Portfolio Studio',
      description: 'Responsive portfolio template with modern animations, dark mode, and CMS integration. Downloaded 5k+ times.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: 'from-pink-400 via-rose-500 to-red-500',
      demo: 'https://portfolio-studio.vercel.app',
      github: 'https://github.com/ananyashah/portfolio-studio',
      stats: '5k+ downloads, 200+ stars'
    },
    {
      title: 'ChatFlow - Real-time Messaging',
      description: 'Scalable messaging platform with group chats, file sharing, video calls, and end-to-end encryption.',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
      image: 'from-cyan-400 via-blue-500 to-indigo-600',
      demo: 'https://chatflow-app.netlify.app',
      github: 'https://github.com/ananyashah/chatflow',
      stats: '25k+ messages sent daily'
    }
    */
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">My Projects</h1>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            A collection of projects showcasing my expertise in modern web development, 
            from concept to deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
              index === 0 ? 'md:col-span-2 lg:col-span-3 border-2 border-blue-200 dark:border-blue-800' : project.featured ? 'col-span-1' : ''
            }`}>
              <div className="p-6 sm:p-8">
                {index === 0 && (
                  <div className="mb-4">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                      🏆 Award Winner
                    </span>
                  </div>
                )}
                {project.featured && index !== 0 && (
                  <div className="mb-4">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.stats && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-lg text-sm font-medium mb-4">
                      {project.award ? '🏆' : '📊'} {project.stats}
                    </div>
                  )}
                  
                  {project.company && (
                    <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-2 rounded-lg text-sm font-medium mb-4">
                      🏢 {project.company}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <a href={project.github} className="w-full block border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-center py-2 sm:py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base">
                      GitHub
                    </a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}