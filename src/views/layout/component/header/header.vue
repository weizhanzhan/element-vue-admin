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
 import generateColors from '../../../../utils/color'
 import objectAssign from 'object-assign'
export default {
    name:"home-header",
    data(){
        return{
            selectid:"",
            color1:'#333744',
            primaryColor:'#333744',
            colors: {
                primary: '#409eff'
            },
            originalStyle:'',
            originalStylesheetCount:-1
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
        },
        getStyleTemplate (data) {
            const colorMap = {
            '#3a8ee6': 'shade-1',
            '#409eff': 'primary',
            '#53a8ff': 'light-1',
            '#66b1ff': 'light-2',
            '#79bbff': 'light-3',
            '#8cc5ff': 'light-4',
            '#a0cfff': 'light-5',
            '#b3d8ff': 'light-6',
            '#c6e2ff': 'light-7',
            '#d9ecff': 'light-8',
            '#ecf5ff': 'light-9'
            }
            Object.keys(colorMap).forEach(key => {
            const value = colorMap[key]
            data = data.replace(new RegExp(key, 'ig'), value)
            })
            return data
        },
        getFile (url, isBlob = false) {
            return new Promise((resolve, reject) => {
                const client = new XMLHttpRequest()
                client.responseType = isBlob ? 'blob' : ''
                client.onreadystatechange = () => {
                    if (client.readyState !== 4) {
                    return
                    }
                    if (client.status === 200) {
                    const urlArr = client.responseURL.split('/')
                    resolve({
                        data: client.response,
                        url: urlArr[urlArr.length - 1]
                    })
                    } else {
                    reject(new Error(client.statusText))
                    }
                }
                client.open('GET', url)
                client.send()
            })
        },

        getIndexStyle () {
            this.getFile('//unpkg.com/element-ui/lib/theme-chalk/index.css')
                .then(({ data }) => {           
                    this.originalStyle = this.getStyleTemplate(data)
                 })
        },
        writeNewStyle(){
            let cssText = this.originalStyle
  
            Object.keys(this.colors).forEach(key => {
                cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + this.colors[key])
            })
            if (this.originalStylesheetCount === document.styleSheets.length) {
                const style = document.createElement('style')
                style.innerText = cssText
                document.head.appendChild(style)
            } else {
                document.head.lastChild.innerText = cssText
            }
        }
    },
    created(){
        this.getIndexStyle()
    },
     mounted () {
      this.$nextTick(() => {
        this.originalStylesheetCount = document.styleSheets.length
      })
    },
    watch:{
        color1(color){
            this.primaryColor = color
            this.colors.primary = color

            this.colors = objectAssign({}, this.colors, generateColors(this.colors.primary))
         
            this.writeNewStyle()
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
