<template>
  <a-row style="background:#fff;padding:10px" class="start-header">
    <a-col :span="2" style="text-align:center">
      <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" :size="80" />
    </a-col>
    <a-col :span="16">
      <div class="top-text-hello">早上好,weizhan</div>
      <div class="top-text-info">管理员 | 魏展展 常州阿摩勒信息科技有限公司web前端工程师</div>
    </a-col>
    <a-col :span="6">
      <a-row>
        <a-col :span="8" class="project-list">
          <span>项目数</span>
          <div>10</div>
        </a-col>
        <a-col :span="8" class="project-list">
          <span>团队排名</span>
          <div>10/24</div>
        </a-col>
        <a-col :span="8" class="project-list">
          <span>项目访问</span>
          <div>1000</div>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script>
  export default {

  }

</script>

<style>
.top-text-hello{
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    padding:10px 0 20px 0px;
    color: rgba(0,0,0,.85);
}
.top-text-info{
  
    color: rgba(0,0,0,.45);
}
.project-list{
    text-align: center
}
.project-list span{
     color: rgba(0,0,0,.45);
     
}
.project-list div{
     font-size: 30px
}

@media screen and (max-width:900px) {
    .start-header .ant-col-16{
      width: 30%;
    }
    .start-header .ant-col-2{
      width: 12%;
    }
    .start-header .ant-col-6{
      width: 40%;
    }
}
@media screen and (max-width:500px) {
    .start-header .ant-col-16{
      width: 100%;
      text-align: center
    }
    .start-header .ant-col-2{
      width: 100%;
    }
    .start-header .ant-col-6{
      width: 100%;
    }
}
</style>
