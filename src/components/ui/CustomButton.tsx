import React from 'react';

interface Ibutton {
  label: string;
  ctaFn?: () => void;
  className?: string;
}

function CustomButton({ label, ctaFn, className }: Ibutton) {
  return (
    <div className="px-6 py-4 !w-full">
      <button
        className={`w-full cursor-pointer bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-md text-xl transition duration-200 ${
          className || ''
        }`}
        onClick={ctaFn}
      >
        {label}
      </button>
    </div>
  );
}

export default CustomButton;
