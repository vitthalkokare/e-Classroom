import { User } from "@prisma/client";
import UserService from "../../../services/User/UserService";

const userQueryResolver = {
  Query: {
    currentUser: async (_: any, { id }: { id: string }, ctx: any) => {
      console.log(ctx.user)
      const uid = ctx.user.data.id
     const user = UserService.FindUserById(uid)
     console.log(user);
      return user

    },


    authUser: (_: any, arg:any, ctx: any):Promise<User | null> => {
      console.log(ctx.user)
      const uid = ctx.user.data
      try{
        if(uid === null) {
          return Promise.resolve(null)
        }
        
        return Promise.resolve(uid)

      }catch(error){
        console.log(error)
        throw new Error("User not authenticated");
      }
      
      
    },
  
  },
};

export default userQueryResolver;
