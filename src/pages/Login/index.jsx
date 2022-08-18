import React from 'react'
import logo from '@/assets/logo.png'
import './index.scss'

import { Card } from 'antd'
import { Button, Checkbox, Form, Input, message } from 'antd';
import FormItem from 'antd/es/form/FormItem';

import useStore from '@/store';

import { useNavigate } from 'react-router-dom';

export default function Login() {

    const { loginStore } = useStore()
    const navigate = new useNavigate()

    async function onFinish(values) {

        const { mobile, code } = values
        await loginStore.getTkoke({ mobile, code })

        // 跳转到首页
        try {
            message.success('登录成功', 3);
            navigate('/', { replace: true })
        } catch (error) {
            console.log('密码错误', error);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo);
    };

    return (
        <div className='login'>
            <Card className='login-container'>
                <img className='login-logo' src={logo} alt="" />

                {/* 子项用的事件，需要在form上声明或引用一下 */}
                {/*  */}
                <Form
                    // 表单属性
                    initialValues={{
                        remember: true
                    }}
                    validateTrigger={['onBlur', 'onChange']}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">

                    {/* 登录账号 */}
                    <Form.Item
                        name="mobile"
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
                        name="code"
                        rules={[{
                            required: true,
                            message: '请输入密码',
                        },
                        {
                            len: 6,
                            message: '密码是246810',
                            validateTrigger: 'onBlur'
                        }
                        ]}>
                        <Input.Password size='large' placeholder='请输入密码' />
                    </Form.Item>

                    {/* 隐私协议条款 */}
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox className='login-checkbox-lable'>我已阅读并同意<a href="/">《用户协议》</a>和<a href="/">《隐私条款》</a></Checkbox>
                    </Form.Item>

                    {/* 单选按钮 */}
                    <FormItem>
                        <Button type="primary" htmlType="submit" size='langer' block>登录</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    )
}
