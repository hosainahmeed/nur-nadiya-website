import React from 'react';
import { DatePicker, Form } from 'antd';
import type { Rule } from 'antd/es/form';
import type { DatePickerProps } from 'antd/es/date-picker';

interface ReusableDatePickerProps extends DatePickerProps {
  label: string;
  name: string;
  rules?: Rule[];
}

const ReusableDatePicker: React.FC<ReusableDatePickerProps> = ({
  label,
  name,
  rules,
  ...rest
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <DatePicker
        style={{
          width: '100%',
          height: 34,
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

export default ReusableDatePicker;
