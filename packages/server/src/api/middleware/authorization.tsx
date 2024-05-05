
import { Express,Request,Response } from "express";
import Auth from "../../module/Auth/auth";
import { Cookie } from "express-session";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../context";
import { Faculty, Student } from "@prisma/client";

export interface CustomRequest extends Request{
    student:Student
    faculty:Faculty
}

async function authUser(req:CustomRequest,res:Response,next: (err?: Error | undefined) => void){

    
    try{
        const token = req.cookies.token;
        if(!token){
           next(new Error("Authentication token is missing"));
            
        }
       const auth = await Auth.veryfyToken(token) as JwtPayload;
    
       if(!auth){next(new Error('invalid authentication token'))}
    
       if (auth.roll === 'USER') {
        const student = await prisma.student.findUnique({ where: { userId: auth.id } });
        if (!student) {
        throw new Error('Student not registered');
        }
    
        req.student = student;
    
        
    
        
    
        
      }
      if (auth.roll === 'FACULTY') {
        const faculty = await prisma.faculty.findUnique({ where: { id: auth.id } });
        if (!faculty) {
          throw new Error('Faculty not found');
        }

        req.faculty = faculty;
        
      }
      next();
    


    }catch(error:any){
        console.log(error);
        next(error);
    }

}