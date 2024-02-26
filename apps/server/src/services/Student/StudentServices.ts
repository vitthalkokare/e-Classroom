
import { IStudentServices } from "./IStudentServices";
import { PrismaClient, User } from "@prisma/client";
import { prisma } from "../../context";


export interface userPayload{
    email: string;
    password: string;
    salt: string;
}

class StudentService {

    constructor(private readonly Prisma:PrismaClient){
        
    }
    
     public static async CreateUser(payload:userPayload){
        const {email,password,salt} = payload
       return await prisma.user.create ({
            data:{
                email,
                password,
                salt

            }
        })
        
    
     }

    
   




}


export default StudentService;