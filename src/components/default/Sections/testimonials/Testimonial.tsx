'use client';
import React from 'react';
import Slider from 'react-slick';
import './tes.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface TestimonialItem {
  name: string;
  image: string;
  text: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'EMILIANO AQUILANI',
    image:
      'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'ANNA ITURBE',
    image:
      'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'LARA ATKINSON',
    image:
      'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'IAN OWEN',
    image:
      'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'MICHAEL TEDDY',
    image:
      'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
];

const Testimonial: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 8500,
    speed: 450,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1440, // <1170px wide screens
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1200, // <768px wide screens
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto !my-28">
      <div>
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map(({ name, image, text }, index) => (
            <div className="item" key={index}>
              <div className="shadow-effect">
                <Image
                  width={400}
                  height={400}
                  className="img-circle"
                  src={image}
                  alt={name}
                />
                <h1 className='text-xl font-bold'>{name}</h1>
                <div className="flex items-center justify-center gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.50118 1.23379C5.76447 0.423493 6.91083 0.423492 7.17411 1.23379L7.91735 3.52123C8.03509 3.88361 8.37278 4.12896 8.75381 4.12896L11.159 4.12896C12.011 4.12896 12.3652 5.21922 11.6759 5.72001L9.73012 7.13373C9.42186 7.35769 9.29287 7.75467 9.41061 8.11705L10.1538 10.4045C10.4171 11.2148 9.48971 11.8886 8.80042 11.3878L6.85461 9.97409C6.54635 9.75013 6.12894 9.75013 5.82068 9.97409L3.87487 11.3878C3.18559 11.8886 2.25816 11.2148 2.52144 10.4045L3.26468 8.11705C3.38242 7.75467 3.25344 7.35769 2.94518 7.13373L0.999366 5.72001C0.310081 5.21922 0.664326 4.12896 1.51633 4.12896L3.92148 4.12896C4.30251 4.12896 4.6402 3.88361 4.75795 3.52123L5.50118 1.23379Z"
                          fill="#F59E0B"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <p className='!text-sm'>{text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
