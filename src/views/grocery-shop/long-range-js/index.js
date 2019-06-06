export default {
    functional:true,
    props:{
        src:String
    },
    render(h,ctx) {
        return h('script',{
            attrs:{
                type: 'text/javascript',
                src: ctx.props.src 
            }
        })
    },
}