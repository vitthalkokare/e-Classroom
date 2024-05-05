import { IstudentInputSchema } from "../../schemas/StudentSchemas";
import { prisma } from "../../../context";
import StudentService from "../../../module/Student/StudentServices";

export const studentMutationResolver = {
  Mutation: {
    RegisterStudent: async (
      _: any,
      {input}:{input:IstudentInputSchema},
      ctx: any
    ) => {
     
      

     
      try{
        const uid = await ctx.auth;

        const student = await StudentService.RegisterStudent(input, uid);

       
        return student;

      }catch(err){

        return err;
      }
    },

    

  
  },

  

  Student: {
    subjects: async (parent: any, args: any, ctx: any) => {
      const studentId = await parent.id;

     if(studentId){
      try {
        const sub = await prisma.subject.findMany({where:{studentId: studentId}})
        return sub;
      } catch (err) {
        return err;
      }
     }
    },


    

    

  },

  
};
