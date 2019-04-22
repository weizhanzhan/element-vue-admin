<template>
<div>
    <div class="login_box">
      <div class="login_l_img"><img src="../../assets/images/login-img.png" /></div>
      <div class="login">
          <div class="login_logo"><a href="#"><img src="../../assets/images/login_logo.png" /></a></div>
          <div class="login_name">
               <p>后台管理系统</p>
          </div>
          <div>
              <input name="username" type="text" v-model="email"  placeholder="请输入登录邮箱" >
              <input name="password" placeholder="密码" v-model="password" type="password" id="password"  />
              <input value="登录" style="width:100%;" type="submit"  @click="login()">
          </div>
        
      </div>
      <div class="copyright"> weizhanzhan ©2018-2018 技术支持电话：000-00000000</div>
    </div>
</div>
</template>

<script>
import { login } from '@/api/user'
import User from '@/utils/design/login'
import qs from 'qs'
export default {
    data(){
        return {
            email:'375786117@qq.com',
            password:"123456",
        }
    },
    methods:{
        login(){
            let account = {
                email:this.email,
                password:this.password
            }       
            let user = new User(account)
            if(user.validate())           
                user.go_login()         
        }
    }
}
</script>

<style scoped>
@import '../../assets/login.css'

</style>
