import Image from 'next/image';
import { useState } from 'react';

// Define types for our components
interface PropertyCardProps {
  isLoading?: boolean;
}

interface PropertyData {
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  squareFeet: number;
  imageUrl?: string;
}

// Main Property Card Component
const PropertyCard: React.FC<PropertyCardProps> = ({ isLoading = false }) => {
  // Toggle between regular card and skeleton
  return isLoading ? <PropertyCardSkeleton /> : <PropertyCardContent />;
};

// Actual Property Card Content
const PropertyCardContent: React.FC = () => {
  // This could be fetched from an API or passed as props in a real application
  const propertyData: PropertyData = {
    price: '$1,00,000',
    title: 'Beachfront Villa',
    location: 'Miami, FL',
    beds: 3,
    baths: 2,
    squareFeet: 1500,
  };
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Property Image */}
      <div className="relative">
        <Image
          src={propertyData.imageUrl || '/api/placeholder/400/320'}
          alt={`${propertyData.title} Interior`}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Price and Title */}
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-1">{propertyData.price}</div>
        <h2 className="font-bold text-4xl mb-2">{propertyData.title}</h2>
        <p className="text-gray-700 text-xl mb-6">{propertyData.location}</p>

        <div className="border-t border-gray-200 my-4"></div>

        {/* Property Features */}
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-purple-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7 2C4.79086 2 3 3.79086 3 6V7C3 9.20914 4.79086 11 7 11H13C15.2091 11 17 9.20914 17 7V6C17 3.79086 15.2091 2 13 2H7Z" />
              <path d="M2 13C2 12.4477 2.44772 12 3 12H17C17.5523 12 18 12.4477 18 13V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V13Z" />
            </svg>
            <span className="text-lg">{propertyData.beds} Beds</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-purple-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011-1h8a1 1 0 011 1v3h1a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V8a3 3 0 013-3h1V2zm9 0H6v3h8V2z"
                clipRule="evenodd"
              />
              <path d="M12 11a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-lg">{propertyData.baths} Baths</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-purple-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6z"
                clipRule="evenodd"
              />
              <path d="M4 8h12v2H4z" />
            </svg>
            <span className="text-lg">
              {propertyData.squareFeet.toLocaleString()} sq ft
            </span>
          </div>
        </div>
      </div>

      {/* View Details Button */}
      <div className="px-6 py-4">
        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg text-xl transition duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

// Skeleton Loading State
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

// Example usage with toggle button
const PropertyCardDemo: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setLoading(!loading)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Toggle {loading ? 'Loaded' : 'Skeleton'} View
        </button>
      </div>

      <PropertyCard isLoading={loading} />
    </div>
  );
};

export default PropertyCardDemo;
