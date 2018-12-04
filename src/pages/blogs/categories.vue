<template>
<el-container> 
    <el-main >
      <el-row>
        <el-col style="margin-top:5px">
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="danger" size="medium" icon="el-icon-plus" @click="add_new()" circle></el-button>  
       </el-col>
      </el-row>
      <el-row :gutter="12">
       <el-col :span="8" v-for="(cate,index) in tableData" :key="index" style="margin-top:15px">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{cate.name}}</span>
            <el-popover
              placement="top"
              width="160"
              v-model="cate.visible">
              <p>确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="cate.visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="handle_sure_delete(cate)">确定</el-button>
              </div>
              <el-button slot="reference"  @click="cate.visible=true" style="float: right;padding:3px;margin:0 5px" type="danger" size="mini" icon="el-icon-delete" circle></el-button>         
            </el-popover>
            <el-button style="float: right;padding:3px " type="primary" size="mini" icon="el-icon-edit"  @click="handleEdit(index, cate)" circle></el-button>         
          </div>
          <el-row style="display:flex">
            <div>
              <img :src="cate.imgUrl" style="width:50px;height:50px;border-radius: 48px;" class="image">
            </div>
            <span style="padding:8px;font-size:12px;color:rgba(0,0,0,.45);">{{cate.name}}是自己博客中分类的一种，记录自己在{{cate.name}}的学习中遇到的问题以及笔记</span>
          </el-row>                
        </el-card>
      </el-col>
      </el-row>
       <form-dialog :show_data.sync="edit_data"></form-dialog>
    </el-main>
</el-container>
</template>

<script>
import formDialog from '../base/formDialog'
import { getCategory } from '@/api/category'
  export default {
    data() {
      return {
        tableData: [],
        edit_data:{},
        model:{
          name:'',
          imgUrl:'',
          count:0,
          id:''
        },
        visible_delete:false,
        visible2:false,
        
      }
    },
    methods: {
      async init(){ 
          let data =await getCategory()
          this.tableData=data.data 
      },
      handleEdit(index, row) {
        this.edit_data=row
      },
      handleDelete(index, row) {
        
      },
      add_new(){
        this.edit_data=this.model
      },
      handle_sure_delete(val){
          val.visible=false
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
      }
    },
    components:{
      formDialog
    },
    mounted(){
        this.init()
    }
  }
</script>