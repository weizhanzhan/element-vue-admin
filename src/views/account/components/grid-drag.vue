<template>
  <div class="container">
    <div 
        class="dropzone"  
        @drop="onDrop"
        @dragover="onDragover"
    >
      <div 
        id="draggable" 
        draggable="true" 
        ondragstart="event.dataTransfer.setData('text/plain',null)"
       
        >
        folder1
      </div>
    </div>
    <div 
        class="dropzone" 
        @drop="onDrop"
        @dragover="onDragover"
        v-for="n in 10" :key="n">
    </div>
   
  </div>
</template>

<script>
  export default {
    methods:{
        onDrop(e){
            console.log('我被放入了东西',e)
        }
    },
    mounted() {
    //   var dragged;

    //   /* 可拖动的目标元素会触发事件 */
    //   document.addEventListener("drag", function (event) {

    //   }, false);

    //   document.addEventListener("dragstart", function (event) {
    //     // 保存拖动元素的引用(ref.)
    //     dragged = event.target;
    //     // 使其半透明
    //     event.target.style.opacity = .5;
    //   }, false);

    //   document.addEventListener("dragend", function (event) {
    //     // 重置透明度
    //     event.target.style.opacity = "";
    //   }, false);

    //   /* 放下目标节点时触发事件 */
    //   document.addEventListener("dragover", function (event) {
    //     // 阻止默认动作
    //     event.preventDefault();
    //   }, false);

    //   document.addEventListener("dragenter", function (event) {
    //     // 当可拖动的元素进入可放置的目标高亮目标节点
    //     if (event.target.className == "dropzone") {
    //       event.target.style.background = "purple";
    //     }

    //   }, false);

    //   document.addEventListener("dragleave", function (event) {
    //     // 当拖动元素离开可放置目标节点，重置其背景
    //     if (event.target.className == "dropzone") {
    //       event.target.style.background = "";
    //     }

    //   }, false);

    //   document.addEventListener("drop", function (event) {
    //     // 阻止默认动作（如打开一些元素的链接）
    //     event.preventDefault();
    //     // 移动拖动的元素到所选择的放置目标节点
    //     if (event.target.className == "dropzone") {
    //       event.target.style.background = "";
    //       dragged.parentNode.removeChild(dragged);
    //       event.target.appendChild(dragged);
    //     }

    //   }, false);
    }
  }

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    height: 500px;
    background: #ffffff
  }

  .dropzone {
    width: 200px;
    height: 20px;
    margin-bottom: 10px;
    padding: 10px;
    ;
    border: 1px solid #EEEEEE;
    text-align: center
  }

</style>
