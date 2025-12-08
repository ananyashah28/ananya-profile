import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience - Ananya Shah',
  description: 'Professional work experience and educational background of Ananya Shah, Full-Stack Developer',
  keywords: 'experience, work history, education, full-stack developer, software engineer'
};

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Operisoft Technologies Pvt Ltd",
      period: "Jun 2025 - Present",
      type: "Full-time",
      description: "Building scalable full-stack applications with a focus on performance and smooth UX. Developing optimized APIs and reusable components using modern JavaScript frameworks. Working closely with senior developers to improve code quality and system design.",
      skills: ["Node.js", "Next.js", "React", "vite", "MongoDB", "REST APIs", "Git", "Docker"],
      achievements: ["Delivered enterprise-level modules", "Improved development workflows", "Contributed to architectural enhancements"]
    },
    {
      title: "AI/ML Intern",
      company: "Cygnet.One",
      period: "Jan 2025 - Apr 2025",
      type: "Internship",
      location: "Ahmedabad, Gujarat, India • On-site",
      description: "Worked on end-to-end machine learning pipelines, including data cleaning, model development, and evaluation. Developed Gen AI based quotation generation system for automated business proposals. Selected in the Top 14 across all domains at the Dewang Mehta IT Awards.",
      skills: ["Machine Learning", "Python", "Data Analysis", "AI", "TensorFlow", "Gen AI"],
      achievements: ["Built Gen AI quotation generation system", "Improved data preprocessing workflows", "Recognized in Top 14 (Dewang Mehta Awards)"]
    },
    {
      title: "AI/ML Intern",
      company: "Cygnet.One",
      period: "May 2024 - Aug 2024",
      type: "Internship",
      location: "Ahmedabad, Gujarat, India • On-site",
      description: "Learned foundational ML concepts through hands-on projects and mentorship. Developed beginner-level ML models and gained exposure to real-world datasets.",
      skills: ["Machine Learning", "Python", "Data Science"],
      achievements: ["Completed multiple ML mini-projects", "Strengthened fundamentals in ML and data science", "Gained exposure to real-world datasets"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 mb-4 sm:mb-6">
              My Journey
            </h1>
            <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
              A timeline of growth, innovation, and impactful contributions in the world of technology
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <section className="mb-12 sm:mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {experiences.map((job, index) => (
                <div key={index} className="group relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-900 shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <div className="md:ml-12 lg:ml-16 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                            <span className="text-base sm:text-lg font-semibold text-blue-600">{job.company}</span>
                            <span className="text-gray-400 hidden sm:inline">•</span>
                            <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">{job.period}</span>
                          </div>
                          {job.location && (
                            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{job.location}</p>
                          )}
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold self-start lg:self-auto mt-2 lg:mt-0">
                          {job.type}
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {job.skills.map((skill) => (
                              <span key={skill} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Key Achievements</h4>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-600">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">
                  🎓
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Bachelor of Engineering - BE, Computer Engineering
                  </h3>
                  <p className="text-sm sm:text-base text-blue-600 font-semibold mb-3 sm:mb-4">Ahmedabad Institute Of Technology Gota, Ahmedabad (SFI) • 2021 - 2025</p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    Pursuing Computer Engineering with focus on software development and machine learning. 
                    Gained comprehensive knowledge in programming, algorithms, and modern development practices.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Problem Solving', 'Machine Learning', 'Data Structures', 'Algorithms', 'Software Engineering'].map((subject) => (
                      <span key={subject} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}