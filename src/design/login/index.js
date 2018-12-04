import { login } from '@/api/user'
import { isEmail } from '@/utils/validate'
import { Message } from 'element-ui';
import router from '@/routes'
import store from '@/store'
import qs from 'qs'


class User {
    constructor(user_info){
        this.user=user_info
    }
    validate() {
        if(isEmail(this.user.email)){           
            return true
        } 
        else{   
            Message.error('邮箱不合法')        
            return false
        }
    }
     go_login() {
        store.dispatch('Login',qs.stringify(this.user)).then(data=>{
            console.log(data)
            if(data.state){
                this.get_info()
                Message.success(data.msg)
                router.push('/')
            }     
        })
        .catch(error=>{
            Message.error(error.msg)
        })
    }
    get_info() {
        console.log("get info")
    }
}

export default User
