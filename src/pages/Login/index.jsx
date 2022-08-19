import React from 'react'

// 引入资源相关
import logo from '@/assets/logo.png'
import './index.scss'

// 引入antd相关
import { Card } from 'antd'
import { Button, Checkbox, Form, Input, message } from 'antd';
import FormItem from 'antd/es/form/FormItem';

// 引入store相关
import useStore from '@/store';

// 引入路由相关
import { useNavigate } from 'react-router-dom';


// Login组件
export default function Login() {

    // 引入登录的store;
    const { loginStore } = useStore()

    // 设置登录成功后跳转的页面；
    const navigate = new useNavigate()

    // 登录成功后事件绑定
    async function onFinish(values) {

        const { mobile, code } = values
        await loginStore.getToken({ mobile, code })

        // 跳转到首页
        try {
            message.success('登录成功', 3);
            navigate('/', { replace: true })   //跳转的时候，不增加历史记录；
        } catch (error) {
            console.log('登录错误@@', error);
        }
    };

    //登录失败
    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo);
    };

    return (
        <div className='login'>
            <Card className='login-container'>
                <img className='login-logo' src={logo} alt="" />

                {/* 子项用的事件，需要在form上声明或引用一下 */}
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
