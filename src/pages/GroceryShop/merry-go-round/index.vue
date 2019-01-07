// 旋转木马
<template>
    <el-container>
        <el-main>
        <div>
            <button @click="start">start</button>
            <button @click="end">end</button>
            <select v-model="sort">
            <option value="0">顺时针</option>
            <option value="1">逆时针</option>
            </select>
        </div>
        <hr>
        <div>
            <button @click="selectItem(0)">上一张</button>
            <button @click="selectItem(1)">下一张</button>
        </div>
        <ul class="slider">
            <li v-for="(list,index) in classNames" :key="index" :class="list" @mouseenter="end" @mouseleave="selectSort">{{index+1}}</li>
        </ul>
        </el-main>
    </el-container>
</template>

<script>
  export default {
    data() {
        return {
            classNames: [
            'list-item fl-1',
            'list-item fl-2 left',
            'list-item fl-3 left',
            'list-item fl-3 right',
            'list-item fl-2 right'
            ],
            timer: null,
            sort: '0',
        }
    },
    watch: {
        sort(val) {
            if (val == 1) //逆时针
            this.reverseStart()
            else //顺时针
            this.start()
        }
    },
    methods: {
        start() {
            if (this.timer)
                clearInterval(this.timer)
            this.timer = setInterval(()=>{
                this.sortBegin(0)
            }, 2000)
        },
        end() {
            clearInterval(this.timer)
        },
        reverseStart() {
            if (this.timer)
                clearInterval(this.timer)
            this.timer = setInterval(()=>{
                this.sortBegin(1)
            },2000)
        },
        sortBegin(type) { //0顺时针 1逆时针
            if(type){
                this.classNames.unshift(this.classNames[this.classNames.length - 1])
                this.classNames.splice(this.classNames.length - 1, 1)
            }else{
                this.classNames.push(this.classNames[0])
                this.classNames.splice(0, 1)
            }
        },
        selectSort() {
            if (this.sort == '0')
                this.start()
            else
                this.reverseStart()
        },
        selectItem(type) { //0上一张 1下一张
           
            if(type)
                this.sortBegin(0)
            else
                this.sortBegin(1)
            this.selectSort()

        }
    },
    mounted() {
      this.start()
    }
  }

</script>

<style>
  .slider {
    list-style: none;
    padding: 0;
    position: relative;
    height: 500px;
  }

  .list-item {
    position: absolute;
    background: blue;
    width: 125px;
    height: 75px;
    color: aliceblue;
    text-align: center;
    line-height: 50px;
    transition: all 1s cubic-bezier(0.3, 0.5, 0.1, .9);
    box-shadow: 0px 1px 2px #6B6B6B;
    border-radius: 10px
  }

  .list-item.fl-1 {
    top: 300px;
    left: 50%;
    width: 200px;
    height: 130px;
    z-index: 3;
  }

  .list-item.fl-2.left {

    top: 200px;
    left: 34%;
    width: 150px;
    height: 100px;
    z-index: 2;
    opacity: 0.7;
  }

  .list-item.fl-2.right {

    top: 200px;
    left: 70%;
    width: 150px;
    height: 100px;
    z-index: 2;
    opacity: 0.7;
  }

  .list-item.fl-3.left {
    top: 100px;
    left: 45%;
    z-index: 1;
    opacity: 0.3;
  }

  .list-item.fl-3.right {
    top: 100px;
    left: 60%;
    z-index: 1;
    opacity: 0.3;
  }

  .list-item:hover {
    transform: scale(1.5)
  }

</style>
