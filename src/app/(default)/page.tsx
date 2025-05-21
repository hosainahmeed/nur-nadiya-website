/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import ReusableInput from '@/components/ui/custom-ui/ReusableInput';
import { Button, Form } from 'antd';
import React from 'react';

function Page() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };
  return (
    <div className="my-28">
      <Form form={form} onFinish={onFinish} layout="vertical">
        <ReusableInput
          label="Username"
          name="username"
          placeholder="Enter your username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        />
        <ReusableInput
          label="Email"
          name="email"
          placeholder="Enter your email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Page;
