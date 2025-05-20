'use client';
import { Button, Input, Divider, Typography, Form, Layout, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Text, Title } = Typography;
const { Content } = Layout;

export default function LoginPage() {
  return (
    <Layout className="!h-screen !bg-white">
      <Content className="flex items-center justify-center bg-white container mx-auto">
        <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 h-screen relative">
          <div className="w-full h-screen flex items-center justify-center">
            <Image
              src="/board.png"
              alt="Decorative illustration"
              width={800}
              height={800}
              className="object-left-bottom object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-2/5 h-screen  flex items-center justify-center p-4 sm:p-8 md:p-12">
          <div className="w-full max-w-md">
            <Space direction="vertical" size="large" className="w-full">
              {/* Logo/Brand */}
              <div className="text-start">
                <Image
                  src={'/brand.svg'}
                  width={120}
                  height={120}
                  alt="Company Logo"
                  className="w-auto h-16 sm:h-20 md:h-24"
                  priority
                />
                <Title level={3} className="mt-4 !mb-0">
                  Login to Account
                </Title>
                <Text type="secondary">
                  Please enter your email and password to continue
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
                  name="username"
                  label={<Text strong>Email address</Text>}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email address!',
                    },
                  ]}
                  className="mb-4"
                >
                  <Input
                    placeholder="Enter your email or username"
                    size="large"
                    allowClear
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label={<Text strong>Password</Text>}
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                  className="mb-2"
                >
                  <Input.Password
                    placeholder="Enter your password"
                    size="large"
                  />
                </Form.Item>

                <div className="flex justify-between items-center mb-6">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-2" />
                      <Text>Remember me</Text>
                    </label>
                  </Form.Item>

                  <Link
                    href="/forgot-password"
                    className="text-sm hover:text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  htmlType="submit"
                  size="large"
                  block
                  className="!h-11 !text-white bg-pink font-medium"
                >
                  Sign in
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
                  Sign in with Google
                </Button>

                <div className="text-center mt-6">
                  <Text type="secondary">
                    Don&#39;t have an account?{' '}
                    <Link
                      href="/auth/sign-up"
                      className="font-medium hover:underline"
                    >
                      Sign up
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
