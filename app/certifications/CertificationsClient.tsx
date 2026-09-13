'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

interface Certification {
  title: string;
  issuer: string;
  category: string;
  date: string;
  credentialId: string;
  url?: string;
  image?: string;
  skills: string[];
}

export default function CertificationsClient() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      title: "Agentic AI, Gen AI and RL",
      issuer: "Udemy",
      category: "Artificial Intelligence",
      date: "Feb 2026",
      credentialId: "UC-80bb5d45-e9f0-493b-abad-8598762c11dd",
      url: "https://www.udemy.com/certificate/UC-80bb5d45-e9f0-493b-abad-8598762c11dd/",
      skills: ["Agentic AI", "Generative AI", "Reinforcement Learning", "LLMs", "Python"]
    },
    {
      title: "Data Analysis with Pandas and Python",
      issuer: "Udemy",
      category: "Data Analytics",
      date: "Nov 2025",
      credentialId: "UC-51dbb900-9b61-442f-8ca4-bc589c319ac7",
      url: "https://www.udemy.com/certificate/UC-51dbb900-9b61-442f-8ca4-bc589c319ac7/",
      image: "/images/Daya Analysis with Pandas and Python.jfif",
      skills: ["Python", "Pandas", "Data Analysis", "Data Manipulation"]
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      category: "Data Analytics",
      date: "Feb 2026",
      credentialId: "FORAGE-DELOITTE-ANALYTICS",
      url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_698a106b22bd8ef07d99bcd9_1771080218908_completion_certificate.pdf",
      skills: ["Data Analytics", "Deloitte Simulation", "Business Intelligence", "Python"]
    },
    {
      title: "British Airways Data Science Job Simulation",
      issuer: "British Airways (Forage)",
      category: "Data Science",
      date: "Feb 2026",
      credentialId: "FORAGE-BA-DATASCIENCE",
      url: "https://www.theforage.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_698a106b22bd8ef07d99bcd9_1771757741801_completion_certificate.pdf",
      skills: ["Data Science", "Predictive Modeling", "Customer Insights", "Python"]
    },
    {
      title: "Python Programming",
      issuer: "Udemy",
      category: "Programming",
      date: "Mar 2023",
      credentialId: "UC-f7837a90-df33-4e94-a67c-f56e56aaf23e",
      url: "https://www.udemy.com/certificate/UC-f7837a90-df33-4e94-a67c-f56e56aaf23e/",
      image: "/images/Learn Python The Complete Python Programming Course.jfif",
      skills: ["Python Programming", "OOP", "Data Structures", "Automation"]
    },
    {
      title: "Zoho Creator Developer - Associate",
      issuer: "Zoho Creator",
      category: "No Code / Low Code",
      date: "2025",
      credentialId: "ZOHO-CREATOR-ASSOCIATE",
      url: "https://creator.zoho.com",
      skills: ["Zoho Creator", "Low Code Development", "Workflow Automation", "Application Design"]
    },
    {
      title: "IoT Cyber Security and SAP Analytics Cloud",
      issuer: "Edunet Foundation - COE",
      category: "Cybersecurity & Analytics",
      date: "May 2025",
      credentialId: "EDUNET-IOT-SAP-2025",
      url: "https://github.com/ananyashah28/ananya-profile/blob/main/public/images/Ananya%20Deval%20Shah_VAC.jpg",
      image: "/images/Ananya Deval Shah_VAC.jpg",
      skills: ["IoT Security", "SAP Analytics Cloud", "Cybersecurity", "Data Analytics"]
    },
    {
      title: "Machine Learning, Deep Learning, Computer Vision & SAP ABAP on BTP",
      issuer: "Edunet Foundation - COE",
      category: "Artificial Intelligence",
      date: "Apr 2024",
      credentialId: "EDUNET-ML-SAP-2024",
      url: "https://github.com/ananyashah28/ananya-profile/blob/main/public/images/ABAP.jfif",
      image: "/images/ABAP.jfif",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "SAP ABAP", "BTP"]
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Data Analytics', 'Data Science', 'Programming', 'No Code / Low Code'];

  const filteredCertifications = selectedFilter === 'All'
    ? certifications
    : certifications.filter(c => c.category === selectedFilter || c.category.includes(selectedFilter));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950/40 pt-20 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-10 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
                Certifications
              </h1>
              <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
                Verified professional certifications validating expertise in Artificial Intelligence, Data Analytics, Data Science, and Software Development
              </p>
            </motion.div>
          </div>
        </ScrollAnimation>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ${
                selectedFilter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700/80 border border-gray-200 dark:border-gray-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCertifications.map((cert, index) => (
            <ScrollAnimation key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-800/90 rounded-3xl shadow-xl overflow-hidden border border-gray-200/80 dark:border-gray-700/60 p-6 sm:p-7 flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Top Category Badge & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-xs font-bold border border-indigo-200 dark:border-indigo-800/60">
                      {cert.category}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800/50">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-blue-600 dark:text-blue-400 font-bold mb-3">
                    🏢 {cert.issuer}
                  </p>

                  <div className="mb-4 text-xs text-gray-500 dark:text-gray-400">
                    Credential ID: <span className="font-mono text-gray-800 dark:text-gray-200 font-semibold">{cert.credentialId}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                      Skills Validated:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="tech-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  {cert.image && (
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>🖼️ View Image</span>
                      <span>→</span>
                    </button>
                  )}
                  {cert.url && !cert.url.includes('raw.githubusercontent.com') && !cert.url.includes('blob/main/public/images') && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>🔗 Verify Link</span>
                      <span>→</span>
                    </a>
                  )}
                  {!cert.image && (!cert.url || cert.url.includes('blob/main/public/images')) && (
                    <div className="w-full text-center bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border border-gray-200 dark:border-gray-700">
                      Verified Credential
                    </div>
                  )}
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Stats Section */}
        <ScrollAnimation>
          <div className="mt-12 sm:mt-16 bg-white dark:bg-gray-800/90 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700/60">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-1">{certifications.length}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Official Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-black text-purple-600 dark:text-purple-400 mb-1">5</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Specialized Tech Domains</div>
              </div>
              <div>
                <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400 mb-1">2026</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Latest Certification</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Certificate Image Modal */}
      {selectedCert && selectedCert.image && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedCert(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white pr-4">
                {selectedCert.title}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline bg-blue-50 dark:bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800/60"
                >
                  <span>↗ Open Original</span>
                </a>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-bold text-xl cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 overflow-auto max-h-[calc(90vh-100px)] flex justify-center bg-gray-100 dark:bg-gray-950">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                className="w-full max-w-3xl h-auto rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
