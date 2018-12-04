export default {
    leftMenuStatus:state=>state.menu.left_menu_status,
    menu_color:state=>state.menu.menu_color,
    loading : state => state.loading.loading,
    roles: state => state.users.roles,
    name:state=>state.users.name,
    addRouters:state => state.permission.addRouters,
    permission_routers:state=>state.permission.routers,
    whiteList:state=>state.users.whiteList
}