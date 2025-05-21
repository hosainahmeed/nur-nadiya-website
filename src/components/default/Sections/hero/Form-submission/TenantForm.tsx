/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import ReusableDatePicker from '@/components/ui/custom-ui/ReusableDatePicker';
import ReusableInput from '@/components/ui/custom-ui/ReusableInput';
import ReusableSelect from '@/components/ui/custom-ui/ReusableSelect';
import ReusableTextArea from '@/components/ui/custom-ui/ReusableTextArea';
import CustomButton from '@/components/ui/CustomButton';
import InqueryIcon from '@/components/ui/Svg-icons/InqueryIcon';
import { Card, Form } from 'antd';
import FormTitle from './FormTitle';

function TenantForm() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  const selectOptions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Orange', value: 'orange' },
    { label: 'Banana', value: 'banana' },
  ];
  return (
    <Card
      style={{
        backgroundColor: '#F3E8FF',
      }}
      className="!w-[90vw] lg:!w-full"
    >
      <FormTitle
        role="Tenant"
        description="Receive personalised service through the enquiry form as agents shortlist homes suitable just for you!
"
      />
      <Form
        requiredMark={false}
        form={form}
        onFinish={onFinish}
        layout="vertical"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-2">
          <div className="col-span-2">
            <ReusableInput
              label="Full Name"
              name="name"
              placeholder="Enter your full name"
              rules={[
                { required: true, message: "you can't leave this blank!" },
              ]}
            />
          </div>
          <div className="col-span-2">
            <ReusableInput
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              rules={[
                { required: true, message: "you can't leave this blank!" },
                { type: 'email', message: "you can't leave this blank!" },
              ]}
            />
          </div>
          <div className="col-span-2">
            <ReusableInput
              label="Phone Number"
              name="number"
              placeholder="Enter your Phone Number"
              rules={[
                { required: true, message: "you can't leave this blank!" },
                { type: 'email', message: "you can't leave this blank!" },
              ]}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <ReusableSelect
              label="Property Rental Type:"
              name="rental_type"
              placeholder="Select a fruit"
              options={selectOptions}
              rules={[
                { required: true, message: "you can't leave this blank!" },
              ]}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <ReusableDatePicker
              label="Move-in Date (Optional )"
              name="date"
              rules={[{ required: false }]}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <ReusableSelect
              label="Number of Bedrooms"
              name="bedroom"
              placeholder="Select One"
              options={selectOptions}
              rules={[
                { required: true, message: "you can't leave this blank!" },
              ]}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <ReusableInput
              label="Budget Range"
              name="budget"
              placeholder="Enter your Budget Range"
              rules={[
                { required: true, message: "you can't leave this blank!" },
              ]}
            />
          </div>
          <div className="col-span-2">
            <ReusableTextArea
              label="Additional Comments/Preferences"
              name="description"
              placeholder="Please share any additional details or preferences"
              rows={4}
              rules={[
                { required: true, message: "you can't leave this blank!" },
              ]}
            />
          </div>
        </div>
        <Form.Item>
          <CustomButton icon={<InqueryIcon />} label="Enquire Now" />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default TenantForm;
