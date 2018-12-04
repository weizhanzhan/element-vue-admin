import vueTest from '../src'
import Vue from 'vue'

const comment = {
    install :function(Vue){
        Vue.component(vueTest.name,vueTest)
        Vue.prototype.$test = function (){
            console.log("我在测试!")
            this.minxins()
        }
        Vue.mixin({
            methods:{
                minxins(){
                    console.log('我在测试mixins')
                }
            }
        })
    }
}

if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(comment) 
}
export default comment