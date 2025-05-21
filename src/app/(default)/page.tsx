import PropertyCard from '@/components/ui/PropertyCard';
import React from 'react';

function page() {
  const propertyData = {
    price: '$1,00,000',
    title: 'Beachfront Villa',
    location: 'Miami, FL',
    beds: 3,
    baths: 2,
    squareFeet: 1500,
  };
  return (
    <div>
      <PropertyCard propertyData={propertyData} />
    </div>
  );
}

export default page;
