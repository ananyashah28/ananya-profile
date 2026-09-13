import { Metadata } from 'next';
import BlogsClient from './BlogsClient';

export const metadata: Metadata = {
  title: 'Tech Blog - Ananya Shah',
  description: 'Articles and insights on web development, system architecture, and AI engineering by Ananya Shah',
  keywords: 'tech blog, system design, pwa, react, nextjs, web development, software engineering'
};

export default function BlogsPage() {
  return <BlogsClient />;
}