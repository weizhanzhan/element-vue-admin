import Cookies from 'js-cookie'

const TokenKey= 'amdin-token'

export const getToken = () => {
    return Cookies.get(TokenKey)
}

export const setToken = Token =>{
    return Cookies.set(TokenKey,Token)
}

export const removeToken = () =>{
    return Cookies.remove(TokenKey)
} 