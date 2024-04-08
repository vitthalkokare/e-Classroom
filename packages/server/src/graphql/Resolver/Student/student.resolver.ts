import { IstudentInputSchema, studentInputSchema } from "../../schemas/StudentSchemas";
import StudentService from "../../../services/Student/StudentServices";
import studentEnrollService from "../../../services/Student/subjectEnrollServices";
import subjectEnrollServices from "../../../services/Student/subjectEnrollServices";

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

      try {
        const sub = await subjectEnrollServices.findSubjectById(studentId);
        return sub;
      } catch (err) {
        return err;
      }
    },


    

    

  },

  
};
