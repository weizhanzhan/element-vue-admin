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
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import {
    getMine
  } from '@/api/user'
  export default {
    data() {
      return {
    

      }
    },
    methods: {
     
      
    },

    created() {
      getMine()
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
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
