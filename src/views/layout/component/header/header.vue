<template>
    <el-header >         
        <div class="wrapper-left">
            <div 
                v-if="!leftMenuStatus"
                class="iconfont menu-fold" 
                @click="change_left_status()">&#xe600;
            </div>
            <div 
                v-else
                class="iconfont menu-fold" 
                @click="change_left_status()">&#xe7e2;
            </div>    
            <div style="line-height:90px">
                <el-color-picker v-model="color1"></el-color-picker> 
            </div>  
        </div> 
        
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <router-link to="/yours/info">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                </router-link>
                
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item @click.native="logout()">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span style="color:#000000">{{name}}</span>
    </el-header>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name:"home-header",
    data(){
        return{
            selectid:"",
            color1:'#333744'
        }
    },
    computed : {
        ...mapGetters(['leftMenuStatus','name']),
    },
    methods:{
        test(val){
            if(val=="close")
              this.selectid=""
            else
              this.selectid=val
        },
        select(){
            return{
                "background":"#fff"
            }
        },
        change_left_status () {
            this.$store.dispatch('changeMenuStatus',!this.leftMenuStatus)
        },
        logout() {
       
            this.$store.dispatch('logout').then(data=>{
                location.reload()
            })
        }
    },
    watch:{
        color1(color){
            this.$store.dispatch('changeMenuColor',color)
        }
    }


}
</script>

<style scoped>
 a{
     text-decoration: none
 }
 .test{
     background: #2a2f32;
 }
 .menu-fold{
     color:black;
     font-size:20px;
     padding: 0 20px;
     cursor: pointer;
 }
 .el-header {
    background-color: #ffffff;
    color: #fff;
    line-height: 60px;
    height: 60px;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
  .wrapper-left{
      float: left;
       font-size: 12px;padding:0;display:flex
  }
  .wrapper-left img{
      height: 60px;
      line-height: 60px
  }
  .wrapper-right{
      float: right;
      height: 60px;
      margin:0;padding:0;font-size: 0;
      
  }
</style>
