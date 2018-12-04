import toast from '../src/index.vue'
var Toast = {}
Toast.install = function (Vue, options){
    let opt = {
        defaultType:'bottom',   // 默认显示位置
        duration:'2500'         // 持续时间
    }
    for(let property in options){
        opt[property] = options[property];  // 使用 options 的配置
    }

    Vue.prototype.$toast =(tips,type) =>{

        if(type){
            opt.defaultType = type;         // 如果有传type，位置则设为该type
        }
   
        let toastTpl = Vue.extend({
            template:`<div class="vue-toast toast-${type}">wewe</div>`
        });
    
       let tpl = new toastTpl().$mount().$el; //获取挂载的dom
        
     
       document.body.appendChild(tpl);//加到body上

        setTimeout(function () {
            document.body.removeChild(tpl);
        }, opt.duration)
        var arr =['bottom','center','top']
        arr.forEach(type => {
            Vue.prototype.$toast[type] = (tips) => {
                return Vue.prototype.$toast(tips,type)
            }
        })
  
    }
}
export default Toast