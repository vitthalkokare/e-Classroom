import { GraphQLError } from "graphql";
import { prisma } from "../../../context";


export const studetnQueryResolver = {


  currentStudent: async (_:any,args:any,ctx:any)=>{
    try{
      const restult = await prisma.student.findUnique({
        
        where:{phone:args.phone}
      })
      console.log(restult)

      return restult
  
    }catch(err){ 
      throw new GraphQLError('something went wrong',{extensions:{code:'VALIDATION_FAILED'}})
    }
  },

  currentFaculty: async (_:any,args:any,ctx:any)=>{
    try{
      const restult = await prisma.faculty.findUnique({
        
        where:{email:args.email}
      })
      console.log(restult)

      return restult
  
    }catch(err){ 
      throw new GraphQLError('something went wrong',{extensions:{code:'VALIDATION_FAILED'}})
    }
  }


};
