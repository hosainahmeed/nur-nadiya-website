'use client';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { PropertyCardProps } from '@/lib/types';



const PropertyCard: React.FC<PropertyCardProps> = ({ propertyData }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Property Image */}
      <div className="relative">
        <Image
          width={1500}
          height={1500}
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
      <CustomButton  label='View Details' />
    </div>
  );
};

export default PropertyCard;
