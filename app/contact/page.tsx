import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Ananya Shah',
  description: 'Get in touch with Ananya Shah for web development projects, consulting, or collaboration opportunities',
  keywords: 'contact, hire developer, web development services, collaboration, freelance developer'
};

export default function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "ananya.shah2811@gmail.com",
      link: "mailto:ananya.shah2811@gmail.com",
      description: "Drop me a line anytime",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/ananyashah2811/",
      description: "Professional networking",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "View my code",
      link: "https://github.com/ananyashah28",
      description: "Open source projects",
      gradient: "from-purple-600 to-pink-600"
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
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h1>
            <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Ready to discuss new projects, software development, or AI solutions?
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800/90 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200/80 dark:border-gray-700/60">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Feel free to reach out via email or connect with me on LinkedIn and GitHub.
              </p>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a key={index} href={method.link} target={method.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="group block">
                    <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700/50 hover:border-blue-500/40 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center text-white text-xl shadow-md flex-shrink-0`}>
                        {method.icon}
                      </div>
                      <div className="overflow-hidden">
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                          {method.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{method.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800/90 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200/80 dark:border-gray-700/60">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Start Your Project</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}