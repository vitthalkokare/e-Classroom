import { IStudentServices } from "./IStudentServices";
import { Prisma, PrismaClient, User } from "@prisma/client";
import { prisma } from "../../context";
import {
  IstudentInputSchema,
  studentInputSchema,
} from "../../graphql/schemas/StudentSchemas";
import UserService from "../User/UserService";
import { promise } from "zod";

export interface Istd {
  phone: bigint;
  email: string;
}

class StudentService {
  static async findStudentById(userId: string) {
    if (!userId) throw new Error("user not authorized");
    
      const student = await prisma.student.findUnique({
        where: {
          userId,
        },
      });
      return student;
   
  }
  static async findStudentByEmail(email: string) {
    if (!email) throw new Error("not a valid email");
    try {
      const student = await prisma.student.findUnique({
        where: {
          email
        },
      });
      return Promise.resolve(student);

    } catch (err) {
      return err;
    }
  }

    static async RegisterStudent(studentInput:IstudentInputSchema,uid:any){
      studentInputSchema.parse(studentInput)
      const {name,email,sirname,gender,standard,state,city,boardName,sid,phone} = studentInput


      const user = await UserService.findUserByEmail(uid.email);

      try{
       if(!user){
         return await prisma.user.create({
           data:{
             email,
             sid,
             salt:"",
             role:"AUTH0"

           }
         })
       }
      }catch(err){ return err}

      const student = await prisma.student.findUnique({
        where:{
          email:uid.email,
  
        }
      })
      if(student) return student;

        try{

          if(!student){
            const date = new Date().toISOString();

            const newstudent = await prisma.student.create({
              // @ts-ignore
             data:{
              email:uid.email,
              name,
              sirname,
              gender,
              standard,
              state,
              phone,
              city,
              boardName,
              userId:uid.id,
             }
              
            })
            return newstudent;
          }
        }catch(err:any){ 
          if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === 'P2002') {
              return "A Student with the same Phone already exists";
            }
          }
          console.error(err);
          return "An error occurred while enrolling in subjects";
        
        }



    }






  static async createStudent(
    studentInput: IstudentInputSchema,
    uid:any,
  ) {
      studentInputSchema.parse(studentInput)
    const {email, name, sirname, gender, phone, city, state,boardName } = studentInput;

    const student = await prisma.student.findUnique({
      where:{
        email:uid.email,

      }
    })

    if(student) return student;
      
    try{
     const newstudent = await prisma.student.create({
         data:{
           name,
           sirname,
           email:uid.email,
           userId:uid.id,
           state,
           city,
           phone,
           boardName,
           gender,
         }
       })    

     return newstudent;

       
     }catch(err){
       return err;
     }

    }


   
     
  }


export default StudentService;
