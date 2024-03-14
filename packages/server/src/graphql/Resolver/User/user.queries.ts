import { Student, User } from "@prisma/client";
import UserService from "../../../services/User/UserService";
import StudentService from "../../../services/Student/StudentServices";
import { object } from "zod";
import { Result } from "../../../common/result";

const userQueryResolver = {
  Query: {
    currentUser: async (_: any, { id }: { id: string }, ctx: any) => {
      console.log(ctx.user)
      const uid = ctx.user.data.id
     const user = UserService.FindUserById(uid)
     console.log(user);
      return user

    },


    authUser: async(_: any, arg:any, ctx: any)=> {
      const uid = ctx.user.id || ''
      const userEmail = await ctx.req.oidc.user;
      console.log( userEmail)


      try{
        
        const userData = UserService.FindUserById(uid)
        if(!userData) return null;

        return userData; 
        

      }catch(error){
        return error;
      }
      
      
    },
  
  },



 
};

export default userQueryResolver;
