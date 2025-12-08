'use client';

import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  level: number;
  years: number;
  delay?: number;
}

export default function SkillBar({ skill, level, years, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-900 dark:text-white">{skill}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{years} years</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </motion.div>
      </div>
      <div className="text-right mt-1">
        <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
    </motion.div>
  );
}