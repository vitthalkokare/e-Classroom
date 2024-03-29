import AdminService from "../../../services/Admin/Adminservice";
import facultySerivces from "../../../services/Faculty/facultyServices";
import { IOrgRegisterinput, IOrginput } from "../../schemas/Admin";

export const facultyMutationResolver ={


    Mutation:{


        RegisterFaculty:async(_:any,{input}:{input:IOrgRegisterinput},ctx:any)=>{
            console.log(input)

            try{
                 await facultySerivces.facultyRegister(input)

                 return "Created Successfully"



            }catch(e){
                return e;
            }

            

        },




        LoginFaculty:async(_:any,{input}:{input:IOrginput},ctx:any)=>{

            console.log(input)
            try{
                const Token = await facultySerivces.signFacultyToken(input)

                  if(ctx.req.cookies && ctx.req.cookies.token){
                    ctx.res.clearCookie('token');
                  } 
          
                  await ctx.res.cookie('token',Token);
                 
                  return Token;
          
                }catch(err:any){
                  
                  return err;
                   
                }


        }

    }
}