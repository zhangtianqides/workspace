import React from 'react';
import './index.scss';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


export default function GeekLayout() {

    return (
        <div>
            <Layout>
                <Sider
                    breakpoint="lg"
                    theme="light"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                            (icon, index) => ({
                                key: String(index + 1),
                                icon: React.createElement(icon),
                                label: `nav ${index + 1}`,
                            }),
                        )}
                    />
                </Sider>
                <Layout>
                    <Header
                        className="site-layout-sub-header-background"
                        style={{
                            padding: 0,
                        }}
                    />
                    <Content
                        style={{
                            margin: '24px 16px 0',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            内容区
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        2233
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}
