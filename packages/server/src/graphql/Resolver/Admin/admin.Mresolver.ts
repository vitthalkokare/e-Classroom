import { prisma } from "../../../context";
import AdminSubjectServices from "../../../services/Admin/AdminSubjectServices";
import AdminService from "../../../services/Admin/Adminservice";
import { IAddNewSubjetData, IOrgRegisterinput, IOrginput } from "../../schemas/Admin";


export const adminMutationResolvers = {


    Mutation:{
      AddClass:async(_:any,{label}:{label:string},ctx:any)=>{

          const aid = await ctx.auth
          if(aid.roll !== 'ADMIN') throw new Error("Not authorized..")
          try{
            await prisma.classroom.create({
              data:{
                label:label
              }
          })
        }catch(e:any){
            return e.message;
        }
        return "Class Added Successfully.!"
      },
        AddSubjectData:async(_:any,{input}:{input:IAddNewSubjetData},ctx:any)=>{

          const admin = ctx.auth.roll
          


          if(admin !== 'ADMIN') throw new Error("Something went wrong");


          

          try{
            await AdminSubjectServices.AddNewSubject(input);
            
            return "Subject added successfully"
            
          }catch(err:any){

              return err.message;
          }



            
        },

        RegisterAdmin:async(_:any,{input}:{input:IOrgRegisterinput},ctx:any)=>{

            try{
                 await AdminService.OrgSignUp(input)

                 return "Created Successfully"



            }catch(e){
                return e;
            }

            

        },

        AdminLogin:async(_:any,{input}:{input:IOrginput},ctx:any)=>{



            try{

                const Token = await AdminService.veryfyAdmin(input)

               
          
                  if(ctx.req.cookies && ctx.req.cookies.token){
                    ctx.res.clearCookie('token');
                  }
          
                  await ctx.res.cookie('token',Token);
                  const aid = await ctx.auth.id;
                  
                  return Token;
          
                }catch(err:any){
                  
                  return err.message;
                   
                }


        }

    }
}