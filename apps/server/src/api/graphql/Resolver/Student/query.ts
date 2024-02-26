import { Maybe } from "graphql/jsutils/Maybe";
import { prisma } from "../../../../context";
import UserService from "../../../../services/User/UserService";
import { Result, ok,err } from "../../../../common/result";

export const studetnQueryResolver = {
    
    varyfyEmail:async(_:any,{email}:{email:string})=>{
        
            try {
              const result = await prisma.user.findUnique({
                where: { email:email },
              });
        
              if (result) {
                return result.email
              } else {
                return 'not found'
              }
            } catch (error) {
                error
            }
          },

    







  findAll: async (_: any, { id }: { id: string }) => {
    try {
      const result = await prisma.user.findMany({
        where: { email: id },
      });

      if (result) {
        return result;
      } else {
        return "user not found";
      }
    } catch (error) {
      return "User not found";
    }
  },
};
