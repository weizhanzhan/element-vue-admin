<template>
    <div style="display:flex;">
        <menu-list></menu-list>
        <el-container style="min-height:100vh" >
            <el-header class="home-header">
                <menu-header ></menu-header>   
            </el-header>
            <div style="width:100%;background-color: #eee;margin-top:12px">
                <el-row style="padding:12px 0 12px 24px;background:#ffffff">
                    <el-col :span="24">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item 
                                v-for="list in levelList" 
                                :key="list.name" 
                                :to="{ path: list.path }"
                            >
                                {{list.name}}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                </el-row> 
                <el-row style="background:#f0f2f5;">
                    <el-col :span="24" v-loading="loading" > 
                        <router-view ></router-view>
                     </el-col>
                </el-row>
            </div> 
        </el-container>
    </div>
    <!-- </el-container> -->
</template>

<script>
import MenuHeader from './component/header/header'
import MenuList from './component/list/list'
import { mapGetters, mapActions } from 'vuex'
export default {
     name:"Home",
     components:{
  
         MenuHeader,
         MenuList,
     },
     data(){
         return{
            levelList:[]
         }
         
     },
     computed:{
         ...mapGetters(['loading']),
         ...mapGetters(['permission_routers'])
     },
     created(){
     },
     watch:{
         '$route':{
             handler(){
                 console.log(this.$route)
                let matched = this.$route.matched.filter(item => item.name)
            
                let firstName=matched[0]
              
        
                this.levelList=[]
                if(firstName.name=='Dashboard'){
                   
                    this.levelList.push(firstName)
                }else{
                    this.levelList=[{path:'/',name:'Dashboard'}].concat(matched)
                }
             },
             immediate:true
            
         }
     }
   
}
</script>

<style scoped>

.home-header{
    text-align: right; 
    font-size: 12px;
    padding:0;box-shadow: 0 1px 4px rgba(0,21,41,.08)
}
</style>
