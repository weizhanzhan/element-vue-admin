<template>
    <div class="project">
        <div class="project-title">现有项目</div>
        <div id="project-content" style="padding:10px">

  <el-carousel :interval="5000" arrow="always" type="card">
    <el-carousel-item v-for="item in 40" :key="item">
     
        <a-card title="美团webapp" style="height:300px">
            <p>一个基于Vue2.0的webapp</p>
            <p><a href="http://111.231.59.56/meituan/meituan.html" target="view_window">查看</a></p>
        </a-card>
          
    </el-carousel-item>
  </el-carousel>

            <!-- <div class="project-item">woshi</div>
            <div class="project-item">woshi</div>
            <div class="project-item">woshi</div>
            <div class="project-item">woshi</div>
            <div class="project-item">woshi</div>
            <div class="project-item">woshi</div> -->
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.ant-card-head {
    background: #eee;
    }
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
a:active{
    text-decoration: none
}
a:hover{
   
    text-decoration: none
}
.project{
    background: #ffffff;
    position: relative;
    width: 100%;
}
.project-title{
    padding: 0.5rem;
    border-bottom: 1px solid #eeeeee

}
.project-content{
    
    width: 100%;
    display: flex;
    height: auto;

}
.project-item{
  
   float: left;
    width: 33.3%;
    padding:0.2rem
   
}
.project-item:hover{
    animation: scaleanimation 0.5s;
    animation-fill-mode: forwards;
  
}
@keyframes scaleanimation {
    0% {
        transform: scale(1.0);}
    100%{
        transform: scale(1.02);}
}
.clear{ clear:both} 
</style>
