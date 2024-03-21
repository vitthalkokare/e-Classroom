import { Gender, Prisma, PrismaClient } from "@prisma/client";

import { prisma } from "../../../context";
import {
  IstudentInputSchema,
  studentInputSchema,
} from "../../schemas/StudentSchemas";
import UserService from "../../../services/User/UserService";
import StudentService, {
  Istd,
} from "../../../services/Student/StudentServices";
import studentEnrollService from "../../../services/Student/studentEnrollService";
import { error } from "console";
import { connect } from "http2";
import { type } from "os";
import { err } from "../../../common/result";
import { P } from "ts-pattern";


export const studentMutationResolver = {
  Mutation: {
    // createStudent: async (_: any, args: IstudentInputSchema, ctx: any) => {
    //   const uid = await ctx.user;
    //   const user = await UserService.findUserByEmail(args.email);
    //   try {
    //     if (!user) {
    //      await prisma.user.create({
    //         data: {
    //           email: args.email,
    //           sid:args.sid,
    //           salt: "",
    //           role: "AUTH0",
    //         },
    //       });
    //     }
    //   } catch (err) {}

    //   const student = await StudentService.createStudent(args, uid);
    //   return student;
    // },

    

    RegisterStudent:async(_:any,studentInput:IstudentInputSchema,ctx:any)=>{
      // @ts-ignore
      const input = studentInput.input

       const uid = ctx.user;
       const date = new Date().toLocaleDateString();
       
      console.log(input)
      

       const student = await StudentService.RegisterStudent(input,uid)
       console.log(student);

      
    

        
      return student;


    },





    enrollSubject: async (_: any, EnrollInput: any[], ctx: any) => {
      const uid = await ctx.user.id;
      if (!uid) throw new Error("Something went wrong");
    
      try{
       const sub = await studentEnrollService.EnrollSubject(EnrollInput,uid);
        return `Subject Enrolled Status`
      }catch(err){}
    },
    


    makePaymet:async(parent:any,args:any,ctx:any)=>{
      const uid = await ctx.user.id
      const student = await UserService.FindUserById(uid) 
      if(!student) throw new Error("Something went wrong")

      try{
        const subject = await studentEnrollService.findSubjectById(student.id)
        if(!subject) return {message:"Please Enroll Subject"}

        subject.forEach(async item => {
          if(item.isEnroll === "Pending"){
            const pay = await prisma.payment.create({
              data:{
                subject:{
                  create:[
                    {title:item.title,
                      about:item.about,
                      price:item.price,
                      isEnroll:"Success",
                    }
                  ]
                },
                Paidstatus:"Success",
                
              }
            })
          }

          return {message:"payment successed"}
          
        });

      }catch(error:any){

        return {status:`${error.message}`}
      }

    }
  },

  Student: {
    subjects: async (parent: any, args: any, ctx: any) => {
      const studentId = await parent.id;
      try {
         const sub =await prisma.subject.findMany({
          where:{studentId: studentId}
         })
         return sub;

      } catch (err) {
        return err;
      }
    },

   
  },
};
