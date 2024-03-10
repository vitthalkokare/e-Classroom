import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../context";

export const pp = new PrismaClient({}) 

export const studentMutationResolver = {

  
  registerStudent: async(_:any,{name,sirname}:{name:string,sirname:string},ctx:any)=>{

     try{
      return await prisma.student.create({
        
        data:{
         name,
         sirname, 
         roll:"STUDENT",
         state:"maharashtra",
         city:"uk",
         standard:"FourthStandard",
         email:"ok@gmail.com",
         phone:45389798

        }
      })


     }catch(err){
      return err
     }
  },


  createFaculty:async(_:any,{email,password}:{email:string,password:string})=>{

    try{
        const result = await prisma.faculty.create({
            data:{
                email,
                password,
                name:'manager',
                sirname:'manager',
                salt:'lkfjs',
                vision:"klfj",
                exp:'4rwj'

            }
        })
        return result;



    }catch(err){
            return err
    }

}


};
