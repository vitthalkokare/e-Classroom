import { SubjectData } from "@prisma/client";
import { prisma } from "../../context";
import subjectEnrollServices from "../Student/subjectEnrollServices";
import { promise } from "zod";

class SubjectDataServices{
    constructor(){
        
        
    }

    static async findSubjectDataById(id:string){
        
        if(id === undefined){
            return;
        }
        try{
            const subjectdataId = await  prisma.subjectData.findUnique({where:{id:id}});
            if(!subjectdataId){
             throw new Error("Subject not found");
            }
            return subjectdataId;
 
         }catch(error){
             console.log(error);
         }
        
        

    }
    
}

export default SubjectDataServices;