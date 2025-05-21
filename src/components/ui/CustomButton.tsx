/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface Ibutton {
  label: string;
  icon?: any;
  ctaFn?: () => void;
  className?: string;
}

function CustomButton({ label, ctaFn, className, icon }: Ibutton) {
  return (
    <div className="!w-full">
      <button
        className={`w-full flex items-center justify-center gap-2 cursor-pointer bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-md text-xl transition duration-200 ${
          className || ''
        }`}
        onClick={ctaFn}
      >
        {icon} {label}
      </button>
    </div>
  );
}

export default CustomButton;
