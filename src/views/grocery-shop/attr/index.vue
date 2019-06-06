<template>
    <div class="attr">
        <h1>attr</h1>
        <Attr name="tom" age="18" @sendFromzz="sendFromzz"/>
    </div>
</template>

<script>
import Attr from './components/attr-1'
export default {
    components:{Attr},
    methods:{
        sendFromzz(){
            console.log('我是用listeners 直接监听子子组件的方法')
        }
    }
}
</script>

<style scoped>
.attr{
    height: 500px;
    background: #ffffff;
    padding: 10px
}
</style>
