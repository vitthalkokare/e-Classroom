import { prisma } from "../../../context";
import {  IOrgRegisterinput, IOrginput } from "../../schemas/Admin";
import facultySerivces from "../../../module/Faculty/facultyServices";

export const facultyMutationResolver ={


    Mutation:{


        RegisterFaculty:async(_:any,{input}:{input:IOrgRegisterinput},ctx:any)=>{

            try{
              const result =   await facultySerivces.facultyRegister(input)

              return result;



            }catch(e){
                return e;
            }

            

        },




        LoginFaculty:async(_:any,{input}:{input:IOrginput},ctx:any)=>{

            try{
                const Token = await facultySerivces.signFacultyToken(input)

                  if(ctx.req.cookies && ctx.req.cookies.token){
                    ctx.res.clearCookie('token');
                  } 
          
                  await ctx.res.cookie('token',Token);

                  
                  return {message:Token}



          
                }catch(err:any){
                  
                  return err;
                   
                }


        },






    },

    authFaculty:{
      subjectData:async(parent:any,args:any,ctx:any)=>{

        const p = await ctx.auth
        try{

          const fe = await prisma.subjectData.findMany({
            where:{facultyEmail:p.email}
          })

          

         return fe;

          


        }catch(err){
          console.log(err);

        }

      }
    }

   
}