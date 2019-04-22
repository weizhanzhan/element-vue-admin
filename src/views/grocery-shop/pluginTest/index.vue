<template>
    <el-container>
    <el-main>
  
          <el-button @click="testToast('top')">top</el-button>
          <el-button @click="testToast('center')">center</el-button>
          <el-button @click="testToast('bottom')">bottom</el-button> 
     
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
