import LandlordForm from '@/components/default/Sections/hero/Form-submission/LandlordForm';
import TenentForm from '@/components/default/Sections/hero/Form-submission/TenantForm';
import React from 'react';

function TenentOrLandlord() {
  return (
    <div className="container flex items-center gap-2 lg:flex-row flex-col justify-between mx-auto">
      <div className="flex-1">
        <TenentForm />
      </div>
      <div className="flex-1">
        <LandlordForm />
      </div>
    </div>
  );
}

export default TenentOrLandlord;
