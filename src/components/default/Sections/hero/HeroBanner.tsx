'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#111]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 h-screen w-full">
        <Image
          width={1920}
          height={1080}
          src="/main.jpg"
          alt="Heritage landscape"
          className="h-full w-full object-cover brightness-[0.65]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto flex h-full flex-col pb-5 items-center justify-center px-4 text-center !text-white">

        {/* Main heading with animated underline */}
        <div className="relative mb-4">
          <motion.h1
            className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Rent A Home in Singapore
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-4xl text-lg !text-white/80 sm:text-xl md:text-2xl"
        >
          Seamless Property Search, Inquiry & Agent Connection—All in One Place.Browse listings, submit rental inquiries instantly, and connect with trusted agents—no login required.
        </motion.p>

        {/* CTA Button */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className="mb-12 rounded-md border border-dashed border-white/30 p-2"
        >
          <Link href={'/auth/sign-in'}>
            <Button className="!rounded-md bg-pink px-10 pt-6 pb-7 text-xl font-semibold transition-all duration-300 hover:bg-pink hover:shadow-lg hover:shadow-blue-900/30 sm:px-12 sm:text-2xl md:px-16 md:text-3xl">
              Start Now
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-blue-500/10 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-purple-500/10 to-transparent"
      />
    </div>
  );
};

export default HeroBanner;
