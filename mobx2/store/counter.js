
import { makeAutoObservable } from 'mobx'

class counterStore {
    // 1.定义数据
    count = 0
    list = [1, 2, 3, 4, 5, 6]

    constructor() {
        // 2.将数据改写成响应式数据
        makeAutoObservable(this)
    }

    // 3.定义action函数
    addCount = () => {
        this.count++
    }

    // 定义计算属性
    get filrerList() {
        return this.list.filter(item => item > 2)
    }

    // 修改List
    addList = () => {
        this.list.push(7, 8, 9)
    }
}
// 4.实例化给react使用；

const counterstore = new counterStore();

export { counterstore }