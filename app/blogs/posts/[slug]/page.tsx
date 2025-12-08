import { Metadata } from 'next';
import Link from 'next/link';

const blogPosts = {
  'nextjs-14-guide': {
    title: 'Getting Started with Next.js 14',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Next.js',
    content: `
<h1>Getting Started with Next.js 14</h1>
<p>Next.js 14 brings exciting new features that make web development faster and more efficient.</p>

<h2>Key Features</h2>
<h3>1. Turbopack (Stable)</h3>
<p>Turbopack provides up to 53% faster local development server startup.</p>

<h3>2. Server Actions (Stable)</h3>
<p>Server Actions allow you to run server-side code directly from components.</p>

<pre><code>async function createPost(formData) {
  'use server'
  // Server-side logic here
}</code></pre>

<h2>Getting Started</h2>
<ol>
<li>Create project: <code>npx create-next-app@latest</code></li>
<li>Enable Turbopack: <code>npm run dev --turbo</code></li>
</ol>
    `
  },
  'nodejs-apis': {
    title: 'Building Scalable APIs with Node.js',
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Backend',
    content: `
<h1>Building Scalable APIs with Node.js</h1>
<p>Creating robust and scalable REST APIs is crucial for modern web applications.</p>

<h2>Architecture Patterns</h2>
<h3>MVC Pattern</h3>
<p>Organize code using Model-View-Controller for better maintainability.</p>

<h3>Middleware Pattern</h3>
<pre><code>app.use(express.json());
app.use(cors());
app.use(helmet());</code></pre>

<h2>Best Practices</h2>
<ul>
<li>Error Handling: Centralized error handling</li>
<li>Validation: Use Joi or Yup</li>
<li>Authentication: JWT-based auth</li>
<li>Rate Limiting: Prevent API abuse</li>
</ul>
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  return {
    title: post ? `${post.title} - Ananya Shah` : 'Post Not Found',
    description: post ? 'Technical blog post by Ananya Shah' : 'Blog post not found',
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/blogs" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <header className="mb-12">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}