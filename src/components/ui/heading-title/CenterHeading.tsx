import { IcenterHeading } from '@/lib/types';
import React from 'react';

function CenterHeading({ title, subTitle }: IcenterHeading) {
  return (
    <div className="flex container mx-auto items-center justify-center flex-col gap-3">
      <h1
        style={{
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#767676',
        }}
      >
        {subTitle}
      </p>
    </div>
  );
}

export default CenterHeading;
