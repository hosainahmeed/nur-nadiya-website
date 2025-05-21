import { IstartHeading } from '@/lib/types';
import React from 'react';

function StartHeading({ title, ctaBtn, callbackBtn = false }: IstartHeading) {
  return (
    <div className="container mx-auto my-12">
      <div className="flex items-center justify-between">
        <div className="h-full flex items-center gap-2">
          <div className="h-[42px] w-[6px] rounded-tr-full rounded-br-full bg-pink"></div>
          <h1
            style={{
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '30px',
              letterSpacing: '0px',
              color: 'black',
            }}
          >
            {title}
          </h1>
        </div>
        {callbackBtn && (
          <div className="flex items-center justify-center gap-3">
            <h1
              onClick={ctaBtn}
              className="text-primary underline cursor-pointer"
            >
              View More{' '}
            </h1>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.693045 15.3067C0.302521 14.9162 0.30252 14.283 0.693044 13.8925L12.1852 2.40033L3.2857 2.40033C2.73341 2.40033 2.2857 1.95261 2.2857 1.40033C2.2857 0.848045 2.73342 0.40033 3.2857 0.40033L14.5994 0.400333C15.1517 0.400333 15.5994 0.848048 15.5994 1.40033L15.5994 12.714C15.5994 13.2663 15.1517 13.714 14.5994 13.714C14.0471 13.714 13.5994 13.2663 13.5994 12.714L13.5994 3.81455L2.10726 15.3067C1.71673 15.6972 1.08357 15.6972 0.693045 15.3067Z"
                fill="#3B82F6"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default StartHeading;
