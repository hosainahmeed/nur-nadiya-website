import React from 'react';
import { Input, Form } from 'antd';
import type { Rule } from 'antd/es/form';
import type { InputProps } from 'antd/es/input';

interface ReusableInputProps extends InputProps {
  label: string;
  name: string;
  rules?: Rule[];
}

const ReusableInput: React.FC<ReusableInputProps> = ({
  label,
  name,
  rules,
  ...rest
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input
        style={{
          width: 540,
          height: 50,
          paddingTop: '10px',
          paddingRight: '14px',
          paddingBottom: '10px',
          paddingLeft: '14px',
          gap: '10px',
          borderRadius: '4px',
          borderWidth: '0.5px',
        }}
        {...rest}
      />
    </Form.Item>
  );
};

export default ReusableInput;
