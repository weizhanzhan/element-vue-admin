import menu from './menu'
import loading from './loading'
import users from './users'
import permission from './permission'
// const files = require.context('.', false, /\.js$/)
// const modules = {}
// let Realmodule = {}
// files.keys().forEach(key => {
//     if (key === './index.js') return
//     modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
//   })
//   // console.log(manage)
//   // console.log(modules)
//   Realmodule = Object.assign({},manage,modules,statistics)
// console.log(Realmodule)
export default {
    menu,
    loading,
    users,
    permission
}