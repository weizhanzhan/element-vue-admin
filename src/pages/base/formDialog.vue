<template>
    <div>    
        <el-dialog title="zhanwei" :visible.sync="dialog_show" @close="cancel">
        <el-form :model="form">
            <el-form-item 
                v-for="(data,index) in form" 
                :key="index"  
                :label="title[index]" 
                v-if="title[index]"
                :label-width="formLabelWidth"
            > 
              <div v-if="index=='imgUrl'">
                  <img :src="form.imgUrl" width="50px">
                  <upload :imgurl.sync="form.imgUrl"></upload>
              </div>
              <el-input v-else v-model="form[index]" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="cancel">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>

<script>
import Upload from './upload'
export default {
    props:["show_data"],
    data(){
        return{
            dialogFormVisible: false,
            form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            },
            title:{
                name:"名称",
                count:"数量",
                imgUrl:"图标",
                content:'内容',
                email:"邮箱",
                likes:"点赞数",
                dislikes:"不喜欢"

            },
            formLabelWidth: '120px',
    
            
            }
    },
    methods:{
        cancel(){
            this.$emit('update:show_data',{})
        },
     
   
    },
    computed:{
        dialog_show:{
            get(){
                this.form=this.show_data
                return JSON.stringify(this.show_data)!='{}'?true:false
            },
            set(){
                this.cancel()
            }
        }
    },
    components:{
        Upload
    }

}
</script>

<style>

</style>
