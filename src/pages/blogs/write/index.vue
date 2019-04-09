<template>
     <el-container> 
         <el-main >
              <mavon-editor v-model="value"/>
         </el-main>
     </el-container> 
</template>

<script>
export default {
    data() {
        return {
            value:''
        }
    },
}
</script>

<style>

</style>
