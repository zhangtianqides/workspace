
import { makeAutoObservable } from 'mobx'

export default class ListStore {
    list = ['react', 'vue']
    constructor() {
        makeAutoObservable(this)
    }

    addList = () => {
        this.list.push('angular')
    }
}

