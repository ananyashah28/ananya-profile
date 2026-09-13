import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects - Ananya Shah',
  description: 'Explore the portfolio of web development projects by Ananya Shah, featuring React, Next.js, and full-stack applications',
  keywords: 'projects, portfolio, web development, react projects, nextjs, full-stack applications'
};

export default function Projects() {
  return <ProjectsClient />;
}