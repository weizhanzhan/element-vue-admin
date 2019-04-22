<template>
    <el-container> 
        <div class="index-head">
            <start-hearder></start-hearder>
            <head-card></head-card>
            <div class="head-content" >
                <el-main class="head-content-main">
                    <div class="head-content-main-left">             
                         <my-project></my-project>
                    </div>
                    <div class="head-content-main-right">
                        <blog-list></blog-list>
                        <team-list></team-list>               
                    </div>
                </el-main>
            </div>
        </div>
    </el-container>
</template>

<script>
import MyProject from './project'
import BlogList from './list'
import TeamList from './team-list'
import StartHearder from './header'
import HeadCard from './head-card'
export default {
    components:{
        MyProject,
        BlogList,
        TeamList,
        StartHearder,
        HeadCard
    }
}
</script>

<style>

.index-head{
    width: 100%;   
}
.head-content{
    background-color: #f0f2f5!important
}
.head-content-main{
    display: flex
}
.head-content-main-left{
    flex: 0 0 60%
}
.head-content-main-right{
    flex: 1
}

@media screen and (max-width:900px){
    .head-content-main{
        display: inline-block
    }
    .head-content-main-left{
       width: 100%;
    }
    .head-content-main-right{
        width: 100%;
        margin-top: 20px
    }
  }
  @media screen and (max-width:500px){
  
  }
</style>
