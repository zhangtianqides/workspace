// login模块

// 业务逻辑：登录组件要通过账号密码想服务器发送请求，服务器会将token返回，这样，在我们后续访问页面的时候，都可以使用token作为我们的身份凭证；
// 数据信息：组件上存入的token可以在Context上找到（前提是函数式组件）

import { makeAutoObservable } from 'mobx'
import http from '@/utils/http'

export default class loginStore {
    token = ''
    constructor() {
        // 数据响应式处理
        makeAutoObservable(this)
    }

    getTkoke = async ({ mobile, code }) => {
        // 调用请求接口,将用户的账号和密码传给后端，并将验证结果返回
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations', { mobile, code })
        // 存入token
        this.token = res.data.token
    }
}
