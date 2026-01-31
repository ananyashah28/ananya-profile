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
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "View my code",
      link: "https://github.com/ananyashah28",
      description: "Open source contributions",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: "📞",
      title: "Schedule Call",
      value: "Book a meeting",
      link: "#",
      description: "Let's discuss your project",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-400/10 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 mb-6">
              Let's Connect
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Ready to bring your ideas to life? I'm here to help you build something extraordinary
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a key={index} href={method.link} className="group block">
                      <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:shadow-xl transition-shadow`}>
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                            {method.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Stats */}
              {/* <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm opacity-90">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm opacity-90">Projects Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">4+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Start Your Project</h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        {/* <div className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: "What's your typical project timeline?", a: "Most projects take 2-8 weeks depending on complexity and scope." },
              { q: "Do you work with international clients?", a: "Yes! I work with clients worldwide across different time zones." },
              { q: "What's included in your development process?", a: "Planning, design, development, testing, deployment, and post-launch support." },
              { q: "Do you provide ongoing maintenance?", a: "Yes, I offer maintenance packages to keep your application updated and secure." }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}