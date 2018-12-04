import request from '../utils/request'
export const getCategory =()=>{
    return request({
        url:'https://www.easy-mock.com/mock/5ba993ebd7eb4275f939a4e9/admin/category',///categories
        method:'Get',
    })
}