import { login , getMine } from '@/api/user'
import { setToken ,removeToken} from '@/utils/auth' 

const users= {
    state:{
        Token:'',
        roles:[],
        name:'',
        email:'',
        avatar:'',
        id:'',
        whiteList:['/login']
    },
    mutations:{
        SET_TOKEN(state,token){
            state.Token=token
        },
        SET_ROLES(state,role){
            state.roles.push(role)
        },
        SET_NAME(state,name){
            state.name=name
        },
        SET_EMAIL(state,email){
            state.email=email
        },
        SET_AVATAR(state,avatar){
            state.avatar=avatar
        },
        SET_ID(state,id){
            state.id=id
        },
        ADD_WHITE_ROUTE(state,route){
            state.whiteList.push(route)
        }
    },
    actions:{
        Login( {commit } , user){
            return new Promise((resolve,reject)=>{
                login(user).then(data=>{
                    commit('SET_TOKEN', data.data.token);
                    setToken(data.data.token)            
                    resolve({state:true,msg:"登录成功"})
                })
                .catch(err=>{          
                    reject({state:false,msg:err[Object.keys(err)[0]]})
                })
            })
        },
        logout( { commit , state}){
            return new Promise((resolve,reject)=>{
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                removeToken()
                resolve('退出成功!')
            })
        },
        GetUserInfo( { commit } ){
            return new Promise((resolve,reject) =>{
                getMine().then( data => {
                    const user = data.data
                    if(user.role){
                        commit('SET_ROLES', user.role)
                    }
                    commit('SET_NAME',user.name)
                    commit('SET_EMAIL',user.email)
                    commit('SET_AVATAR',user.avatar)
                    commit('SET_ID',user.id)
                    resolve(user)
                }).catch(err =>{
                    reject(err)
                })
            })
        },
        add_white_route( { commit },route) {
            commit('ADD_WHITE_ROUTE',route)
        }
    }

}
export default users