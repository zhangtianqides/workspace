import React, { createContext } from 'react'
import loginStore from './login.Store';

// 封装导出业务的方法
class RootStore {
    constructor() {
        // 对子模块实例化操作
        this.loginStore = new loginStore()
    }
}


// 实例化操作；
const rootStore = new RootStore()

const context = createContext(rootStore)

const useStore = () => React.useContext(context)

export default useStore 