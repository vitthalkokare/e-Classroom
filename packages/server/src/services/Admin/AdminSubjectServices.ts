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
    AddNewSubjetData.parse(input);
    const {title,about,price,facultyEmail,state,standard,boardName,info} = input

    const faculty = await facultySerivces.getFacultyByEmail(facultyEmail)

    if(!faculty) throw new Error("Email is not valid..!");

    if(faculty.secretKey === null) throw new Error("Faculty not verified..!");


    try{ 
        

       await prisma.subjectData.create({
        data:{
            title:title.charAt(0).toUpperCase() + title.slice(1).toLocaleLowerCase().trim(),
            price,
            about:`[ ${about} Medeum ]`,
            info:info,
            boardName:boardName.toUpperCase().trim(),
            standard,
            state:state.charAt(0).toUpperCase() + state.slice(1).toLocaleLowerCase().trim(),
            exp:faculty.exp || "",
            fname:faculty.name,
            vision:faculty.vision || "",
            facultyEmail:facultyEmail,
            classlabel:standard,
            faculty:faculty.facultyEmail
           

        }
    })
    return {message:"New Subject Added successful..!"}


    }catch(err:any){
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === 'P2002') {
              return {message:"A Subject with the same Faculty exists"};
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