<template>
    <div>
         <div>
            <input type="file" id="files" ref="img" @input="test()" style="opacity:0">
            <el-row>
                <el-button v-if="edit_url==''"  @click="upload_img" type="primary">修改</el-button>
            </el-row>
        </div>
        <el-row>
        <div v-if="edit_url!=''">
            <img :src="edit_url" width="50">
        </div>
            <el-button v-if="edit_url!=''" @click="update_img" type="primary">更新logo</el-button>
        </el-row>
    </div>
</template>

<script>
import { getBase64 } from '@/api/getBase64'
export default {
    props:['imgurl'],
    data(){
        return{
            edit_url:""
        }
    },
    methods:{
          upload_img(){
            document.getElementById("files").click(function(){
              
            })

        },
        update_img(){
           this.$emit('update:imgurl',this.edit_url)
           this.edit_url=""
        
        },
        async test(){
             const file =this.$refs.img.files[0]
             this.edit_url =await getBase64(file)
        }
    }

}
</script>

<style>

</style>
