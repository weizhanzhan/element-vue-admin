import request from '../utils/request'
import { web_url ,dev_url} from './url'
export const getBlog =()=>{
    return request({
        url:`${web_url}/api/blog`,///blog
        method:'Get',
    })
}