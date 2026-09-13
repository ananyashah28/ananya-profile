import { Metadata } from 'next';
import Link from 'next/link';
import SocialShare from '@/app/components/SocialShare';
import ViewCounter from '@/app/components/ViewCounter';
import Comments from '@/app/components/Comments';
import { calculateReadingTime } from '@/app/components/ReadingTime';

const blogPosts: Record<string, { title: string; date: string; readTime: string; category: string; content: string }> = {
  'gen-ai-quotation-workflows': {
    title: 'Generative AI & Vector Database Workflows',
    date: 'February 20, 2025',
    readTime: '10 min read',
    category: 'AI/ML',
    content: `
<h1>Generative AI & Vector Database Workflows</h1>
<p>Building production-grade Generative AI systems requires seamlessly integrating Large Language Models (LLMs) with high-performance vector search engines. In this article, we explore how our project won <strong>Top 14 Finalist</strong> recognition at the <strong>Dewang Mehta IT Awards 2025</strong> by building an automated B2B Quotation Generation Engine.</p>

<h2>1. The Problem Domain</h2>
<p>Enterprise procurement teams manually read unstructured RFPs (Request for Proposals), extract line items, map them to standard inventory SKUs, and calculate multi-tier pricing schedules. This process traditionally took 48-72 hours per response.</p>

<h2>2. System Architecture</h2>
<p>Our solution combines <strong>SentenceTransformers</strong> for dense vector embeddings, a vector database for semantic similarity indexing, and fine-tuned LLMs for contextual response synthesis.</p>

<pre><code>// Vector Search & Embedding Pipeline
import { SentenceTransformer } from 'sentence-transformers';
import { VectorDBClient } from 'vector-db-sdk';

const embedder = new SentenceTransformer('all-MiniLM-L6-v2');
const queryVector = await embedder.encode("High-tensile steel fasteners M8x50");
const matches = await VectorDBClient.query({
  vector: queryVector,
  topK: 5,
  similarityThreshold: 0.85
});</code></pre>

<h2>3. Key Results & Performance Impact</h2>
<ul>
  <li><strong>Time Reduction:</strong> Reduced proposal generation latency from 48 hours to under 30 seconds.</li>
  <li><strong>Accuracy:</strong> Achieved 94.2% precision on SKU entity extraction across complex PDF specifications.</li>
  <li><strong>Award Recognition:</strong> Selected as Top 14 Finalist at Dewang Mehta IT Awards 2025 out of thousands of entries across India.</li>
</ul>
    `
  },
  'autonomous-racing-rl': {
    title: 'Reinforcement Learning for Autonomous Racing Systems',
    date: 'January 18, 2025',
    readTime: '12 min read',
    category: 'AI/ML',
    content: `
<h1>Reinforcement Learning for Autonomous Racing Systems</h1>
<p>Autonomous racing presents unique challenges in real-time control, non-linear dynamics, and continuous state-action spaces. This post covers our implementation of Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO) in simulated racing environments.</p>

<h2>1. Reward Function Engineering</h2>
<p>Designing an effective reward function is critical. A naive speed-maximizing reward leads to vehicle instability and frequent wall collisions. We formulated a multi-objective reward function:</p>

<pre><code>def calculate_reward(speed, heading_error, distance_from_center, track_width):
    # Track centerline alignment reward
    normalized_distance = distance_from_center / (track_width / 2.0)
    center_reward = 1.0 - (normalized_distance ** 2)
    
    # Heading angle penalty
    heading_penalty = math.cos(heading_error)
    
    # Combined reward with velocity weighting
    reward = (speed * 0.5) + (center_reward * 2.0) + (heading_penalty * 1.0)
    return max(reward, 1e-3)</code></pre>

<h2>2. Simulation & Real-time Vision</h2>
<p>We integrated OpenCV image preprocessing with sensor fusion inputs (LiDAR distance vectors + camera frames) to feed low-dimensional state representations into PyTorch neural networks.</p>

<h2>3. Key Achievements</h2>
<ul>
  <li>Smooth trajectory tracking at high simulated velocities without track boundary violations.</li>
  <li>Convergence achieved in under 500 training episodes using custom PPO hyperparameters.</li>
</ul>
    `
  },
  'nextjs-14-guide': {
    title: 'Getting Started with Next.js 14 App Router',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Next.js',
    content: `
<h1>Getting Started with Next.js 14 App Router</h1>
<p>Next.js 14 brings game-changing stability to Server Actions, Turbopack, and nested layout rendering patterns for modern full-stack application development.</p>

<h2>Key Features</h2>
<h3>1. Turbopack (Stable Dev Engine)</h3>
<p>Turbopack provides up to 53% faster local development server startup and up to 94% faster code updates with HMR.</p>

<h3>2. Server Actions</h3>
<p>Server Actions eliminate the boilerplate of manual API routes by allowing functions to execute securely on the server directly from forms or components.</p>

<pre><code>async function createPost(formData: FormData) {
  'use server'
  const title = formData.get('title');
  await db.post.create({ data: { title } });
  revalidatePath('/blogs');
}</code></pre>

<h2>Getting Started Checklist</h2>
<ol>
  <li>Initialize project: <code>npx create-next-app@latest ./ --typescript --tailwind</code></li>
  <li>Launch dev server: <code>npm run dev</code></li>
</ol>
    `
  },
  'nodejs-apis': {
    title: 'Building Scalable APIs with Node.js & Express',
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Backend',
    content: `
<h1>Building Scalable APIs with Node.js & Express</h1>
<p>Architecting production-ready microservices and REST APIs requires proper error handling, middleware abstraction, rate limiting, and structured data validation.</p>

<h2>Architecture & Middleware Stack</h2>
<pre><code>import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(helmet());
app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());</code></pre>

<h2>Best Practices for Production</h2>
<ul>
  <li><strong>Centralized Error Middleware:</strong> Always return standardized JSON error bodies with HTTP status codes.</li>
  <li><strong>Data Validation:</strong> Enforce strict request validation schemas using Zod or Joi.</li>
  <li><strong>Database Indexing:</strong> Ensure foreign keys and frequently queried fields are indexed.</li>
</ul>
    `
  },
  'aws-cloud-architecture': {
    title: 'Cloud Architecture & AWS Deployment Patterns',
    date: 'February 12, 2025',
    readTime: '9 min read',
    category: 'Cloud/AWS',
    content: `
<h1>Cloud Architecture & AWS Deployment Patterns</h1>
<p>Building cloud-native web applications on Amazon Web Services (AWS) requires a strong foundation in containerization, serverless functions, S3 bucket storage, and IAM security policies.</p>

<h2>1. Core AWS Building Blocks</h2>
<ul>
  <li><strong>AWS S3 & CloudFront:</strong> Serving static frontend bundles with global edge caching and SSL certification.</li>
  <li><strong>AWS Lambda & API Gateway:</strong> Serverless REST API endpoints with auto-scaling and pay-per-execution economics.</li>
  <li><strong>AWS DynamoDB & RDS:</strong> Managed databases with automated backup and multi-AZ failover replication.</li>
  <li><strong>AWS IAM & EC2:</strong> Identity management, least-privilege security roles, and virtual server compute instances.</li>
</ul>

<h2>2. Infrastructure Best Practices</h2>
<pre><code># Sample AWS CLI Command to sync web build to S3 with CloudFront Cache Invalidation
aws s3 sync ./out s3://my-portfolio-bucket --delete
aws cloudfront create-invalidation --distribution-id E1234567890ABC --paths "/*"</code></pre>
    `
  },
  'data-analytics-python-pandas': {
    title: 'End-to-End Data Analytics Pipelines with Python & Pandas',
    date: 'January 28, 2025',
    readTime: '7 min read',
    category: 'Data Analytics',
    content: `
<h1>End-to-End Data Analytics Pipelines with Python & Pandas</h1>
<p>Data analytics transforms raw transactional logs into actionable business insights. Drawing from our hands-on experience in <strong>Deloitte & British Airways Job Simulations</strong>, here is how to structure robust data pipelines.</p>

<h2>1. Data Cleaning & Normalization</h2>
<pre><code>import pandas as pd
import numpy as np

# Load raw customer feedback dataset
df = pd.read_csv('flight_reviews.csv')

# Handling missing values & datetime parsing
df['review_date'] = pd.to_datetime(df['review_date'])
df['rating'] = df['rating'].fillna(df['rating'].median())

# Aggregating sentiment indicators by route
route_summary = df.groupby('route').agg({
    'rating': ['mean', 'count'],
    'recommend': lambda x: (x == 'Yes').mean() * 100
}).reset_index()</code></pre>

<h2>2. Visualization & Reporting</h2>
<p>Using Seaborn and Matplotlib to plot customer sentiment distributions enables stakeholders to pinpoint operational bottlenecks rapidly.</p>
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];
  
  return {
    title: post ? `${post.title} - Ananya Shah` : 'Post Not Found',
    description: post ? 'Technical blog post by Ananya Shah' : 'Blog post not found',
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <Link href="/blogs" className="text-blue-600 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950/40 pt-20">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/blogs" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block font-semibold text-sm">
          ← Back to Blog
        </Link>
        
        <header className="mb-12">
          <span className="bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-800/50 mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6">
            <span>{post.date}</span>
            <span>•</span>
            <span>{calculateReadingTime(post.content)}</span>
            <span>•</span>
            <ViewCounter slug={resolvedParams.slug} />
          </div>
          <SocialShare title={post.title} url={`https://ananyashah.dev/blogs/posts/${resolvedParams.slug}`} />
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <div className="mt-12">
          <Comments />
        </div>
      </article>
    </div>
  );
}