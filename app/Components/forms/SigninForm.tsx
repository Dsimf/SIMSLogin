"use client";

import React from 'react';
import { LockOutlined, MailOutlined, GoogleOutlined, HomeOutlined,LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Typography } from 'antd';
import {Layout, Menu, theme,} from 'antd';

const { Header, Content, Footer } = Layout;


export default function SigninForm() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    // Handle login form submission logic here (e.g., send to backend API)
  };

  return (
   <div>
     <Layout style={{ backgroundImage: 'url("./images/med.jpg")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex'}}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark"  mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1, minWidth: 0 }}> 
        <Menu.Item key="home">
          <HomeOutlined />
          <a href='/'><span>Home</span></a>
        </Menu.Item>
        <Menu.Item key="login">
          <LoginOutlined />
          <a href='Signin'><span>Login</span></a>
        </Menu.Item>
        <Menu.Item key="register">
          <UserAddOutlined />
          <a href='Signup'><span>Register</span></a>
        </Menu.Item>
        </Menu>
      </Header>
     <div style={{backgroundImage: 'url("./images/med.jpg")', backgroundSize: 'cover',minHeight: '100vh', display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
      <Form
        style={{ backgroundColor: 'white', padding: '0px 16px 16px 16px', borderRadius: '16px' }}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography.Title>Hey welcome back</Typography.Title>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Enter Your Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Enter Your Password" />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
              <a href="/forgot-password" className="login-form-forgot">Forgot password</a>
          </Flex>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Login
          </Button>
          <br />
          Or Continue With
          <br />
          <Button type="primary" href="https://google.com">
            <GoogleOutlined className="site-form-item-icon" /> Google
          </Button>
          <br />
            <a href="/Signup">Don&apos;t have an account? Register</a>
        </Form.Item>
      </Form>
    </div>
    <Footer style={{ textAlign: 'center' }}>
        Sims Medical Care ©{new Date().getFullYear()} Created by D-Sims
      </Footer>
    </Layout> 
   </div>
  );
};


