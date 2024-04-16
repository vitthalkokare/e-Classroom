import { prisma } from "../../../context";

export const adminQueryResolvers = {


    Query:{
        
        authAdmin:async(_:any,args:any,ctx:any)=>{

            const admin = await ctx.auth;
            if(admin.roll !== 'ADMIN') throw new Error("Something went wrong")

            try{
                const ad = await prisma.admin.findFirst({
                    where:{id:admin.id}
                })
                if(!ad) throw new Error("Something went wrong")

                return {name:ad.name,email:ad.email,id:admin.id}

            }catch(err){
                return err;
            }
            
            
            
            
        },


        Classroom:async(_:any,args:any,ctx:any)=>{

            const org = await ctx.auth;
             if( org.roll !== 'ADMIN') throw new Error("Something went wrong");
            
            try{
                const student = await prisma.student.findMany();
                const faculty = await prisma.faculty.findMany();

                return {student,faculty}


            }catch(err){
                return err;
            }

        }

        
    }
}