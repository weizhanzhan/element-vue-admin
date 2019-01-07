<template>
    <el-container>
    <el-main>
      <a-card title="Toast插件">
          <el-button @click="testToast('top')">top</el-button>
          <el-button @click="testToast('center')">center</el-button>
          <el-button @click="testToast('bottom')">bottom</el-button> 
        </a-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
    methods:{
        testToast(type){
            this.$toast('hello world',type)
        }
    }
}
</script>

<style>

</style>
