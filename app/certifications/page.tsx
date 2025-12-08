'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  skills: string[];
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const certifications = [
    {
      title: "Data Analysis with Pandas and Python",
      issuer: "Udemy",
      date: "Nov 2025",
      credentialId: "UDEMY-PANDAS-2025",
      image: "/images/Daya Analysis with Pandas and Python.jfif",
      skills: ["Python", "Pandas", "Data Analysis", "Data Manipulation"]
    },
    {
      title: "IoT Cyber Security and SAP Analytics Cloud",
      issuer: "Edunet Foundation - COE",
      date: "May 2025",
      credentialId: "EDUNET-IOT-SAP-2025",
      image: "/images/Ananya Deval Shah_VAC.jpg",
      skills: ["IoT Security", "SAP Analytics Cloud", "Cybersecurity", "Data Analytics"]
    },
    {
      title: "Machine Learning, Deep Learning, Computer Vision & SAP ABAP on BTP",
      issuer: "Edunet Foundation - COE",
      date: "Apr 2024",
      credentialId: "EDUNET-ML-SAP-2024",
      image: "/images/ABAP.jfif",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "SAP ABAP", "BTP"]
    },
    {
      title: "The Complete Python Programming Course",
      issuer: "Udemy",
      date: "Mar 2023",
      credentialId: "UDEMY-PYTHON-2023",
      image: "/images/Learn Python The Complete Python Programming Course.jfif",
      skills: ["Python Programming", "Object-Oriented Programming", "Web Development", "Automation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-12 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 mb-4 sm:mb-6">
                Certifications
              </h1>
              <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
                Professional certifications and credentials that validate my expertise in modern technologies
              </p>
            </motion.div>
          </div>
        </ScrollAnimation>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-blue-500/25 transition-all duration-700 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-right">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {cert.issuer}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Credential ID: <span className="font-mono">{cert.credentialId}</span>
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      if (cert.image.endsWith('.pdf')) {
                        window.open(cert.image, '_blank');
                      } else {
                        setSelectedCert(cert);
                      }
                    }}
                    className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    View Certificate
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Stats Section */}
        <ScrollAnimation>
          <div className="mt-12 sm:mt-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-blue-600 mb-2">4</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-black text-purple-600 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Technology Areas</div>
              </div>
              <div>
                <div className="text-4xl font-black text-green-600 mb-2">2025</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Latest Certification</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white pr-4">
                {selectedCert.title}
              </h3>
              <button 
                onClick={() => setSelectedCert(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl flex-shrink-0"
              >
                ×
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-auto max-h-[calc(90vh-120px)]">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getGradient(index: number) {
  const gradients = [
    "from-orange-500 to-red-500",
    "from-blue-500 to-cyan-500", 
    "from-green-500 to-teal-500",
    "from-indigo-500 to-purple-500"
  ];
  return gradients[index % gradients.length];
}