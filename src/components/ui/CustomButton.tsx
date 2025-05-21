import React from 'react';

interface Ibutton {
  label: string;
  ctaFn?: () => void;
}

function CustomButton({ label }: Ibutton) {
  return (
    <div className="px-6 py-4">
      <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg text-xl transition duration-200">
        {label}
      </button>
    </div>
  );
}

export default CustomButton;
