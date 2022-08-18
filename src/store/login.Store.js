// login模块
import { makeAutoObservable } from 'mobx'
import http from '@/utils/http'

export default class loginStore {
    token = ''
    constructor() {
        // 数据响应式处理
        makeAutoObservable(this)
    }

    getTkoke = async ({ mobile, code }) => {
        // 调用请求接口
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations', { mobile, code })
        // 存入token
        this.token = res.data.token
    }
}
