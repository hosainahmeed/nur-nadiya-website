'use client';

const PropertyCardSkeleton: React.FC = () => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-gray-300"></div>

      {/* Price and Title Skeleton */}
      <div className="px-6 py-4">
        <div className="h-8 bg-gray-300 rounded w-1/3 mb-2"></div>
        <div className="h-10 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-6"></div>

        <div className="border-t border-gray-200 my-4"></div>

        {/* Features Skeleton */}
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <div className="h-6 bg-gray-300 rounded w-20"></div>
          </div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="px-6 py-4">
        <div className="h-12 bg-gray-300 rounded-lg w-full"></div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;