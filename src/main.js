// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routes/index'
import store from './store'
import ElementUI from 'element-ui'



import { Avatar, Card ,icon} from 'ant-design-vue'

import 'element-ui/lib/theme-chalk/index.css'	
import './assets/iconfont.css'
import '../static/DateFormat'
import './permission.js' //权限

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Card)
Vue.use(Avatar)
Vue.use(icon)
Vue.directive('date',(el,binding)=>{
  el.innerHTML=new Date(binding.value).Format("yyyy-MM-dd hh:mm:ss")
})

//测试插件

import Toast from './Plugin/toast/lib'
import './Plugin/toast/lib/toast.css'
Vue.use(Toast)
import Test from './Plugin/test/lib'
Vue.use(Test)

/////////////

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  router,
  
})
