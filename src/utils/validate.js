export const isEmail = (email)=>{
    const mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(mailReg.test(email)){
        return true
    }else{
        return false
    }
 
 }