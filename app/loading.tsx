export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Header Skeleton */}
        <div className="text-center mb-12 sm:mb-20 animate-pulse">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 mx-auto mb-4"></div>
          <div className="h-1 bg-blue-600 w-24 mx-auto mb-6"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-96 mx-auto"></div>
        </div>
        
        {/* Content Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg animate-pulse">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
