import { Divider } from 'antd';
import React from 'react';
interface Ititle {
  role: string;
  description: string;
}
function FormTitle({ role, description }: Ititle) {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Are You a</h1>
        <h1 className="text-3xl font-bold text-pink mb-3">{role}?</h1>
        <p className="max-w-lg text-base">{description}</p>
        <Divider />
      </div>
    </div>
  );
}

export default FormTitle;
