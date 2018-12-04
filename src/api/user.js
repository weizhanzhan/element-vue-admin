import request from '../utils/request'
import { web_url ,dev_url} from './url'
//登录
export const login =(data)=>{
    return request({
        url:`${web_url}/api/users/login`,///blog
        method:'post',
        data
    })
}

//获取用户信息
export const getUser = () =>{
    return request({
        url:`${web_url}/api/users`,///blog
        method:'get',
    })
}

//获取用户留言
export const getMessage = () =>{
    return request({
        url:`${web_url}/api/message`,///blog
        method:'get',
    })
}

//获取个人信息
export const getMine = () => {
    return request({
        url:`${web_url}/api/current`,///blog
        method:'get',
    })

}