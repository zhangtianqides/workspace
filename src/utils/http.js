// 封装axios
// 实例化  请求拦截器   响应拦截器

import axios from 'axios'
import { getToken } from './token';

const http = axios.create({

    //设置访问的基本URL
    baseURL: 'http://geek.itheima.net/v1_0',

    // 设置请求超时的时长；
    timeout: 5000
})

// 添加请求拦截器
http.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers.Authorizatio = `Bearer${token}`
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((response) => {
    // 请求码正确的时候，执行；
    return response.data
}, error => {
    // 请求码错误的时候，返回原因；
    return Promise.reject(error)
})

export default http 