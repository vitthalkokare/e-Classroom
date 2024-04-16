import { Prisma, Subject } from "@prisma/client";
import { prisma } from "../../context";

import StudentService from "./StudentServices";

class subjectEnrollServices extends StudentService {


 


  static async getSubjectById(subid:string){
    
    if(!subid) return null;
    try{
      const subject = await prisma.subject.findUnique({
        where:{id:subid}
      })
      return subject;
    }catch(err){
      return err;

    }


  }
  
  static async EnrollSubject(Enrollinput: any[], uid: string) {
    const student = await this.findStudentById(uid);
    if (!student) throw new Error("Student not Registered");
    let enrolldata:any[]= [];

    const sub = await prisma.subject.findMany({where:{studentId:uid}});
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
                    isEnroll: "Success",
                    state:"",
                    boardLebel:"",
                    classlebel:"",
                    subjectDataId:"",
                  },
                ],
  
                skipDuplicates: true,
              });

              

              
              
            



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


  }



 

  static async deleteSubjectById(stdId: string,subId:string){
    if(!subId) throw new Error("Something went wrong");
    
   
    try{
      const stub = await prisma.subject.delete({
        where:{
                id: subId
                
          }
      })
      const allsub = await prisma.subject.findMany();
      return allsub;

    }catch(err){console.log(err)}

  }



  static async findStudentByEnrollStatus(){

    


    try{
      const data = await prisma.student.findMany({
        where:{
          subject:{
            some:{
              isEnroll:'Success'
            },
          },
          
          
          
        },
        include:{
          subject:true
        }
        
      });
      return data;
    } catch(err){

        return err;
    }
  }



  static async findStudentByClass(Class:any){

    


    try{
      const data = await prisma.student.findMany({
        where:{
          standard:Class,
          subject:{
            some:{
              isEnroll:'Success'
            },
          },
          
          
          
        },
        include:{
          subject:true
        }
        
      });
      return data;
    } catch(err){

        return err;
    }
  }
}






export default subjectEnrollServices;
