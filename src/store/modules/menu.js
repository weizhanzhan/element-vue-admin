const menu = {
    state : {
        left_menu_status:false,
        menu_color:"#333744"
    },
    mutations : {
        CHANGE_LEFT_STATUS (state,status) {
            state.left_menu_status=status
        },
        CHANGE_MENU_COLOR(state,color){
            state.menu_color=color

        }
    },
    actions : {
        changeMenuStatus ({commit},status) {
            return new Promise((resolve)=>{
                commit('CHANGE_LEFT_STATUS',status)
                resolve()
            })
        },
        changeMenuColor ({commit} ,color ){
            commit('CHANGE_MENU_COLOR',color)
        }
    }
}
export default menu