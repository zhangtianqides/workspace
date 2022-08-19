// 先判断token是否存在，
// 如果存在直接渲染，如果不存在，重新定向到登录页面

// 高阶组件：就是把一个组件当成另外一个组件的参数传入，通过一定的判定，返回一个新的组件

import { getToken } from '@/utils';
import { Navigate } from 'react-router-dom';

export default function AuthComponents({ children }) {
    const isToken = getToken()
    if (isToken) {
        return <>{children}</>
    } else {
        return <Navigate to='/login' replace />
    }
}

// 使用方法:<AuthComponents><Layout><AuthComponents/>
// 登录:<><layout><>
// 不登录:<Navigate to='/logon' replace />
// 目的:拦截直接通过链接访问页面的情况