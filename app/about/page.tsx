import { Metadata } from 'next';
import Image from 'next/image';
import GitHubStats from '../components/GitHubStats';
import ScrollAnimation from '../components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'About - Ananya Shah',
  description: 'Learn more about Ananya Shah, a passionate full-stack developer with expertise in modern web technologies',
  keywords: 'about, biography, skills, full-stack developer, web development, react, nextjs'
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-[#080c14] dark:via-[#0c1322] dark:to-[#080c14] pt-20 overflow-hidden relative">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">About Me</h1>
          <div className="w-20 sm:w-28 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 font-normal">
            Passionate about creating digital experiences that solve real-world challenges
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Hello, I'm Ananya</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Software Developer currently working at <strong className="text-blue-600 dark:text-blue-400 font-semibold">Operisoft Technologies Pvt Ltd</strong>, where I build scalable full-stack web applications and cloud-native solutions using modern technologies like AWS, Node.js, Next.js, and React.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My expertise spans <strong className="text-purple-600 dark:text-purple-400 font-semibold">AI/ML development and Cloud Infrastructure</strong>, having completed two successful internships at Cygnet.One where I worked on machine learning projects and developed a Gen-AI powered quotation generation system that was recognized at the prestigious Dewang Mehta IT Awards 2025.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I completed my Bachelor of Engineering in Computer Engineering from Ahmedabad Institute Of Technology and advanced my specialization in Artificial Intelligence & Machine Learning through Masai School in collaboration with IIT Roorkee. I'm passionate about combining cutting-edge AI technologies, cloud engineering (AWS), and practical, scalable web development.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/images/ProfilePic/profile pic.jpg" 
                  alt="Ananya Shah" 
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 dark:bg-blue-500/30 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 dark:bg-purple-500/30 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        <ScrollAnimation direction="up" delay={0.1}>
          <section className="mb-16 sm:mb-24">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Expertise</h2>
              <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: 'Frontend', skills: [{ name: 'React.js', level: 95 }, { name: 'Next.js', level: 90 }, { name: 'JavaScript', level: 88 }, { name: 'Tailwind CSS', level: 92 }], icon: '🎨' },
                { category: 'Backend & Cloud', skills: [{ name: 'Node.js', level: 85 }, { name: 'AWS (S3, EC2)', level: 82 }, { name: 'Python (Flask)', level: 80 }, { name: 'REST APIs', level: 88 }], icon: '⚙️' },
                { category: 'AI/ML', skills: [{ name: 'OpenLLaMA', level: 70 }, { name: 'SentenceTransformer', level: 72 }, { name: 'Vector Databases', level: 75 }, { name: 'TensorFlow', level: 68 }], icon: '🤖' },
                { category: 'Cloud & DevOps', skills: [{ name: 'AWS Cloud', level: 84 }, { name: 'Git', level: 90 }, { name: 'Cloud Deployment', level: 85 }, { name: 'Problem Solving', level: 92 }], icon: '☁️' }
              ].map((group, index) => (
                <div key={index} className="bg-white dark:bg-gray-800/90 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/60 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl mb-3">{group.icon}</div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{group.category}</h3>
                  <div className="space-y-3.5">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1 text-xs sm:text-sm font-medium">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Education & Certifications Section */}
        <ScrollAnimation direction="up" delay={0.2}>
          <section className="mb-16 sm:mb-24">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education & Certifications</h2>
              <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Masai School x IIT Roorkee */}
              <div className="bg-white dark:bg-gray-800/90 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-gray-700/60 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group card-glow-hover">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold shadow-md shrink-0">
                    🏛️
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-950/80 rounded-full border border-purple-300 dark:border-purple-800 mb-2">
                      Apr 2026 – Present
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Masai School x IIT Roorkee</h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">Artificial Intelligence & Machine Learning Program</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Postgraduate certification program in Artificial Intelligence and Machine Learning offered by Masai School in collaboration with IIT Roorkee (iHUB DivyaSampark), focusing on Deep Neural Networks, Natural Language Processing, Generative AI models, and Python Data Science Engineering.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Pandas', 'Data Science'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium border border-purple-200/60 dark:border-purple-800/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ahmedabad Institute Of Technology */}
              <div className="bg-white dark:bg-gray-800/90 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-gray-700/60 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group card-glow-hover">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center text-2xl font-bold shadow-md shrink-0">
                    🎓
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-950/80 rounded-full border border-blue-300 dark:border-blue-800 mb-2">
                      2021 – 2025
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ahmedabad Institute Of Technology</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">Bachelor of Engineering (B.E.) - Computer Engineering</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Completed Bachelor of Engineering in Computer Engineering, establishing a strong foundation in core computer science principles, algorithms, data structures, database management systems, and full-stack software development.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Algorithms', 'Data Structures', 'Software Engineering', 'Problem Solving', 'Web Development'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium border border-blue-200/60 dark:border-blue-800/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* GitHub Stats Section */}
        <section className="mb-16 sm:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">GitHub Contributions</h2>
            <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <GitHubStats />
        </section>

        <section className="bg-white dark:bg-gray-800/90 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700/60">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
            <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transforming complex technical requirements into elegant digital products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: '💻', title: 'Full-Stack Development', desc: 'End-to-end web applications using Next.js App Router, React, Node.js REST APIs, and TypeScript.' },
              { icon: '☁️', title: 'AWS & Cloud Knowledge', desc: 'Working knowledge of cloud deployment, AWS S3 storage, EC2 instances, and serverless hosting workflows.' },
              { icon: '🤖', title: 'AI/ML Engineering', desc: 'Generative AI models, Vector Databases, NLP algorithms, and predictive machine learning solutions.' },
              { icon: '🚀', title: 'Performance Optimization', desc: 'High-speed app architecture, API latency reduction, database indexing, and smooth user interactions.' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 sm:p-8 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:shadow-lg transition-all card-glow-hover">
                <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}