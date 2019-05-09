<template>
    <div  class="container">
    <!-- <transition-group tag="div" class="container"> -->
        <template  v-for="item in items" >
            <div 
               
                :key="item.key"
                :style="[{'background':item.color}]"
                :draggable="true"
                @dragstart="onDragstart($event,item)"
                @dragend="onDragend($event,item)"
                @dragenter="onDragenter($event,item)"
                class="item"
           
            >
                {{item.key}}
        </div>
        </template>
        
    <!-- </transition-group> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            items:[
                {key:1,color:'#23d5fd'},
                {key:2,color:'#2ff5fd'},
                {key:3,color:'#5535fd'}
            ],
            dragging:null,
            enterDragging :null
        }
    },
    methods:{
        onDragstart(e,item){
            this.dragging = item
         
        },
        onDragenter(e,item){
            this.enterDragging = item
            console.log('enter')
           

        },
        onDragend(e,item){
            console.log(item)
            if(this.enterDragging.key === this.dragging.key){
                console.log('没有和别人换位')
                return
            }
            let allItem  =  JSON.parse(JSON.stringify(this.items))

            allItem.forEach(items=>{
                if(items.key ==this.dragging.key){
                    items.key = this.enterDragging.key
                    items.color = this.enterDragging.color
                }else if(items.key==this.enterDragging.key){
                    items.key = this.dragging.key
                    items.color =  this.dragging.color
                }
            })

            this.items = allItem
            this.dragging = null
             this.enterDragging  = null
        }
    }
}
</script>

<style scoped>
.item{
    width: 100px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    transition: all linear 0.3s 
}
.container{
    height: 500px;
    transition: all 0.5s
}
</style>
