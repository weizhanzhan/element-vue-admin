import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/layout/home"
import User from "../views/users/users"
import Blogs from "../views/blogs/blogs"
import Message from '../views/leave-message/message'
import Category from '../views/blogs/categories'
import info from '../views/account'
import Login from '../views/Login'
import WriteBlogs from '../views/blogs/write'

Vue.use(VueRouter)

export const constantRouterMap =[
    {
        path:'/login',
        component:Login,
        name:"登陆",
        hidden: true
    },
    {path:'/',redirect:'/dashboard',hidden:true},
    {
        path:"/dashboard",
        name:"Dashboard",
        component:Home,
        redirect:'/dashboard/index',
        meta: {
            roles: ['admin'], // you can set roles in root nav
            icon:'el-icon-location'
        },
        children:[
            {
                path:"/dashboard/index",
                name:"DashboardIndex",
                component:()=>import('../views/dashboard'),
                meta: {
                    roles: ['admin'] // you can set roles in root nav
                },
            }
        ]
    },
    {
        path:'/register',
        hidden: true,
        component:()=>import('../views/login/register'),
        name:"zhuce"
    },
  
]
export default new VueRouter({
    routes:constantRouterMap,
  //  mode:"history"
})
export const asyncRouterMap = [
    {
        path:"/users",
        name:"User",
        component:Home,
        redirect:'users/admin',
        meta: {
            roles: ['admin'], // you can set roles in root nav
            icon:'el-icon-menu'
        },
        children:[
            {
                path:"/users/admin",
                name:"Admin",
                component:User,
                meta: {
                    roles: ['admin'] ,// you can set roles in root nav
                    icon:'el-icon-bell'
                }
            }       
        ]
    },
    {
        path:"/blogs",
        name:"Blog",
        component:Home,
        redirect:'/blogs/admin',
        meta: {
            roles: ['admin'], // you can set roles in root nav
            icon:'el-icon-search'
        },
        children:[
            {
                path:"/blogs/admin",
                name:"Admin",
                component:Blogs,
                meta: {
                    roles: ['admin'],
                    icon:'el-icon-news'
                },
            },
            {
                path:"/blogs/category",
                name:"Category",
                component:Category,
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-date'
                },
            },
            {
                path:"/blogs/create",
                name:"Create",
                component:WriteBlogs,
                meta: {
                    roles: ['admin'],
                    icon:'el-icon-news'
                },
            },
        ]
    },
    {
        path:"/message/admin",
        name:"Message",
        component:Home,
        redirect:'/message/admin',
        meta: {
            roles: ['admin'], // you can set roles in root nav,
            icon:'el-icon-edit'
        },
        children:[
            {
                path:"/message/admin",
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
        path:"/account",
        name:"Account",
        component:Home,
        redirect:'/account/info',
        meta: {
            roles: ['admin','user'] ,// you can set roles in root nav
            icon:'el-icon-service'
        },
        children:[
            {
                path:'/account/info',
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
        path:"/components",
        name:"components",
        component:Home,
        redirect:'/components/toast',
        meta: {
            roles: ['admin','user'] ,// you can set roles in root nav
            icon:'el-icon-printer'
        },
        children:[
            {
                path:'/components/toast',
                name:"Toast",
                component:()=>import('../views/grocery-shop/pluginTest'),
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-printer'
                },
            },
            {
                path:'/components/Qr',
                name:"QR code",
                component:()=>import('../views/grocery-shop/qrcode'),
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-printer'
                },
            },
            {
                path:'/components/keyboard',
                name:"keyBoard",
                component:()=>import('../views/grocery-shop/keyBoard'),
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-printer'
                },
            },
            {
                path:'/components/dialog',
                name:"Dialog",
                component:()=>import('../views/grocery-shop/dialog'),
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-printer'
                },
            },
            {
                path:'/components/merry-go-round',
                name:"merryGoRound",
                component:()=>import('../views/grocery-shop/merry-go-round'),
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-printer'
                },
            },
            {
                path:'/components/form',
                name:'Form',
                component:()=>import('../views/grocery-shop/form'),
                meta: {
                    roles: ['admin','user'] ,
                    icon:'el-icon-printer'
                },
            },
            {
                path:'/components/input-tree',
                name:'inputTree',
                component:()=>import('../views/grocery-shop/input-tree'),
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