<template>
 <el-container> 
    <el-main > 
        <template>
            <el-table
                :data="tableData"
                style="width: 100%"
            >
                <el-table-column
                    label="头像"
                    width="100">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px"><img width="60px" :src="scope.row.avatar" style="border-radius:50%"></span>
                    </template>
                </el-table-column>

                <el-table-column
                    label="日期"
                    width="200">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px" v-date="scope.row.date">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                
                <el-table-column
                    label="身份"
                    width="180">
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.role }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    label="姓名"
                    width="180">
                    <template slot-scope="scope">      
                        <span>{{ scope.row.name }}</span>                   
                    </template>
                </el-table-column>
                 <el-table-column
                    label="邮箱"
                    width="180">
                    <template slot-scope="scope">
                        <span>{{ scope.row.email }}</span>    
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
        </template>  
    </el-main> 
 </el-container>
</template>

<script>
import qs from 'qs';
import { getUser } from '@/api/user'
export default {
    data(){
        const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData:[],
      }
    },
    methods:{
        init(){
          getUser().then(data=>{           
               this.tableData=data.data
           })
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    },
    mounted(){
        this.init()
    }

}
</script>

<style>

</style>
