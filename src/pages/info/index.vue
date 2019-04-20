<template>
  <el-container>
    <el-main>
      <el-row>
       <a-card
          hoverable
          style="width: 300px"
        >
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            slot="cover"
          />
          <template class="ant-card-actions" slot="actions">
            <a-icon type="setting" />
            <a-icon type="edit" />
            <a-icon type="ellipsis" />
          </template>
          <a-card-meta
            title="Card title"
            description="This is the description">
            <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </a-card-meta>
        </a-card>
        <Form :options="options" />
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import {
    getMine
  } from '@/api/user'
  import Form from './components/filter'
  export default {
    components:{Form},
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
