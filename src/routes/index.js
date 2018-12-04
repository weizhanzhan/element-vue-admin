import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../pages/layout/home"
import User from "../pages/users/users"
import Blogs from "../pages/blogs/blogs"
import Message from '../pages/message/message'
import Category from '../pages/blogs/categories'
import info from '../pages/info'
import Login from '../pages/Login'

Vue.use(VueRouter)

export const constantRouterMap =[
    {
        path:'/login',
        component:Login,
        name:"登陆",
        hidden: true
    },
    {path:'/',redirect:'/start/index',hidden:true},
    {
        path:"/start/index",
        name:"主页",
        component:Home,
        redirect:'/start/index',
        meta: {
            roles: ['admin'], // you can set roles in root nav
            icon:'el-icon-location'
        },
        children:[
            {
                path:"/start/index",
                name:"初始",
                component:()=>import('../pages/start'),
                meta: {
                    roles: ['admin'] // you can set roles in root nav
                },
            }
        ]
    },
    {
        path:'/register',
        hidden: true,
        component:()=>import('../pages/login/register'),
        name:"zhuce"
    },
  
]
export default new VueRouter({
    routes:constantRouterMap,
    mode:"history"
})
export const asyncRouterMap = [
    {
        path:"/users/guanli",
        name:"用户",
        component:Home,
        redirect:'users/guanli',
        meta: {
            roles: ['admin','user'], // you can set roles in root nav
            icon:'el-icon-menu'
        },
        children:[
            {
                path:"/users/guanli",
                name:"用户管理",
                component:User,
                meta: {
                    roles: ['admin','user'] ,// you can set roles in root nav
                    icon:'el-icon-bell'
                }
            }       
        ]
    },
    {
        path:"/blogs",
        name:"博客",
        component:Home,
        redirect:'/blogs/guanli',
        meta: {
            roles: ['admin'], // you can set roles in root nav
            icon:'el-icon-search'
        },
        children:[
            {
                path:"/blogs/guanli",
                name:"博客管理",
                component:Blogs,
                meta: {
                    roles: ['admin'],
                    icon:'el-icon-news'
                },
            },
            {
                path:"/blogs/fenlei",
                name:"博客分类",
                component:Category,
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-date'
                },
            }
        ]
    },
    {
        path:"/message/guanli",
        name:"留言",
        component:Home,
        redirect:'/message/guanli',
        meta: {
            roles: ['admin'], // you can set roles in root nav,
            icon:'el-icon-edit'
        },
        children:[
            {
                path:"/message/guanli",
                name:"留言管理",
                component:Message,
                meta: {
                    roles: ['admin'], // you can set roles in root nav
                    icon:'el-icon-edit'
                },
            }
        ]
    },
    {
        path:"/yours/info",
        name:"个人",
        component:Home,
        redirect:'/yours/info',
        meta: {
            roles: ['admin','user'] ,// you can set roles in root nav
            icon:'el-icon-service'
        },
        children:[
            {
                path:'/yours/info',
                name:"个人信息",
                component:info,
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-more'
                },
            }
        ]
    },
  
    {
        path:"/grocery",
        name:"杂货铺",
        component:Home,
        redirect:'/plugin/index',
        meta: {
            roles: ['admin','user'] ,// you can set roles in root nav
            icon:'el-icon-printer'
        },
        children:[
            {
                path:'/grocery/toast',
                name:"Toast插件",
                component:()=>import('../pages/GroceryShop/pluginTest'),
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-printer'
                },
            },
            {
                path:'/grocery/Qr',
                name:"二维码生成",
                component:()=>import('../pages/qrcode'),
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-printer'
                },
            },
            {
                path:'/grocery/keyboard',
                name:"虚拟键盘",
                component:()=>import('../pages/GroceryShop/keyBoard'),
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-printer'
                },
            }
        ]
    },
    {
        path:'*',
        hidden: true,
        redirect:'/'
    },

]