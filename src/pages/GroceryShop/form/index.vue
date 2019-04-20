<template>
    <div class="form">
      
       
        <div class="form-item">
             <h1>FormComponents组件表单：</h1>
              <ul>
                <li v-for = "option in formOptions" :key="option.name">
                    {{option.label}} : {{option.value}}
                </li>
            </ul>
            <FormComponents :options="formOptions" @handleValueChange = "handleValueChange" @handleSubmit = "handleSubmit"/>
        </div>
        <div class="form-item">
             <h1>element Form 组件表单：</h1>
            <ElFrom :options="formOptions" @handleValueChange = "handleValueChange" @handleSubmit = "handleSubmit"/>
        </div>
         <div class="form-item">
            <h1>V-model from component</h1>
            <li v-for = "option in modelOption.form" :key="option.name">
                {{option.label}} : {{option.value}}
            </li>
            <modelForm v-model="modelOption" @handleSubmit="handleSubmit"/>
        </div>
    </div>
</template>

<script>
import FormComponents from './components/form-components'
import ElFrom from './components/el-form-components'
import modelForm from  './components/ele-component-model'
export default {
    components:{ FormComponents, ElFrom ,modelForm },
    data() {
        return {
            formOptions:[
                {
                    componentName:'el-input',
                    name:'name',
                    value:'123',
                    label:'名称',
                    span:8,
                    rules:[
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ]
                },
                {
                    componentName:'el-input',
                    name:'age',
                    value:'123dsd',
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
                    format:'yyyy-MM-dd',
                    label:'活动日期'
                },
                {
                    componentName:'el-date-picker',
                    name:'datetime',
                    type:'datetime',
                    format:'yyyy-MM-dd HHH:mm:ss',
                    value:new Date(),
                    label:'活动日期时间'
                },
                {
                    componentName:'el-date-picker',
                    name:'start-end',
                    format:'yyyy-MM-dd',
                    value:new Date(),
                    type:"daterange",
                    label:'开始结束'
                },
                {
                    componentName:'el-time-picker',
                    name:'time',
                    value:new Date(),
                    format:'yyyy-MM-dd HHH:mm:ss',
                    type:"fixed-time",
                    label:'具体时间'
                },
                {
                    componentName:'el-switch',
                    name:'switch',
                    value:false,
                    label:'开启活动',
                    default:false
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
                    default:[],
                    label:'线路选择'
                },
                {
                    componentName:'el-input',
                    name:'textarea',
                    type:'textarea',
                    value:'123',
                    label:'具体内容'
                },
            ],
            modelOption:{
                form:[
                     { componentName:'el-input',  name:'name',   value:'',  label:'名称',     span:8,
                        rules:[
                            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                        ]
                    },
                    { componentName:'el-input', name:'age',  value:'',  label:'年龄' },
                ]
            }
        }
    },
    methods:{
        handleValueChange(val,param,index){
            console.log(val,param,index)
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
.form-item{
    padding: 10px;
    border: 1px solid #eeeeee
}

</style>
