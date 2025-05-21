import React from 'react';
import { Select, Form } from 'antd';
import type { Rule } from 'antd/es/form';
import type { SelectProps } from 'antd/es/select';

interface OptionType {
  label: string;
  value: string | number;
}

interface ReusableSelectProps extends Omit<SelectProps, 'options'> {
  label: string;
  name: string;
  rules?: Rule[];
  options: OptionType[];
}

const ReusableSelect: React.FC<ReusableSelectProps> = ({
  label,
  name,
  rules,
  options,
  ...rest
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Select
        options={options}
        {...rest}
        className='!h-[35px]'
      />
    </Form.Item>
  );
};

export default ReusableSelect;
