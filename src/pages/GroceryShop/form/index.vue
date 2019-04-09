<template>
    <div class="form">
        <h1>Form</h1>
        <ul>
            <li v-for = "option in formOptions" :key="option.name">
                {{option.label}} : {{option.value}}
            </li>
        </ul>
        <div>
             <h1>FormComponents组件表单：</h1>
            <FormComponents :options="formOptions" @handleValueChange = "handleValueChange" @handleSubmit = "handleSubmit"/>
        </div>
    </div>
</template>

<script>
import FormComponents from './components/form-components'
export default {
    components:{ FormComponents },
    data() {
        return {
            formOptions:[
                {
                    componentName:'el-input',
                    name:'name',
                    value:'123',
                    label:'名称'
                },
                {
                    componentName:'el-input',
                    name:'age',
                    value:'123',
                    label:'年龄'
                },
                
                {
                    componentName:'el-select',
                    name:'area',
                    value:'one',
                    label:'活动编号',
                    options:[
                        {
                            label:'活动一',
                            value:'one'
                        },
                        {
                            label:'活动二',
                            value:'two'
                        },
                    ]
                },
                {
                    componentName:'el-date-picker',
                    name:'date',
                    type:'date',
                    value:new Date(),
                    label:'活动日期'
                },
                {
                    componentName:'el-date-picker',
                    name:'datetime',
                    type:'datetime',
                    value:new Date(),
                    label:'活动日期时间'
                },
                {
                    componentName:'el-time-picker',
                    name:'time',
                    value:new Date(),
                    type:"fixed-time",
                    label:'具体时间'
                },
                {
                    componentName:'el-switch',
                    name:'switch',
                    value:false,
                    label:'开启活动'
                },
                {
                    componentName:'el-radio-group',
                    name:'line',
                    options:[
                        {
                            label:'线路一',
                            value:'one'
                        },
                        {
                            label:'线路二',
                            value:'two'
                        },
                        {
                            label:'线路三',
                            value:'three'
                        },
                        {
                            label:'线路四',
                            value:'four'
                        },
                    ],
                    value:'',
                    label:'线路选择'
                },
                {
                    componentName:'el-checkbox-group',
                    name:'auth',
                    options:[
                        {
                            label:'权限一',
                            name:'auth'
                        },
                        {
                            label:'权限二',
                            name:'auth'
                        },
                        {
                            label:'权限三',
                            name:'auth'
                        },
                        {
                            label:'权限四',
                            name:'auth'
                        },
                    ],
                    value:[],
                    label:'线路选择'
                },
                {
                    componentName:'el-input',
                    name:'textarea',
                    type:'textarea',
                    value:'123',
                    label:'具体内容'
                },
            ]
        }
    },
    methods:{
        handleValueChange(val,param,index){
            this.formOptions[index].value = val
        },
        handleSubmit(val){
            this.$message.success(JSON.stringify(val))
        }
    }
}
</script>

<style scoped>
.form{
    margin: 24px;
    width: 97%;
    min-height: 500px;
    background: #ffffff
}

</style>
