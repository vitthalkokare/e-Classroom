import { IStudentServices } from "./IStudentServices";
import { PrismaClient, User } from "@prisma/client";
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
    try {
      return await prisma.student.findUnique({
        where: {
          userId,
        },
      });
    } catch (err) {
      return err;
    }
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

  static async createStudent(
    studentInput: IstudentInputSchema,
    uid:any,
    user:any
  ) {
      studentInputSchema.parse(studentInput)
    const {email, name, sirname, gender, phone, city, state,boardName } = studentInput;

    const student = await prisma.student.findUnique({
      where:{
        email:uid.email || email,

      }
    })

    if(student) return student;
      
    try{
     const newstudent = await prisma.student.create({
         data:{
           name,
           sirname,
           email:uid.email || user.email,
           userId:uid.id || user.id,
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
