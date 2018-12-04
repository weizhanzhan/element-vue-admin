import router from './routes'
import store from './store'
import { getToken } from './utils/auth'

const whiteList = ['/login']
router.beforeEach((to, from, next) =>{
    if(whiteList.indexOf(to.path)!=-1){
        next()
    }
    if(getToken())
        if(whiteList.indexOf(to.path)!=-1){
            next()
        }else{
            if(store.getters.roles.length===0){
                store.dispatch('GetUserInfo').then(info=>{
                    const roles = info.role
                    store.dispatch('GenerateRoutes',{ roles })//根据用户权限生产可访问的路由表
                    .then(()=>{
                        router.addRoutes(store.getters.addRouters)
                        next({ ...to, replace: true })
                    })
                })     
            }
            else{
                next()
            }
        }
    else{
        //has no token
        next('/login')
    }
} )