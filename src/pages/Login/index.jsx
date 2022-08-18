import React from 'react'
import logo from '@/assets/logo.png'
import './index.scss'

import { Card } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';



export default function Login() {

    return (
        <div className='login'>
            <Card className='login-container'>
                <img className='login-logo' src={logo} alt="" />

                {/* 子项用的事件，需要在form上声明或引用一下 */}
                <Form
                    initialValues={{ remember: true, }}
                    validateTrigger={['onBlur', 'onChange']}>
                    {/* 登录账号 */}
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            message: '请输入手机号'
                        },
                        {
                            pattern: /^1[3-9]\d{9}$/,
                            message: '请输入正确的手机号',
                            validateTrigger: 'onBlur'
                        }
                        ]}>
                        <Input size='large' placeholder='请输入手机号码' />
                    </Form.Item>
                    {/* 登录密码 */}
                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: '请输入密码',
                        },
                        {
                            len: 6,
                            message: '请输入6位密码',
                            validateTrigger: 'onBlur'
                        }
                        ]}>
                        <Input.Password size='large' placeholder='请输入密码' />
                    </Form.Item>
                    {/* 隐私协议条款 */}
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox className='login-checkbox-lable'>我已阅读并同意<a href="/">《用户协议》</a>和<a href="/">《隐私条款》</a></Checkbox>
                    </Form.Item>

                    <FormItem>
                        <Button type="primary" htmlType="submit" size='langer' block>登录</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    )
}
