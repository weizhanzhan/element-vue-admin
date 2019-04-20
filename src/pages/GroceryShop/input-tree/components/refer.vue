<template>
    <div class="ref">
        <!-- <span class="refer name">refasdasgadgdfgsdasdasddg</span>
        <span class="refer num">+3</span> -->
        <span class="refer-item" @click="clear" v-if="selectedTree.length" >{{selectedTree[0].label}}</span>
        <span class="refer-item"  @click="clear" v-if="selectedTree.length&&selectedTree.length>1">+{{selectedTree.length-1}}</span>
        <span class="icon"><i :class="['el-icon-arrow-down',popverState?'open':'']"></i></span>
    </div>
</template>

<script>
export default {
    props:{
        popverState:Boolean,
        selectedTree:Array
    },
    methods:{
        clear(event){
            event.cancelBubble = true; //阻止事件冒泡 ，只执行自己，不执行夫层
            console.log('clear')
        }
    }
}
</script>

<style scoped>
.ref{
    width: 100%;
    max-width: 208px;
    border-bottom: 1px solid #eeeeee;
    min-height: 40px;

   position: relative;
}
.refer{
    box-sizing: border-box;
    border-color: transparent;
    margin: 2px 0 2px 6px;
    background-color: #f0f2f5;
    display: inline-block;
    padding: 0 10px;
    height: 32px;
    line-height: 30px;
    font-size: 12px;
    color: #909399;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid rgba(64,158,255,.2);
    white-space: nowrap;
    vertical-align: bottom;
}
.refer-item{
    box-sizing: border-box;
    border-color: transparent;
    margin: 2px 0 2px 6px;
    background-color: #f0f2f5;
    display: inline-block;
    padding: 0 10px;
    height: 32px;
    line-height: 30px;
    font-size: 12px;
    color: #909399;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid rgba(64,158,255,.2);
    white-space: nowrap;
    vertical-align: bottom;
     max-width: 100px;
  
    text-overflow: ellipsis;
    overflow: hidden;
}
.refer.name{
    /* width: 80%; */
    /* font-size: 18px;
    font-weight: bold; */
    max-width: 100px;
  
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
}
.refer.num{
    /* width: 10%; */
    display: inline-block
}
.icon{
    position: absolute;
    right: 0;
    top: 25%
}
.el-icon-arrow-down{
    transition: all 0.2s
}
.el-icon-arrow-down.open{
    color: red;
    transform: rotate(180deg);
    transition: all 0.2s
}
</style>
