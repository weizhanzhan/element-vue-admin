<template>
  <div class="project">
    <div class="project-title">进行中的项目</div>
    <div id="project-content" style="">
      <a-card class="card-item" v-for="n in 6" :key="n">
        <p>
          <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">U</a-avatar>Vue
        </p>
        <p>那是一种内在的东西， 他们到达不了，也无法触及的</p>
        <div>
          <a-row>
            <a-col :span="8">搬砖族</a-col>
            <a-col :span="6" :offset="10">2小时前</a-col>
          </a-row>
        </div>
      </a-card>
      <div style="clear:both"></div>


    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style>
  .project {
    background: #ffffff;
    position: relative;
    width: 100%;
  }
  .project-title {
    padding: 20px;

  }
  .project-content {
    width: 100%;
    display: flex;
    height: auto;
  }

  .card-item {
    width: 33.33%;
    float: left;
    border: 0;
    box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, inset 1px 0 0 0 #e8e8e8, inset 0 1px 0 0 #e8e8e8;
  }


  .card-item:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, .15), 0 2px 8px rgba(0, 0, 0, .15), 0 2px 8px rgba(0, 0, 0, .15), inset 1px 0 0 0 #e8e8e8, inset 0 1px 0 0 #e8e8e8;
    z-index: 1;
  }
  @media screen and (max-width: 900px){
      .card-item {
            width: 50%;
            float: left;
            border: 0;
            box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, inset 1px 0 0 0 #e8e8e8, inset 0 1px 0 0 #e8e8e8;
        }
  }
   @media screen and (max-width: 500px){
      .card-item {
            width: 100%;
            float: left;
            border: 0;
            box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, inset 1px 0 0 0 #e8e8e8, inset 0 1px 0 0 #e8e8e8;
        }
  }

</style>
