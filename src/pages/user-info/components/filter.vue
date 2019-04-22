<template>
  <div>
    <el-form :model="ruleForm" :rules="options.rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" :prop="n.type" v-for="n in options.form" :key="n.type">
        <component :is="n.name" :value="ruleForm[n.type]" @input="changeInput($event,n.value,n.type)"> </component>
      </el-form-item>
    
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props:{
        options:Object,
    },
    data() {
      return {
        // options: [{
        //   name: 'el-input',
        //   value: '',
        //   type: 'name'
        // }],
        //  rules: {
        //      name: [
        //         { required: true, message: '请输入活动名称', trigger: 'blur' },
        //         { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        //      ]
        //  },
         ruleForm:{

         }
      }
    },
    methods:{
        changeInput(val,props,type){
            this.ruleForm[type] = val
            console.log(val)
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>

<style>

</style>
