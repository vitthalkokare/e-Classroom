import { Prisma, Subject } from "@prisma/client";
import { prisma } from "../../context";

import StudentService from "./StudentServices";

class subjectEnrollServices extends StudentService {


 

  static async findSubjectById(uid: string) {
    if (!uid) throw new Error("Something went wrong");

    return await prisma.subject.findMany({
      where: {
        studentId: uid,
      }, 
    });
  }

  static async getSubjectById(subid:string):Promise<Subject | null>{
    
    if(!subid) return null;
    try{
      const subject = await prisma.subject.findUnique({
        where:{id:subid}
      })
      return Promise.resolve(subject);
    }catch(err){
      return Promise.reject(err);

    }


  }
  
  static async EnrollSubject(Enrollinput: any[], uid: string) {
    const student = await this.findStudentById(uid);
    if (!student) throw new Error("Student not Registered");
    let enrolldata:any[]= [];

    const sub = await this.findSubjectById(student.id);
    try {

      for (const [key, value] of Object.entries(Enrollinput)) {
        if (Array.isArray(value)) {
          const item = sub.map((i) => i.title);

          const newarr = value.filter((v) => !item.includes(v.title));

           newarr.map(async (obj)=>{
              if (!obj.price) throw new Error("something went wrong"); 
               await prisma.subject.createMany({
                data: [
                  {
                    title: obj.title,
                    price: obj.price,
                    about: obj.about,
                    studentId: student.id,
                    isEnroll: "Pending",
                  },
                ],
  
                skipDuplicates: true,
              });

              

              
              
            enrolldata.push({title:obj.title,price:obj.price,name:student.name,boardName:student.boardName,standard:student.standard,sirname:student.sirname,email:student.email,phone:student.phone})
            



          })

        }
      }

    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          console.error("Unique constraint violation:", err);
          return "A subject with the same title already exists";
        }

      }
      console.error(err);
      return "An error occurred while enrolling in subjects";
    }

    console.log( enrolldata)

  }



 

  static async deleteSubjectById(stdId: string,subId:string){
    if(!subId) throw new Error("Something went wrong");
    
   
    try{
      const stub = await prisma.subject.delete({
        where:{
                id: subId
                
          }
      })
      const allsub = await this.findSubjectById(stdId)
      return allsub;

    }catch(err){console.log(err)}

  }
}


export default subjectEnrollServices;
