<template>
  <el-container>
    <el-main>
      <el-row>
      
        <!-- <Form :options="options" /> -->
        <!-- <Dragger/> -->
        <!-- <MyDragger/> -->
        <!-- <gridDragger/> -->
        <LongRangeJS src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></LongRangeJS>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import {
    getMine
  } from '@/api/user'
  import Form from './components/filter'
  import Dragger from './components/dragger.vue'
  import MyDragger from './components/my-dragger.vue'
  import gridDragger from './components/grid-drag.vue'
  import LongRangeJS from '../grocery-shop/long-range-js'
  export default {
    components:{Form,Dragger,MyDragger,gridDragger ,LongRangeJS},
    data() {
      return {
    
          options:{
            form:[{
              name: 'el-input',
              value: '',
              type: 'name'
            }],
            rules:{
              name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ]
            }
          },
          
      }
    },
    methods: {
     
      
    },

    created() {
      getMine()
        .then(data => {
        
        })
        .catch(err => {
        
        })
    },
  

  }

</script>

<style>
  .keyboard_box {
    background: #333;
    padding: 0.9rem 0;
    position: fixed
  }

  .keyboad {
    margin: 0 auto;
    color: #dcdddd;

    /* border:1px solid #000000 */
  }

  .keyboad td {
    color: #ffffff;
    /* width: 10%; */
    text-align: center;
    /* font-size: 1em; */

    cursor: pointer;
    width: 40px;
    background: #666;
    margin: 0.4rem
  }

  .keyboad td:hover {
    background: #8f8484
  }

  .keyboad td:active {
    background: #968080
  }

</style>
