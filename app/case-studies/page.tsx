import { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'Engineering Case Studies - Ananya Shah',
  description: 'In-depth technical case studies on AWS deployment pipelines, system architecture, multi-tenant SaaS engines, and full-stack cloud solutions by Ananya Shah.',
  keywords: 'case studies, system architecture, aws deployment, nextjs, fastapi, full stack, software engineering'
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
