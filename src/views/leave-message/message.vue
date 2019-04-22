<template>
<el-container> 
    <el-main > 
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="200">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px" v-date="scope.row.date "></span>
      </template>
    </el-table-column>
    <el-table-column
      label="邮箱"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>点赞数: {{ scope.row.likes }}</p>
          <p>不喜欢: {{ scope.row.dislikes }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.email }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="留言内容"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px" >{{scope.row.content}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="回复内容"
      width="180">
      <template slot-scope="scope">
         <vue-dialog :comments="scope.row.replay" title="查看回复内容"></vue-dialog>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>      
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>       
      </template>
    </el-table-column>
  </el-table>
   <form-dialog :show_data.sync="edit_data"></form-dialog>

    </el-main>
</el-container>
</template>

<script>
import VueDialog from '../components/base/dialog'
import formDialog from '../components/base/formDialog'
import { getMessage } from '@/api/user'
  export default {
    data() {
      return {
        tableData: [],
        edit_data:{}
      } 
    },
    methods: {
      init(){
          getMessage().then(data=>{
            this.tableData=data.data.msgs
          })
      },
      handleEdit(index, row) {
       
        this.edit_data=row
      },
      handleDelete(index, row) {
     
      },
      handleCheck(){

      }
    },
    mounted(){
        this.init()
    },
    components:{
       formDialog,VueDialog
    },
  }
</script>