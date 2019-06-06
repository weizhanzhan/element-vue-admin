<template>
    <div>
        子组件
        attrs:{{$attrs}}
        <Attr11 v-bind="$attrs" v-on="$listeners"/>
    </div>
</template>

<script>
import Attr11 from './attr-1.1'
export default {
    components:{Attr11},
    props:['name'],
    inheritAttrs:false
}
</script>

<style>

</style>
