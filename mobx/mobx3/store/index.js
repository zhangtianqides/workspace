// 组合子模块，封装供业务使用的方法；

import React, { createContext } from 'react'
import counterStore from './counter.Stroe'
import ListStore from './list.Store'

// 封装导出业务的方法
class RootStore {
    constructor() {
        // 对子模块实例化操作
        this.counterStore = new counterStore()
        this.ListStore = new ListStore()
    }
}

// 实例化操作；
const rootStore = new RootStore()

const context = createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }