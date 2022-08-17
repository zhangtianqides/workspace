
import { makeAutoObservable } from 'mobx'

class counterStore {
    // 1.定义数据
    count = 0
    constructor() {
        // 2.将数据改写成响应式数据
        makeAutoObservable(this)
    }

    // 3.定义action函数
    addCount = () => {
        this.count++
    }
}
// 4.实例化给react使用；

const counterstore = new counterStore();

export { counterstore }