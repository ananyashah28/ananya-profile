import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">404</h1>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Go Home
          </Link>
          <Link href="/blogs" className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 text-gray-700 dark:text-gray-300 hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors">
            Read Blog
          </Link>
        </div>
        <div className="mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/about" className="text-blue-600 hover:underline">About</Link>
            <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
            <Link href="/experience" className="text-blue-600 hover:underline">Experience</Link>
            <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
