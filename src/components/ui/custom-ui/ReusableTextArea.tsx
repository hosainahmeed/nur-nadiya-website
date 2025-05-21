import React from 'react';
import { Input, Form } from 'antd';
import type { Rule } from 'antd/es/form';
import type { TextAreaProps } from 'antd/es/input/TextArea';

interface ReusableTextAreaProps extends TextAreaProps {
  label: string;
  name: string;
  rules?: Rule[];
}

const ReusableTextArea: React.FC<ReusableTextAreaProps> = ({
  label,
  name,
  rules,
  ...rest
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input.TextArea {...rest} />
    </Form.Item>
  );
};

export default ReusableTextArea;
