import { IstudentInputSchema, studentInputSchema } from "../../schemas/StudentSchemas";
import StudentService from "../../../services/Student/StudentServices";
import studentEnrollService from "../../../services/Student/subjectEnrollServices";
import subjectEnrollServices from "../../../services/Student/subjectEnrollServices";

export const studentMutationResolver = {
  Mutation: {
    RegisterStudent: async (
      _: any,
      studentInput: IstudentInputSchema,
      ctx: any
    ) => {
      // @ts-ignore
      const input = studentInput.input;

      const uid = ctx.user;

      const student = await StudentService.RegisterStudent(input, uid);

      return student;
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
