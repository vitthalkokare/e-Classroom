import { OrgInput, IAddNewSubjetData, AddNewSubjetData } from "../../graphql/schemas/Admin";
import { UseCase, UseCaseContext } from "../../common/useCase";
import { Prisma, Subject } from "@prisma/client";
import { Result, err, ok } from "../../common/result";
import AdminService from "./Adminservice";
import { prisma } from "../../context";
import facultySerivces from "../Faculty/facultyServices";

class AdminSubjectServices extends UseCase{
    static ctx: any;
    static adminservice:AdminService
   public constructor(ctx:UseCaseContext){
    super(ctx);
   }

   static async AddNewSubject(input:IAddNewSubjetData){
    
    const {title,about,price,facultyEmail,state,standard,boardName,info,lectureTime} = input

        if(title === '' || price === null){
            throw new Error("Invalid Input Type")
        }
    const faculty = await facultySerivces.getFacultyByEmail(facultyEmail)

    if(!faculty){
     throw new Error("Invalid email address")
         
     
    }
    if(faculty.secretKey === null) throw new Error("Email Not Verified");

    

   
    const f = await prisma.subjectData.findMany({
        where:{facultyEmail:facultyEmail}
    })
    const g = f.find((e)=>e.lectureTime === lectureTime);


    if(g){
        throw new Error("Lecture Time Already Allocated");
    }

    try{ 
        

       await prisma.subjectData.create({
        data:{
            title:title.charAt(0).toUpperCase() + title.slice(1).toLocaleLowerCase().trim(),
            price,
            about:`[ ${about} Medeum ]`,
            lectureTime:lectureTime,
            info:{
                publication:boardName,
                edition:info.edition || "Latest",
                exam:boardName
            },
            boardName:boardName.toUpperCase().trim(),
            standard,
            state:state.charAt(0).toUpperCase() + state.slice(1).toLocaleLowerCase().trim(),
            exp:faculty.exp || "",
            fname:faculty.name,
            vision:faculty.vision || "",
            facultyEmail:facultyEmail,
            classlabel:standard,
            faculty:faculty.facultyEmail
           

        },
        
        
    });

    

    }catch(err:any){
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === 'P2002') {
              throw new Error("A Subject with the same Faculty exists");
            }
          }
          console.error(err);
          return err;
        
        }
    }


   

   

    
    async AllSubject(aid:string):Promise<Result<Subject[], 'DATA BASE ERROR'>>{
       
       const admin = this.ctx.prisma.admin.findFirst({where:{id:aid}})
       if(!admin) {
        throw new Error("something went wrong")
       }

    try{
        const allSubject = await this.ctx.prisma.subject.findMany({
            where:{adminId:aid}
        })

        return {type:'ok',value:allSubject}


        
    }catch(e:any){
        return {type:'error',value:e.message}
        
    }
   

   }


}

export default AdminSubjectServices;