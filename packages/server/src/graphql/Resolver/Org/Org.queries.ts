import { prisma } from "../../../context";
import subjectEnrollServices from "../../../services/Student/subjectEnrollServices";


export const OrgQueries = {
    Query:{
        getStudentByStatus:async(_:any,args:any,ctx:any)=>{

                const Org = await ctx.auth
                if(Org.roll === 'ADMIN' || Org.roll === 'FACULTY'){
                    
                    try{
                        const getStudetn = await subjectEnrollServices.findStudentByEnrollStatus();

                        return getStudetn;
                    }catch(err){
                        console.log(err);

                    }
                }

                

               


        },


        unAuthData:async(p:any,args:any,ctx:any)=>{
            try{
                 const data = await prisma.subjectData.findMany();

                 if(data){

                    const uniqueBoard =  [...new Set(data.map((item)=>item.boardName))]            

                    return uniqueBoard;
                 }

            }catch(err){ 
                return err;
            }

        }

    }
}