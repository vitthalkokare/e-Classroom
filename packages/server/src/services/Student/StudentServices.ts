import { Prisma, Student } from "@prisma/client";
import { prisma } from "../../context";
import {
  IstudentInputSchema,
  studentInputSchema,
} from "../../graphql/schemas/StudentSchemas";
import UserService from "../User/UserService";



class StudentService {

   
  static async  findStudentById(uid: string){
    console.log(uid)
    if(!uid) throw new Error("not authorized");
    try {
      const student = await prisma.student.findUnique({
        where: {
          userId: uid,
        },
      });
      return student

    } catch (err:any) {
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
      return student

    } catch (err) {
      return err;
    }
  }

    static async RegisterStudent(studentInput:IstudentInputSchema,uid:any){
      const {name,email,sirname,gender,standard,state,city,boardName,sid,phone,classlabel} = studentInput

      const user = await UserService.findUserByEmail(uid.email);

 if(!user){

  try{
    return await prisma.user.create({
      data:{
        email,
        sid,
        salt:"",
        role:"AUTH0"

      }
    })
      
      }catch(err){ return err}
         
       }
      

      
      const student = await this.findStudentByEmail(uid.email)
      if(student) return student;

      
        if(!student){
          try{
            const newstudent = await prisma.student.create({
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
               classlabel:standard,
               userId:uid.id,
              }
              
               
             })
             return newstudent;
  
           
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

       



    }


   
     
  }


export default StudentService;
