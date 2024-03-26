export const adminQueryResolvers = {


    Query:{
        
        authAdmin:async(_:any,args:any,ctx:any)=>{

            const admin = await ctx.user.role;
            if(admin !== 'ADMIN') throw new Error("Something went wrong")
            
            
            
            
        }
    }
}