export const isEmail = (email)=>{
   const mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
   if(email.test(mailReg)){
       return true
   }else{
       return false
   }

}