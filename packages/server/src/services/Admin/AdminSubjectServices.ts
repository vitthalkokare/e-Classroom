import { OrgInput, IAddNewSubjetData } from "../../graphql/schemas/Admin";
import { UseCase, UseCaseContext } from "../../common/useCase";
import { Subject } from "@prisma/client";
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

    const {title,about,price,fname,state,standard,boardName,info,femail} = input

    const faculty = await facultySerivces.getFacultyByEmail(femail)

    if(!faculty) {
        throw new Error("email should be provided")
    }
    try{

       await prisma.subjectData.create({
        data:{
            title,
            price,
            about,
            info,
            boardName,
            standard,
            state,
            faculty:faculty.id
        }
    })


    }catch(err){
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