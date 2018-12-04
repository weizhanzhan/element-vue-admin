const loading = {
    state : {
        loading:false
    },
    mutations : {
        CANCEL_LOADING (state,bool) {
            state.loading=bool
        }
    },
    actions : {
        cancelLoading ( { commit } ,bool){
            commit('CANCEL_LOADING',bool)
        }
    }
}
export default loading