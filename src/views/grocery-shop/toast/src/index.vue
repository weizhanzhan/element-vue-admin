<template>
    <div class="vue-toast toast-${opt.defaultType}">${tips}</div>
</template>

<script>
export default {
    name:'toast'
}
</script>

<style>
.vue-toast{
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    color: #ffffff;
    padding: 10px;
    font-size: 16px;
    left: 50%;
    border-radius: 5px;
    box-shadow: 3px 5px 5px #888888;
    animation:mymove 2s;
}

@keyframes mymove
{
from {opacity: 0;}
to {opacity: 1;}
}
.toast-top{
    top: 2%
}

.toast-center{
    top: 50%
}
.toast-bottom{
    bottom: 2%
}
</style>
