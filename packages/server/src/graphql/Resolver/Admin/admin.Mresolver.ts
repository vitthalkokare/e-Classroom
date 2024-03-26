import AdminService from "../../../services/Auth/Adminservice";
import { IAdminInput } from "../../schemas/Admin";


export const adminMutationResolvers = {


    Mutation:{
        AddSubjectData:(_:any,{input}:{input:any},ctx:any)=>{


            
        },

        RegisterAdmin:async(_:any,{input}:{input:IAdminInput},ctx:any)=>{

            try{
                 await AdminService.Admin(input)

                 return "Created Successfully"



            }catch(e){
                return e;
            }

            

        },

        AdminLogin:async(_:any,{input}:{input:IAdminInput},ctx:any)=>{

            try{

                const Token = await AdminService.veryfyAdmin(input)
          
                  if(ctx.req.cookies && ctx.req.cookies.token){
                    ctx.res.clearCookie('token');
                  }
          
                  await ctx.res.cookie('token',Token);
                 
                  return "Login successful"
          
                }catch(err:any){
                  
                  return err;
                   
                }


        }

    }
}