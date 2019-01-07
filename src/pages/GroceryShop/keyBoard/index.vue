<template>
  <el-container>
    <el-main>
        <a-card title="自己做得软键盘">
            <el-row>
                <input @focus="changeFocus" id="test6" v-model="test6">
                <input @focus="changeFocus" id="test7" v-model="test7">
                <key-board :id.sync="id" @refesh="refesh"> </key-board>
            </el-row>
        </a-card>
      
    </el-main>
  </el-container>
</template>

<script>
  import {
    getMine
  } from '@/api/user'
  import KeyBoard from '../../components/keyBoard'
  export default {
    data() {
      return {
        id: '',
        test6:'',
        test7:'',
        mvalue:''

      }
    },
    methods: {
      changeFocus(e) {
        
       
        this.id = e.target.id
        if(this.id=='test6')
          this.mvalue=this.test6
        else
          this.mvalue=this.test7
      },
      refesh(val){
        
        if(this.id=='test6'){
          this.test6=val
        }else{
          this.test7=val
        }
      }
    },

    created() {
      getMine()
        .then(data => {
      
        })
        .catch(err => {
       
        })
    },
    components: {
      KeyBoard
    }

  }

</script>

<style>
  .keyboard_box {
    background: #333;
    padding: 0.9rem 0;
    position: fixed
  }

  .keyboad {
    margin: 0 auto;
    color: #dcdddd;

    /* border:1px solid #000000 */
  }

  .keyboad td {
    color: #ffffff;
    /* width: 10%; */
    text-align: center;
    /* font-size: 1em; */

    cursor: pointer;
    width: 40px;
    background: #666;
    margin: 0.4rem
  }

  .keyboad td:hover {
    background: #8f8484
  }

  .keyboad td:active {
    background: #968080
  }

</style>
