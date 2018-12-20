<template>
    <el-container> 
        <div class="index-head">
            <div class="head-top">
                <div  class="top-avatar">
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" :size="100" />
                </div>                
                <div class="top-text">
                    <div class="top-text-hello">早上好,weizhan</div>
                    <div class="top-text-info">管理员 | 魏展展 常州阿摩勒信息科技有限公司web前端工程师</div>
                </div>
                <div class="top-work">
                    <div class="top-work-blog">
                        <p>博客数</p>
                        <p>12</p>
                    </div>
                    <div class="top-work-project">
                        <p>项目数</p>
                        <p>10</p>
                    </div>
                </div>
            </div>
            <div class="head-content" >
                <el-main class="head-content-main">
                    <div class="head-content-main-left">
                         <my-project></my-project>
                    </div>
                    <div class="head-content-main-right">
                        <blog-list></blog-list>
                    </div>
                </el-main>
            </div>
        </div>
    </el-container>
</template>

<script>
import MyProject from './project'
import BlogList from './list'
export default {
    data(){
        return {
         
        }
    },
    created(){
        this.$test()
    },
    components:{
        MyProject,
        BlogList
    }
}
</script>

<style>
.index-head{
    width: 100%;
    height: 3rem;
    
}
.head-top{
    background: #ffffff;
    padding: 0.5rem 0.8rem;
    display: flex
}
.top-avatar{
    flex: 1;
    text-align: center
}
.top-text{
    flex:  0 0 50%
}
.top-text-hello{
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(0,0,0,.85);
    margin-bottom: 12px;
}
.top-text-info{
    padding: 0.5rem 0 0 0;
    color: rgba(0,0,0,.45);
}
.top-work{
    color: rgba(0,0,0,.45);
    flex:  0 0 40%;

}
.top-work-blog{
    padding: 0 1rem;

    float: left;
    border-right: 1px solid #e8e8e8;
    text-align: center
}
.top-work-blog :last-child{
    font-size: 30px
}
.top-work-project{
    
    float: left;
    padding: 0 1rem;
    text-align: center
}
.top-work-project :last-child{
    font-size: 30px
}
.head-content{
    background-color: rgb(238, 238, 238)!important

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
</style>
