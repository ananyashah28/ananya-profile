import { Metadata } from 'next';
import Link from 'next/link';
import ScrollAnimation from '../components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Experience - Ananya Shah',
  description: 'Professional work experience and educational background of Ananya Shah, Full-Stack Developer & AI/ML Engineer',
  keywords: 'experience, work history, education, full-stack developer, software engineer, Operisoft Technologies, Cygnet.One'
};

interface Role {
  title: string;
  period: string;
  location?: string;
  description: string;
  certificate?: string;
  skills: string[];
  highlights: string[];
}

interface CompanyExperience {
  company: string;
  type: string;
  logoLetter: string;
  gradient: string;
  roles: Role[];
}

export default function Experience() {
  const companyExperiences: CompanyExperience[] = [
    {
      company: "Operisoft Technologies Pvt Ltd",
      type: "Full-time • 1 yr 4 mos",
      logoLetter: "O",
      gradient: "from-blue-600 to-cyan-600",
      roles: [
        {
          title: "Associate Software Engineer",
          period: "Jan 2026 - Present • 9 mos",
          location: "India • On-site",
          description: "Working on end-to-end full-stack development and cloud-native solutions, contributing to both frontend, backend, and cloud integrations using AWS, React.js, and Node.js. Building intuitive user interfaces, developing high-performance REST APIs, and managing cloud services.",
          skills: ["AWS Cloud (S3, EC2)", "Node.js", "React.js", "Express.js", "REST APIs", "Cloud Deployment", "MongoDB", "PostgreSQL", "Git"],
          highlights: [
            "End-to-end full-stack development and AWS cloud service integrations across production applications",
            "Building intuitive, responsive UIs with React.js and high-performance Node.js REST APIs",
            "Deploying web infrastructure with AWS Cloud (S3, EC2), optimizing application performance and latency"
          ]
        },
        {
          title: "Software Engineer Intern",
          period: "Jun 2025 - Dec 2025 • 7 mos",
          location: "India • On-site",
          description: "Worked on full-stack development tasks using Node.js, Next.js, and AWS cloud hosting features. Contributed to building frontend interfaces, backend API routes, and cloud service deployments.",
          skills: ["AWS Cloud", "Node.js", "Next.js", "React.js", "JavaScript", "TailwindCSS", "Git"],
          highlights: [
            "Engineered full-stack features using Node.js, Next.js App Router, and AWS cloud hosting",
            "Developed RESTful API endpoints and implemented reusable frontend UI components",
            "Enhanced system throughput and reduced response latency across key modules"
          ]
        }
      ]
    },
    {
      company: "Cygnet.One",
      type: "Internship • 8 mos total",
      logoLetter: "C",
      gradient: "from-purple-600 to-indigo-600",
      roles: [
        {
          title: "AI ML Intern",
          period: "Jan 2025 - Apr 2025 • 4 mos",
          location: "Ahmedabad, Gujarat, India • On-site",
          description: "Developed a Gen-AI powered quotation generation platform that automates the creation of customised quotations based on user requirements. The system utilizes Generative AI models and Vector Databases (SentenceTransformer, jsPDF) for automated tier classification and quotation exporting. Recognized in Top 14 at Dewang Mehta IT Awards 2025.",
          certificate: "Certificate of Completion",
          skills: ["Machine Learning", "Python", "Generative AI", "Vector Databases", "SentenceTransformer", "jsPDF"],
          highlights: [
            "Architected Gen-AI Powered Quotation Generation Platform automating proposal workflows",
            "Selected in Top 14 across all engineering domains at Dewang Mehta IT Awards 2025",
            "Integrated Vector DB (SentenceTransformer) for similarity matching & jsPDF for instant exports"
          ]
        },
        {
          title: "AI ML Intern",
          period: "May 2024 - Aug 2024 • 4 mos",
          location: "Ahmedabad, Gujarat, India • On-site",
          description: "Gained hands-on experience in machine learning using Python by working on structured learning tasks and project-based assignments. Focused on understanding core ML concepts, data preprocessing, model training, and evaluation.",
          certificate: "Certificate of Completion",
          skills: ["Machine Learning", "Python", "Data Preprocessing", "Scikit-learn", "Model Evaluation"],
          highlights: [
            "Gained practical experience in end-to-end Machine Learning pipelines using Python",
            "Executed data cleaning, feature engineering, model training, and performance evaluation",
            "Delivered structured ML projects and algorithm optimization assignments"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950/40 pt-20 pb-20 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 relative z-10">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Experience</span>
        </nav>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
            Work Experience
          </h1>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed px-4">
            A track record of building full-stack software systems and applying Generative AI & Machine Learning solutions.
          </p>
        </div>

        {/* Company Group Cards */}
        <div className="space-y-12 mb-20">
          {companyExperiences.map((comp, compIdx) => (
            <ScrollAnimation key={compIdx} direction="up" delay={compIdx * 0.2}>
              <div className="bg-white dark:bg-gray-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-200/80 dark:border-gray-700/60 relative overflow-hidden transition-all duration-300 hover:shadow-2xl card-glow-hover">
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${comp.gradient}`}></div>

              {/* Company Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/80 dark:border-gray-700/60 pb-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${comp.gradient} rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg ring-4 ring-blue-500/10`}>
                    {comp.logoLetter}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                      {comp.company}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                        {comp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles Timeline */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 space-y-10">
                {comp.roles.map((role, roleIdx) => (
                  <div key={roleIdx} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white dark:border-gray-800 shadow-md group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Role Details Frame */}
                    <div className="bg-gray-50/80 dark:bg-gray-900/60 rounded-2xl p-5 sm:p-7 border border-gray-200/60 dark:border-gray-700/50 space-y-4 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                            {role.title}
                          </h3>
                          {role.location && (
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1.5 mt-1">
                              <span>📍</span> {role.location}
                            </p>
                          )}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-950/90 px-3.5 py-1.5 rounded-full border border-blue-300/80 dark:border-blue-800/80 self-start sm:self-auto shadow-sm">
                          🗓️ {role.period}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {role.description}
                      </p>

                      {/* Certificate Pill if available */}
                      {role.certificate && (
                        <div className="inline-flex items-center gap-2 bg-emerald-100/70 dark:bg-emerald-950/90 text-emerald-900 dark:text-emerald-200 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-emerald-300 dark:border-emerald-800">
                          📜 {role.certificate}
                        </div>
                      )}

                      {/* Key Highlights */}
                      <div className="pt-2">
                        <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                          Key Highlights & Contributions
                        </h4>
                        <div className="grid gap-2">
                          {role.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white dark:bg-gray-800/70 p-3 rounded-xl border border-gray-200/60 dark:border-gray-700/50">
                              <span className="w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-400/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                                ✓
                              </span>
                              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
                                {h}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Skills */}
                      <div className="pt-2">
                        <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2.5">
                          Technologies & Competencies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill) => (
                            <span key={skill} className="tech-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
        </div>

        {/* Education Section */}
        <section className="bg-white dark:bg-gray-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-200/80 dark:border-gray-700/60 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>

          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2">
              Education & Academic Background
            </h2>
            <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {/* Ahmedabad Institute Of Technology */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900/80 dark:to-slate-900/80 rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700/60">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg ring-4 ring-purple-500/10 shrink-0">
                  🎓
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      Ahmedabad Institute Of Technology Gota, Ahmedabad (SFI) 701
                    </h3>
                    <span className="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-950/80 px-3.5 py-1 rounded-full border border-blue-300 dark:border-blue-800 self-start sm:self-auto shrink-0">
                      2021 – 2025
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    Bachelor of Engineering - BE, Computer Engineering
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Completed Bachelor of Engineering in Computer Engineering, building a strong foundation in core algorithms, software architecture, databases, and machine learning.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['Problem Solving', 'Machine Learning', 'Data Structures', 'Algorithms', 'Software Engineering'].map((subject) => (
                      <span key={subject} className="tech-tag">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Indian Institute of Technology, Roorkee */}
            <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 dark:from-gray-900/80 dark:to-slate-900/80 rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700/60">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg ring-4 ring-indigo-500/10 shrink-0">
                  🏛️
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      Masai School x IIT Roorkee
                    </h3>
                    <span className="text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-950/80 px-3.5 py-1 rounded-full border border-purple-300 dark:border-purple-800 self-start sm:self-auto shrink-0">
                      Apr 2026 – Present
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                    Artificial Intelligence and Machine Learning Certification Program
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Advanced postgraduate certification program by Masai School in collaboration with IIT Roorkee (iHUB DivyaSampark) specializing in Artificial Intelligence, Machine Learning algorithms, deep neural networks, and Python data science engineering.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['Python (Programming Language)', 'Pandas', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning'].map((subject) => (
                      <span key={subject} className="tech-tag">
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