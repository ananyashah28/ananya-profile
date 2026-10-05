'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';

export interface CaseStudy {
  title: string;
  subtitle: string;
  date: string;
  metrics: string[];
  readTime: string;
  category: 'System Architecture' | 'Cloud & DevOps' | 'AI / Machine Learning' | string;
  tags: string[];
  gradient: string;
  icon: string;
  slug: string;
  featured?: boolean;
}

export default function CaseStudiesClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const caseStudies: CaseStudy[] = [
    {
      title: "Production-Grade Collaborative Project Workspace & Submission Portal",
      subtitle: "A deep dive into building an enterprise collaborative project workspace—featuring Kanban task boards, bug tracking, billable timesheets, S3 asset pipelines, and automated AWS EC2 deployments.",
      date: "September 2026",
      metrics: ["CodeBuild Pipeline", "Elastic IP Integration", "Kanban & Timesheets Suite"],
      readTime: "15 min read",
      category: "Cloud & DevOps",
      tags: ["Next.js 14", "FastAPI", "PostgreSQL", "Kanban", "Bug Tracking", "Timesheets", "AWS EC2", "Docker"],
      gradient: "from-slate-900 via-slate-800 to-slate-900",
      icon: "",
      slug: "project-submission-review-portal",
      featured: true
    }
  ];

  const categories = ['All', 'Cloud & DevOps', 'System Architecture', 'AI / Machine Learning'];

  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesCategory = selectedCategory === 'All' ? true : cs.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = q === '' || 
      cs.title.toLowerCase().includes(q) ||
      cs.subtitle.toLowerCase().includes(q) ||
      cs.tags.some(t => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const featuredStudy = caseStudies.find(cs => cs.featured) || caseStudies[0];
  const isFiltering = selectedCategory !== 'All' || searchQuery !== '';
  const gridStudies = isFiltering ? filteredCaseStudies : caseStudies.filter(cs => cs.slug !== featuredStudy.slug);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 pt-24 pb-20 relative">
      {/* Subtle Ambient Background Highlight */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 uppercase tracking-widest inline-block mb-4">
              Engineering Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
              Systems & Cloud Architecture
            </h1>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              In-depth empirical breakdowns of production systems engineered for cloud infrastructure, performance, security, and continuous delivery.
            </p>
          </div>
        </ScrollAnimation>

        {/* Featured Case Study Card */}
        {!isFiltering && featuredStudy && (
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mb-14 bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                      Featured Whitepaper
                    </span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                      {featuredStudy.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    <Link href={`/case-studies/${featuredStudy.slug}`}>
                      {featuredStudy.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredStudy.subtitle}
                  </p>

                  {/* Highlights Metrics Pills (Semantic Emerald for positive impact) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {featuredStudy.metrics.map(m => (
                      <span key={m} className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredStudy.tags.map(t => (
                      <span key={t} className="text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link 
                      href={`/case-studies/${featuredStudy.slug}`}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all duration-200"
                    >
                      Read Case Study →
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900 p-8 flex flex-col justify-between text-white border border-slate-800 shadow-md">
                    <div className="p-3 bg-slate-800 rounded-lg w-fit border border-slate-700">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1">Architecture & DevOps Blueprint</div>
                      <div className="text-lg font-bold text-white leading-snug">{featuredStudy.title}</div>
                      <div className="text-xs text-slate-400 mt-2 font-mono">{featuredStudy.readTime} • {featuredStudy.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        )}

        {/* Case Studies Grid */}
        {gridStudies.length > 0 && (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {gridStudies.map((study) => (
                <motion.article
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group bg-white dark:bg-slate-900/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between p-6"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 p-5 flex flex-col justify-between text-white mb-5 border border-slate-800">
                      <div className="flex justify-between items-start">
                        <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="bg-slate-800 px-2.5 py-1 rounded-full text-[11px] font-medium border border-slate-700 text-slate-300">
                          {study.category}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-slate-400">{study.readTime}</div>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      <Link href={study.slug === 'pwa-engine' ? '/case-studies/pwa-engine' : study.slug === 'project-submission-review-portal' ? '/case-studies/project-submission-review-portal' : `/blogs/posts/${study.slug}`}>
                        {study.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
                      {study.subtitle}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      {study.metrics.map(m => (
                        <div key={m} className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {study.tags.map(t => (
                        <span key={t} className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <Link 
                      href={study.slug === 'pwa-engine' ? '/case-studies/pwa-engine' : study.slug === 'project-submission-review-portal' ? '/case-studies/project-submission-review-portal' : `/blogs/posts/${study.slug}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition-colors gap-1 group-hover:translate-x-1 duration-200"
                    >
                      <span>Read Whitepaper</span>
                      <span>→</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
