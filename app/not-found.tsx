import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 pt-20 flex items-center justify-center">
      <div className="text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors">
            Go Home
          </Link>
          <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}