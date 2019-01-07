
let Dialog = {
    install:function(Vue){
        Vue.prototype.$dialog = function(value){
            let dialog = Vue.extend({
                // template:`
                //     <div class="wz-dialog">wewe</div>
                // `
                render(){
                    return(
                        <div class="wz-dialog">
                            <div class="dialog-wrapper"></div>
                        </div>
                    )
                }
            })

            let diaDom =  new dialog().$mount().$el;

            document.body.appendChild(diaDom)
            setTimeout(()=>{
                document.body.removeChild(diaDom)
            },2500)

        }
    }
}
export default Dialog