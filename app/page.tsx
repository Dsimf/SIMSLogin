"use client";

import React from 'react';
import { Breadcrumb, Layout, Menu, theme} from 'antd';
import { HomeOutlined,LoginOutlined, UserAddOutlined  } from '@ant-design/icons';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const { Header, Content, Footer } = Layout;


export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return( 
    <div >
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
      <Content style={{ padding: '0 48px',  backgroundSize:'cover' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
          <Breadcrumb.Item>Patient-Records</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer, minHeight: 280, padding: 24, borderRadius: borderRadiusLG}}>
            <h1 style={{opacity: '0.8'}}>SIMS MEDICAL CARE</h1>
              <div>
              <Carousel autoplay>
                  <div>
                       <h3 style={{backgroundImage: 'url("./images/img1.jpeg")', backgroundSize: 'cover', minHeight: '60vh'}} ></h3>
                  </div>
                  <div>
                       <h3 style={{backgroundImage: 'url("./images/img2.jpeg")', backgroundSize: 'cover', minHeight: '60vh'}}></h3>
                  </div>
                  <div>
                      <h3 style={{backgroundImage: 'url("./images/img3.jpeg")', backgroundSize: 'cover', minHeight: '60vh'}}></h3>
                  </div>
                  <div>
                      <h3 style={{backgroundImage: 'url("./images/img4.jpeg")', backgroundSize: 'cover', minHeight: '60vh'}}></h3>
                  </div>
                  <div>
                      <h3 style={{backgroundImage: 'url("./images/img5.jpeg")', backgroundSize: 'cover', minHeight: '60vh'}}></h3>
                  </div>
                  <div>
                      <h3 style={{backgroundImage: 'url("./images/img6.jpeg")', backgroundSize: 'cover', minHeight: '60vh'}}></h3>
                  </div>
              </Carousel>
              </div>
            </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Sims Medical Care ©{new Date().getFullYear()} Created by D-Sims
      </Footer>
    </Layout> 
    </div>
     )
    }
