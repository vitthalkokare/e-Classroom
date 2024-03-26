import UserService from "../../../services/User/UserService";
import JWT from "jsonwebtoken";


const userQueryResolver = {
  Query: {
    currentUser: async (_: any, args:string, ctx: any) => {
      const uid = ctx.user
      
     if(!uid) throw new Error("User not authenticated")

     return true;


    },


    authUser: async(_: any, args:any, ctx: any)=> {

      const auth0user = ctx.user.email 
      console.log(ctx.user.role)  
      if(!auth0user){
        
                  const uuid = await UserService.findUserByEmail(args.email)
                  if(!uuid) return;
                  try{
                   
                    const auth0token =  JWT.sign({email:uuid.email,sid:uuid.sid},'superman');
                    if(ctx.req.cookies && ctx.req.cookies.token){
                      ctx.res.clearCookie('token');
                    }
                   ctx.res.cookie('token',auth0token); 

                  }catch(err){return err}      
      
      }

       


      try{

        const uid = await ctx.user.email
    
      const userData = await UserService.findUserByEmail(uid)

          if(!userData) return null;
          
        return userData; 
        

      }catch(error){
        return error;
      }
      
     
      
    },
  
  },



 
};

export default userQueryResolver;
