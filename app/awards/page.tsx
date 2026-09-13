import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Awards & Recognition - Ananya Shah',
  description: 'Awards and recognition received by Ananya Shah for excellence in software development and AI/ML',
  keywords: 'awards, recognition, achievements, dewang mehta it awards, software development'
};

export default function Awards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950/40 pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">Awards & Recognition</h1>
          <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Celebrating achievements and milestones in software engineering and AI innovation
          </p>
        </div>

        {/* Featured Award */}
        <div className="mb-16 sm:mb-24">
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-purple-500/10 dark:from-amber-500/20 dark:via-purple-900/30 dark:to-indigo-950/60 rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-amber-400/80 dark:border-amber-500/50 relative overflow-hidden">
            <div className="flex items-center justify-center mb-6">
              <div className="text-6xl sm:text-7xl animate-bounce">🏆</div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2">
              Dewang Mehta IT Awards 2025
            </h2>
            <p className="text-center text-base sm:text-lg text-amber-700 dark:text-amber-300 font-semibold mb-8">
              Selected Top 14 Nationwide Across All Domains
            </p>

            <div className="bg-white dark:bg-gray-800/95 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-200/80 dark:border-gray-700/80 shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">Project: Gen-AI Powered Quotation Generation</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Developed an intelligent quotation generation platform powered by Generative AI and Vector Databases. 
                The system automates customized quotations with product recommendations, tier classification, and PDF export functionality.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-blue-100/60 dark:bg-blue-950/80 rounded-xl p-4 border border-blue-300 dark:border-blue-800">
                  <h4 className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Flask', 'React.js', 'OpenLLaMA', 'Vector DB'].map(tech => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-emerald-100/60 dark:bg-emerald-950/80 rounded-xl p-4 border border-emerald-300 dark:border-emerald-800">
                  <h4 className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2">Organization</h4>
                  <p className="text-gray-900 dark:text-white font-semibold text-sm">Cygnet.One</p>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-1 font-medium">AI/ML Internship Project</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <span className="inline-block bg-amber-500 text-gray-950 px-6 py-2.5 rounded-full font-bold text-sm sm:text-base shadow-md">
                🌟 National Recognition
              </span>
            </div>
          </div>
        </div>

        {/* Other Achievements */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              icon: '🎓',
              title: 'BE Computer Engineering',
              organization: 'Ahmedabad Institute Of Technology',
              description: 'Graduated with strong foundation in computer science, AI/ML, and full-stack software development'
            },
            {
              icon: '💼',
              title: 'Professional Experience',
              organization: 'Operisoft Technologies & Cygnet.One',
              description: 'Successfully completed 2 internships and currently working full-time as Software Developer'
            },
            {
              icon: '🚀',
              title: 'Project Portfolio',
              organization: '10+ Completed Projects',
              description: 'Built diverse range of full-stack web applications and machine learning platforms'
            },
            {
              icon: '⭐',
              title: 'Technical Excellence',
              organization: 'Multi-Stack Engineering',
              description: 'Proficient in React, Next.js, Node.js, Python, REST APIs, and database architectures'
            }
          ].map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200/80 dark:border-gray-700/60">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5">{achievement.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">
                {achievement.organization}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
