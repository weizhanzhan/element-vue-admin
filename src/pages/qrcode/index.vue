<template>
    <el-container> 
        <el-main > 
            <a-card title="我这可以生成二维码">
                <el-row>
                    <el-col :span="6"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="6" style="padding:.3rem .5rem">
                        <el-button type="success" icon="el-icon-check" size="mini" circle @click="generate"></el-button>       
                        <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="empty"></el-button>
                    </el-col>          
                </el-row>
            <!-- <vue-qr :bgSrc='src' :logoSrc="src2" text="Hello world!" :size="200"></vue-qr> -->
            <vue-qr :text="text" :callback="test" qid="testid"></vue-qr>
            </a-card>
        
            
           
        </el-main>
    </el-container>
</template>

<script>
import VueQr from 'vue-qr'
export default {
    data() {
        return {
            text:'',
            input:''
        }
    },
    components: {
        VueQr
    },
    methods:{
        test(dataUrl,id){
            console.log(dataUrl, id)
        },
        generate(){
            this.text=this.input
        },
        empty(){
            this.input=''
            this.text=''
        }
    }

}
</script>

<style>

</style>
