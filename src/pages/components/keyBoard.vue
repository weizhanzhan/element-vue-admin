<template>
    <div >
        <div class="keyboard_box" v-show="id" id="keyboard">
        <table class="keyboad" cellspacing="5px"  cellpadding="5px"  @click="clickTable">
            <tbody>
            <tr v-for="(trkey,index) in keys" :key="index" v-if="isSmall">
                <td v-for="tdkey in trkey" :key="tdkey" v-html="tdkey" @click="selectKey(tdkey)"></td>
            </tr>
            <tr v-for="(trkey,index) in keys2" :key="index" v-if="!isSmall">
                <td v-for="tdkey in trkey" :key="tdkey" v-html="tdkey" @click="selectKey(tdkey)"></td>
            </tr>
            </tbody>
        </table>
        </div> 
    </div>
</template>

<script>
  import {
    getMine
  } from '@/api/user'
  export default {
    props:['id'],
    data() {
      return {
        keys: [
          ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'-','关闭'],
          ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','[',']','='],
          ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',"'",'清空','Del'],
          ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',','.','/','空格'],    
        ],
        keys2: [
          ['~','!','@','#','$','%','^','&','*','(',')','_','关闭'],   
          ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','{','}','+'],
          ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':','"','清空','|'],
          ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M','<','>','?','空格','Del'], 
        ],
        isSmall:true,
        value:'',
      }

    },
    methods:{
        selectKey(val){
            this.value=''
            document.getElementById(this.id).focus();
            if(val=='shift'){
                this.isSmall=!this.isSmall
            }else if(val=='空格'){
                this.value+=''
                document.getElementById(this.id).value+=' ';
                 his.$emit('refesh',document.getElementById(this.id).value)
            }else if(val=='清空'){
                this.value=''
                document.getElementById(this.id).value='';
                this.$emit('refesh',document.getElementById(this.id).value)
            }else if(val=='Del'){
                let new_val=document.getElementById(this.id).value
                document.getElementById(this.id).value= new_val.substr(0,new_val.length-1)
                this.$emit('refesh',document.getElementById(this.id).value)
            }else if(val=='关闭'){
                document.getElementById(this.id).blur();
                this.$emit('update:id','')
            }else{
                this.value+=val
                document.getElementById(this.id).value+=this.value;    
                this.$emit('refesh',document.getElementById(this.id).value)  
            }

          
           
          
            
        },
        clickTable(){
          if(this.id){
            document.getElementById(this.id).focus();
          }
        }
    },
    watch:{
      id(){
        this.value=''
      }
    },
    created() {
      getMine()
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    mounted(){
        console.log(this)

        let keyboard =document.getElementById('keyboard')
      
        keyboard.onmousedown = function(e){
       
        e = e || event;
        //获取元素距离定位父级的x轴及y轴距离
        var x0 = this.offsetLeft;
        var y0 = this.offsetTop;
        //获取此时鼠标距离视口左上角的x轴及y轴距离
        var x1 = e.clientX;
        var y1 = e.clientY;
        
        keyboard.onmousemove = function(e){
          e = e || event;
          //获取此时鼠标距离视口左上角的x轴及y轴距离
          let x2 = e.clientX;
          let y2 = e.clientY;
          //计算此时元素应该距离视口左上角的x轴及y轴距离
          var X = x0 + (x2 - x1);
          var Y = y0 + (y2 - y1);
          //将X和Y的值赋给left和top，使元素移动到相应位置
          keyboard.style.left = X + 'px';
          keyboard.style.top = Y + 'px';
        }
        
        keyboard.onmouseup = function(e){
          //当鼠标抬起时，拖拽结束，则将onmousemove赋值为null即可
          keyboard.onmousemove = null;
        }
      }
    }
  }

</script>

<style>
.keyboard_box{
    background: #333;
    padding: 0.9rem 0;
    position: fixed

}
.keyboad{
    margin: 0 auto;
    color: #dcdddd;
}
.keyboad td{
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    width: 40px;
    background: #666;
    margin: 0.4rem
}
.keyboad td:hover{
    background: #8f8484
}
.keyboad td:active{
    background: #968080
}
</style>
