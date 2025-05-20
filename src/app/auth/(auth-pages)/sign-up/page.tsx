'use client';
import AuthImage from '@/components/ui/auth_component/AuthImage';
import { Button, Input, Divider, Typography, Form, Layout, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Text, Title } = Typography;
const { Content } = Layout;
function page() {
  return (
    <Layout className="!h-screen !bg-white">
      <Content className="flex items-center justify-center bg-white container mx-auto">
        <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 h-screen relative">
          <div className="w-full h-screen flex items-center justify-center">
            <AuthImage />
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-2/5 h-screen  flex items-center justify-center p-4 sm:p-8 md:p-12">
          <div className="w-full max-w-md">
            <Space direction="vertical" size="large" className="w-full">
              {/* Logo/Brand */}
              <div className="text-start">
                <Title level={3} className="mt-4 !mb-0">
                  Create Your Account
                </Title>
                <Text type="secondary">
                  Join us today and start planning your events or managing your
                  services seamlessly!
                </Text>
              </div>

              {/* Login Form */}
              <Form
                requiredMark={false}
                layout="vertical"
                className="w-full"
                initialValues={{ remember: true }}
              >
                <Form.Item
                  name="name"
                  label={<Text strong>Name</Text>}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                  className="mb-4"
                >
                  <Input
                    placeholder="Enter your full name"
                    size="large"
                    allowClear
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  label={<Text strong>Email address</Text>}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email address!',
                    },
                    {
                      type: 'email',
                      message: 'Please enter a valid email address!',
                    },
                  ]}
                  className="mb-4"
                >
                  <Input
                    placeholder="Enter your email address"
                    size="large"
                    allowClear
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label={<Text strong>Password</Text>}
                  rules={[
                    { required: true, message: 'Please input your password!' },
                    {
                      min: 6,
                      message: 'Password must be at least 6 characters!',
                    },
                  ]}
                  className="mb-4"
                  hasFeedback
                >
                  <Input.Password
                    placeholder="Enter your password"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  label={<Text strong>Confirm Password</Text>}
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error('The passwords do not match!')
                        );
                      },
                    }),
                  ]}
                  className="mb-4"
                >
                  <Input.Password
                    placeholder="Confirm your password"
                    size="large"
                  />
                </Form.Item>

                <Button
                  htmlType="submit"
                  size="large"
                  block
                  className="!h-11 !text-white bg-pink font-medium"
                >
                  Sign up
                </Button>

                <Divider plain className="text-gray-400 my-6">
                  or continue with
                </Divider>

                <Button
                  size="large"
                  block
                  className="!h-11 font-medium flex items-center justify-center"
                >
                  <Image
                    src="/icons/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-3"
                  />
                  Sign up with Google
                </Button>

                <div className="text-center mt-6">
                  <Text type="secondary">
                    Already have an account?
                    <Link
                      href="/auth/sign-in"
                      className="font-medium text-pink hover:underline"
                    >
                      Sign in
                    </Link>
                  </Text>
                </div>
              </Form>
            </Space>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default page;
