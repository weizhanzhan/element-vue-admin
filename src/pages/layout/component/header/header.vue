<template>
    <el-header >         
        <div class="wrapper-left" style=" font-size: 12px;padding:0;display:flex">
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
            console.log(123)
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
    /* background-color: #373d41; 333744*/
    background-color: #ffffff;
    color: #fff;
    line-height: 60px;
    height: 60px;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
  .wrapper-left{
      float: left;
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
  .right-info{
      display:inline-block;
      font-size: 18px;
      width: 60px;
      height: 60px;
      text-align: center

  }
  .right-info img{
      width: 36px;
      height: 36px;
      border-radius: 18px;
      vertical-align: middle;
  }
  .right-msg{
      display:inline-block;
      font-size: 18px;
      width: 60px;
      height: 60px;
      text-align: center
  }
  .msg-num{
    font-size: 10px;
    background: red;
    padding:2px;
    border-radius: 4px;
  }
  .right-input{
      display: inline-block;
      padding:  0 15px
  }
  .info-dropdown{
      position: absolute;
      right: 0;
      background:#fff;
      z-index: 1;
      width: 20%;
      color: black;
      border: 1px solid #eee;
      box-shadow: 0 1px 3px rgba(0,0,0,.2);
      
  }
  .info-avatar{
      text-align: center;
      border-bottom: 1px solid #eaeaea;
  }
  .info-item{
      font-size: 10px;
      /* display: flex; */
      display: table;
      width: 100%;
      border-bottom: 1px solid #eaeaea;
      
  }
  .item-list{
      width: 100%;
      float: left;
      width: 33.3%;
  }
  .item-back{
      width: 100%;
      font-size: 15px;
      background: #f5f5f6
  }
  .num-dropdown{
      position: absolute;
      background: #fff;
      right: 4%;
      z-index: 1;
      border: 1px solid #eee;
      color: #000;

      box-shadow: 0 1px 3px rgba(0,0,0,.2);
      
  }
  .num-items{
      width: 250px;
      height: 300px;
      white-space: nowrap;
      overflow-x: scroll;  
            /* 内容会被裁剪，会以滚动条显示 */ 
      overflow-y: scroll;  /* 超出内容不可见 */ 
      white-space: nowrap;  /* 不换行 */ 
      text-align: left
  }
  .num-item{
      font-size: 10px;
      /* display: flex; */
      display: table;
      padding: 0 2px;
      width: 100%;
      border-bottom: 1px solid #eaeaea;
  }
  .num-list{
      border-bottom: 1px solid #eaeaea;
  }
</style>
