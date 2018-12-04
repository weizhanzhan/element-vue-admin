export const getBase64=(file)=>{
    return new Promise((resolove,rejects)=>{
        let render= new FileReader()
        const max_size=2100000
        if(file){
            var imgURlBase64=render.readAsDataURL(file)
            render.onload=e=>{
                if (max_size != 0 && max_size < render.result.length) {
                    resolove( '上传失败，请上传不大于2M的图片！')              
                }
                else{
                    //执行上传操作
                    let img_url=render.result
                    resolove(img_url)
                
                }
                
            }
        }
        
    })
   
}