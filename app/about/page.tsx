import { Metadata } from 'next';
import SkillBar from '../components/SkillBar';

export const metadata: Metadata = {
  title: 'About - Ananya Shah',
  description: 'Learn more about Ananya Shah, a passionate full-stack developer with expertise in modern web technologies',
  keywords: 'about, biography, skills, full-stack developer, web development, react, nextjs'
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">About Me</h1>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-24">
          <div className="order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Hello, I'm Ananya</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Software Developer currently working at Operisoft Technologies Pvt Ltd, where I build scalable full-stack applications using modern technologies like Node.js, Next.js, and React.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise spans AI/ML development, having completed two successful internships at Cygnet.One where I worked on machine learning projects and developed a Gen-AI powered quotation generation system that was recognized at the prestigious Dewang Mehta IT Awards 2025.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I completed my Bachelor of Engineering in Computer Engineering from Ahmedabad Institute Of Technology, and I'm passionate about combining cutting-edge AI technologies with practical web development to create innovative solutions.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl mx-auto shadow-2xl"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-blue-600 rounded-2xl opacity-20"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-purple-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>

        <section className="mb-16 sm:mb-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Expertise</h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { category: 'Frontend', skills: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'], icon: '🎨' },
              { category: 'Backend', skills: ['Node.js', 'Python (Flask)', 'Machine Learning', 'Data Analysis'], icon: '⚙️' },
              { category: 'AI/ML', skills: ['OpenLLaMA', 'SentenceTransformer', 'Vector Databases', 'TensorFlow'], icon: '🤖' },
              { category: 'Tools', skills: ['Git', 'jsPDF', 'Problem Solving', 'Data Science'], icon: '🛠️' }
            ].map((group, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{group.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{group.category}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill} className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Transforming ideas into powerful digital solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: '💻', title: 'Full-Stack Development', desc: 'End-to-end web application development with modern frameworks and best practices' },
              { icon: '🚀', title: 'Performance Optimization', desc: 'Scalable architecture and performance tuning for lightning-fast user experiences' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'User-centered design approach creating intuitive and engaging interfaces' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 sm:p-8 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}