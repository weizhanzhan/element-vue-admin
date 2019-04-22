<template>
 <el-form :model="formInline"  class="demo-form-inline" style="width:100%" label-width="100px" size="small">
    <el-row class="el-margin">
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="el-padding">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="el-padding">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人" style="width:100%"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="el-padding">
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域" style="width:100%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="el-padding">
            <el-form-item label-width="0px" >
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-col>
    </el-row>
</el-form>

</template>
<script>
   export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>
<style >
    /* .el-form-item{
        width: 100%;
    }
    .el-form-item__content{
        width: 80%;
    } */
    .el-padding{
 
        padding: 0 24px;
        /* height: 51px; */

    }
    .el-margin {
     margin: 0 -24px;
    }
</style>