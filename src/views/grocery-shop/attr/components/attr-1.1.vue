<template>
    <div>
        子子组件
        {{$attrs}}
        <button @click="send">send</button>
    </div>
</template>

<script>
export default {
    methods:{
        send(){
            console.log('我从子子组件发送事件')
            this.$emit('sendFromzz')
        }
    }
}
</script>

<style>

</style>
