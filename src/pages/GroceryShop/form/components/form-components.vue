<template>
    <div v-if="options" class="wzform">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(item, index) in options" :key="index" class="wzform-wrapper">
                    <el-row>
                        <el-col :span="6" style="text-align:center;line-height:40px">
                            {{item.label}} :
                        </el-col>
                        <el-col :span="18">
                            <components :is="item.componentName" :value="item.value" @input="inputChange($event,item,index)" class="wrapper-item" :type="item.type">
                                <template v-if="item.componentName=='el-select'">
                                    <el-option v-for="option in item.options" :key="option.value" :label="option.label" :value="option.value"></el-option>
                                </template>
                                <template v-else-if="item.componentName=='el-radio-group'">                           
                                    <el-radio v-for="option in item.options" :key="option.label" :label="option.label"></el-radio>
                                </template>
                                 <template v-else-if="item.componentName=='el-checkbox-group'">                           
                                    <el-checkbox v-for="option in item.options" :key="option.label" :label="option.label" :name="option.name"></el-checkbox>
                                </template>
                            </components>
                        </el-col>
                    </el-row>           
            </el-col> 
        </el-row>
        <div>
            <el-button  @click="onSubmit">提交</el-button>
            <el-button  @click="onEmpty">清空</el-button>
        </div>
    </div>
</template>

<script>
export default {
    props:['options'],
    methods:{
        inputChange(val,param,index){
            this.$emit('handleValueChange',val,param,index)       
        },
        onSubmit() {
            let res = {};
            this.options.forEach(option => {   
                res[option.name] = option.value
            })
            this.$emit('handleSubmit',res)
        },
        onEmpty() {
            this.options.forEach((option,i)=>{
                this.$emit('handleValueChange','',option,i)
            })
        },
        test(item){
            console.log(item)
        }
    },
    mounted(){
        console.log(this.options)
    }
}
</script>

<style scoped>
.wzform{
    padding:10px
}
.wzform-wrapper{
    margin:10px 0;
     line-height: 40px
}
.wrapper-item{
    width:100%;
   
}
.el-checkbox+.el-checkbox{
    margin-left: 0;
    /* margin-right: 30px */
}
.el-checkbox{
    margin-right: 30px
}
.el-radio+.el-radio{
    margin-left: 0;
}
.el-radio{
    margin-right: 30px;
    margin-top: 10px
}
</style>
