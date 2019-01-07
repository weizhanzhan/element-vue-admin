<template>
    <div>
        <h1>dialog测试</h1>
        <button @click="openDialog">dialog</button>
    </div>
</template>

<script>
export default {
    methods:{
        openDialog(){
            this.$dialog('2323')
        }
    }
}
</script>

<style>

</style>
