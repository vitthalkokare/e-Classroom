import { Gender, PrismaClient } from "@prisma/client";
import { prisma } from "../../../context";
import {
  IstudentInputSchema,
  studentInputSchema,
} from "../../schemas/StudentSchemas";
import UserService from "../../../services/User/UserService";
import StudentService, {
  Istd,
} from "../../../services/Student/StudentServices";

export const pp = new PrismaClient({});

export const studentMutationResolver = {
  Mutation: {
   
    createStudent:async(_:any,args:IstudentInputSchema,ctx:any)=>{
      const uid = await ctx.user;
      const user = await UserService.findUserByEmail(args.email)
      try{
        if(!user){
          await prisma.user.create({
            data:{
              email:args.email,

              salt:"",
              role:"AUTH0"

            }
          })
        
        } 

     

        
      }catch(err){}
     

      const student = await StudentService.createStudent(args,user,uid)
      return student;


    

    }

    
  }


  
};
