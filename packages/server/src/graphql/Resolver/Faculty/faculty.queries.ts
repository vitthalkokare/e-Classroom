import { prisma } from "../../../context";


export const facultyQueryResolver = {
    Query:{
        authFaculty:async(_:any,args:any,ctx:any)=>{

            const faculty = await ctx.auth;
            if(faculty.roll !== 'FACULTY') throw new Error("not authrized");

            try{
                
                return await faculty;

            }catch(err){
                return err;

            }

        },



      
    }



}