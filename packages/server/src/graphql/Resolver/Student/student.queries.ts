import { GraphQLError } from "graphql";
import { prisma } from "../../../context";
import { isErrored } from "stream";


export const studetnQueryResolver = {

 Query:{
 
    EnrolledSubject:async(p:any,args:any,ctx:any)=>{

        
    },

    Classes:async(p:any,args:any,ctx:any)=>{
      const uid = await ctx.auth
      console.log(uid);
      if(!uid) throw new Error("not authenticated");
     
      const student = await prisma.student.findUnique({where:{userId:uid.id}});
      if(student){
         try{
            const subject = await prisma.subject.findMany({
               where:{
                  studentId:student.id,
                  isEnroll:'Success'
                  
               },
            });
            const sub = subject.flatMap(i=>i.title);
   
            const subd = prisma.subjectData.findMany({
               where:{
                  title:{
                     in:sub
                  }
               }
            })
            return subd;
         }catch(err){
            return err;
   
         }

      }

     


    }
 }


};
