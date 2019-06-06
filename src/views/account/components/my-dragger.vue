<template>
    <div  class="container">
    <transition-group tag="div" class="container">
   
        <template  v-for="item in items" >
            <div 
               
                :key="item.key"
                :style="[{'background':item.color}]"
                :draggable="true"
                @dragstart="onDragstart($event,item)"
                @dragend="onDragend($event,item)"
                @dragenter="onDragenter($event,item)"
                @drag="onDrag"
                v-drag="item"
                class="item"
           
            >
                {{item.key}}
        </div>
        </template>
        
    </transition-group>
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
    directives:{
        drag:{
            inserted: function (el) {
                console.log(el.clientTop)
            }
        }
    },
    methods:{
        hand(e){
            console.log(e)
        },
        onDragstart(e,item){
            console.log(e)
            this.dragging = item
         
        },
        onDragenter(e,item){
            this.enterDragging = item
            console.log('enter')
           

        },
        onDrag(e){
            console.log(e.layerX,e.layerY )
        },
        onDragend(e,item){
          console.log(e.target.clientTop)
            if(this.enterDragging.key === this.dragging.key){
                this.handleNoDragger(e,item)
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
        },
        handleNoDragger(event,item){
            event.target.style.position="absolute"
            event.target.style.top=event.clientY-200+'px'
            event.target.style.left=event.clientX-200+'px'
            console.log(event,item)
            console.log('没有和别人换位')
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
