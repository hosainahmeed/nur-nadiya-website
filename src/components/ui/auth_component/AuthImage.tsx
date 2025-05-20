import Image from 'next/image';
import React from 'react';

function AuthImage() {
  return (
    <div className='h-screen w-full'>
      <Image
          src="/board.png"
          alt="Decorative illustration"
          width={800}
          height={800}
          className="object-left-bottom object-cover w-full h-full"
          priority
        />
      
    </div>
  );
}

export default AuthImage;
