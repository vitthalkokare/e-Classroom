import { Context } from "vm";
import UserService from "../../../services/User/UserService";


export const userQueryResolver = {
    getAllInfo:(_:any,params:any,context:any)=>{
        console.log(context.req)
        return "hellwo"
    },

    getCurrentUser: async (_: any, {token}:{token:string}, context: any) => {

        const vf = await UserService.veryfyUserToken(token as string);
               // @ts-ignore
    
        if(vf && vf.id){
          try{
            // @ts-ignore
            const user = await UserService.FindUserById(vf.id);
            console.log(user);
            return user;
    
          }catch(err){}
        }
    
        // if (context && context.id) {
        //   const userId = context.id;
    
          
        // }
        // try {
    
        //   const user = await UserService.FindUserById();
        //   return user;
    
        // } catch (e) {}
      },
      
      hello:async(_:any,args:any,ctx:Context,info:any)=>{
        ctx.res.setHeader('fuck', 'hello');
       let s = ctx.res.getHeaders();
       
        
      const c =  ctx.req.headers

        console.log(s)
        console.log(ctx.req.headers)

        return 'hello' 

      }

 
};
