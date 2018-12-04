<template>
<div>
    <el-button type="text" @click="dialogTableVisible = true">{{title}}</el-button>

    <el-dialog title="评论" :visible.sync="dialogTableVisible">
    <el-table :data="comments">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="email" label="邮箱" width="200"></el-table-column>
        <el-table-column property="content" label="内容"></el-table-column>
         <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
    </el-table-column>
    </el-table>
    </el-dialog>
</div>
</template>
<script>
  export default {
    data() {
      return {     
        dialogTableVisible: false,
      }
    },
    mounted(){
        if(this.comments){
            this.comments.forEach(com => {
         
                com.date=new Date(com.date).Format("yyyy-MM-dd hh:mm:ss")
            });
        }
    },
    props:{
        comments:Array,
        title:String
    }
  };
</script>