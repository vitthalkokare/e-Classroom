import { Class } from "@prisma/client";
import { prisma } from "../../../context";
import AdminService from "../../../services/Admin/Adminservice";
import facultySerivces from "../../../services/Faculty/facultyServices";
import {  Classs, IOrgRegisterinput, IOrginput } from "../../schemas/Admin";

export const facultyMutationResolver ={


    Mutation:{


        RegisterFaculty:async(_:any,{input}:{input:IOrgRegisterinput},ctx:any)=>{

            try{
                 await facultySerivces.facultyRegister(input)

                 return {message:"Account Created successful..!"}




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

                  
                  return {message:"Login successful..!"}



          
                }catch(err:any){
                  
                  return err;
                   
                }


        },





        getStudentByInfo:async(p:any,{state,boardName,standard}:{state:string,boardName:string,standard:Class},ctx:any)=>{

          const authfaculty =  await ctx.auth 
          console.log(authfaculty.email)


          if(!authfaculty.email) throw new Error("Not Authorized");
          try{
             

              const ss = await prisma.student.findMany({
                where:{
                  
                  standard:standard,
      
                  subject:{
                    some:{
                      
                      isEnroll:'Success'
                    }
                  }
                }
              })

              return ss;

          }catch(err){
              return err;
          }

  }

    },

    authFaculty:{
      subjectData:async(parent:any,args:any,ctx:any)=>{

        const p = await ctx.auth
        console.log(p.email)
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