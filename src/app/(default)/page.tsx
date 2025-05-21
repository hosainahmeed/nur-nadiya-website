import Testimonial from '@/components/default/Sections/testimonials/Testimonial';
import React from 'react';

function page() {
  return (
    <div className="container flex items-center gap-2 lg:flex-row flex-col justify-between mx-auto my-28">
      <Testimonial />
    </div>
  );
}

export default page;
