<template>
  <div style="height:1000px">
    <!-- <Grid :draggable="true" :sortable="true" :items="items" :height="100" :width="100">
      <template slot="cell" slot-scope="props">
        <div>{{props.item}}</div>
      </template>
    </Grid> -->
    <transition-group tag="div" class="container">
      <div class="item" v-for="(item,index) in items" :key="item.key"
        :style="{background:item.color,width:'80px',height:'80px'}"
         draggable="true"
        @dragstart="handleDragStart($event, item)" 
        @dragover.prevent="handleDragOver($event, item)"
        @dragenter="handleDragEnter($event, item)" 
        @dragend="handleDragEnd($event, item)">
        {{item.key}}
      </div>
    </transition-group>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Grid from 'vue-js-grid'

  Vue.use(Grid)
  export default {
    data() {
      return {
        // items: [
        //   'a',
        //   'b',
        //   'c'
        // ],
        items: [{
            key: 1,
            color: '#ffebcc'
          },
          {
            key: 2,
            color: '#ffb86c'
          },
          {
            key: 3,
            color: '#f01b2d'
          }
        ],

        dragging: null
      }
    },
    methods: {
      handleDragStart(e, item) {
       
        this.dragging = item;
      },
      handleDragEnd(e, item) {
        this.dragging = null
      },
      //首先把div变成可以放置的元素，即重写dragenter/dragover
      handleDragOver(e) {
        e.dataTransfer.dropEffect = 'move' // e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
      },
      handleDragEnter(e, item) {
             console.log('handleDragEnter',item)
        e.dataTransfer.effectAllowed = "move" //为需要移动的元素设置dragstart事件
        if (item === this.dragging) {
          return
        }
        const newItems = [...this.items]
        console.log(newItems)
        const src = newItems.indexOf(this.dragging)
        const dst = newItems.indexOf(item)

        newItems.splice(dst, 0, ...newItems.splice(src, 1))

        this.items = newItems
      }
    }

  }

</script>

<style>
  .v-grid-item-wrapper {
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #ffffff
  }
   .container{
        width: 80px;
        height: 300px;
        position: absolute;
        left: 0;
        display:flex;
        flex-direction: column;
        padding: 0;
    }
    .item {
      margin-top: 10px;
      transition: all linear .3s
    }

</style>
