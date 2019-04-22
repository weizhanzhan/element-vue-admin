<template>
 <el-container> 
    <el-main > 
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="观看次数">
                    <span>{{ props.row.views }}</span>
                </el-form-item>
                <el-form-item label="点赞数">
                    <span>{{ props.row.likes }}</span>
                </el-form-item>
                <el-form-item label="评论数">
                    <span>{{ props.row.comment.length }}</span>
                </el-form-item>
                <el-form-item label="查看评论">
                    <vue-dialog :comments="props.row.comment" title="查看评论"></vue-dialog>
                </el-form-item>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
                label="博客标题"
                prop="title">
            </el-table-column>
            <el-table-column
                label="作者"
                prop="author">
            </el-table-column>
            <el-table-column
                label="博客分类"
                prop="classify">
            </el-table-column>
            <el-table-column
                label="日期"
                prop="date"
               >
                
            </el-table-column>         
        </el-table>
        
    </el-main> 
 </el-container>
</template>

<script>
import VueDialog from '../components/base/dialog'
import { getBlog } from '@/api/blog'  
export default {
    data(){
        const item = {
        date: '2016-05-02',
        name: 'zhanwei',
        address: 'Vue.js+Element 开发后台'
      };
      return {
        tableData:[],
      }
    },
    methods:{
        async init(){
            let data = await getBlog()
            this.tableData=data.data.blogs
            this.tableData.forEach(data=>{
                data.date=new Date(data.date).Format("yyyy-MM-dd hh:mm:ss")
            })
        },   
    },
    components:{
        VueDialog
    },
    mounted(){
        this.init()
    },
    

}
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
