// 封装token到localstorage

// 封装的时候要注意他的返回值(return)

const key = 'pc-key'

const setToken = (token) => {
    return window.localStorage.setItem(key, token)
}

const getToken = () => {
    return window.localStorage.getItem(key)
}

const removeToken = () => {
    return window.localStorage.removeItem(key)
}

export {
    setToken,
    getToken,
    removeToken
}
