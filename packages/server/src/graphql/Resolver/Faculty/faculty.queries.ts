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

        
        getStudentByInfo:async(p:any,{state,boardName,standard,title}:{state:string,boardName:string,standard:any,title:string},ctx:any)=>{


            const authfaculty =  await ctx.auth 
  
  
            if(!authfaculty.email) throw new Error("Not Authorized");
            try{
               
  
                const ss = await prisma.student.findMany({
                  where:{                 
        
                    subject:{
                      some:{
                        title:title,
                        classlebel:standard, 
                        state:state,
                        boardLebel:boardName,
                        isEnroll:'Success'
                      },
                    },
                    
                  },
                 
                })
  
                if(ss.length <= 0) return [];
  
                return ss;
  
            }catch(err){
                return err;
            }
  
    }



      
    }



}