import { randomBytes } from "crypto";
import { prisma } from "../../context";
import Auth from "../Auth/auth";
import { OrgInput, IOrginput, IOrgRegisterinput, OrgRegisterInput, IAdminRegisterinput, AdminRegisterInput } from "../../graphql/schemas/Admin";
import { UseCase, UseCaseContext } from "../../common/useCase";
import { Admin } from "@prisma/client";
import { Result } from "../../common/result";

class AdminService extends UseCase{
    
   public constructor(ctx:UseCaseContext){
        super(ctx)
    }

    
    static async getAdmin(aid:string){
        if(!aid) throw new Error("Internal Server Error");

        try{
            const admin = await prisma.admin.findFirst({where:{id:aid}})
            return admin;
        }catch(e:any){
            return e.message;
        }


    }
    static async getAdminByEmail(email:string){
        if(email) throw new Error("Email is not valid")
        try{
            const admin = await prisma.admin.findFirst({where:{email:email}})
            return admin;
        }catch(e:any){
            return e.message;
        }

    }

    static async AdminRegister(adminInput:IAdminRegisterinput){
        AdminRegisterInput.parse(adminInput)
        const {email,password,secretKey,name} = adminInput;
    
            if(email === '' || password === '' || secretKey ===  undefined || name === '') throw new Error("all fields are required");
        
        try{
            const salt = randomBytes(32).toString("hex")

            const hp = await Auth.generateHash(password,salt);
    
            return  await prisma.admin.create({
                data:{
                    email:email,
                    password:hp,
                    salt:salt,
                    secretKey:secretKey,
                    name:name,
                    
                    
                }
            })

           

        }catch(err){
            return err

        }
    }



    static async veryfyAdmin(input:IOrginput){

        OrgInput.parse(input);

        const {password,email,secretKey} = input
        if(password === '' || email === '' || secretKey === '') throw new Error("Something wrong wrong")

        const admin = await prisma.admin.findUnique({
            where:{email:email}
        })

        if(!admin) throw new Error("Internal Server Error");

        try{
            const salt =  admin.salt
            const varyfypass = await Auth.generateHash(password,salt)
            if(varyfypass !== admin.password) throw new Error("Invalid Credentials");
            if(secretKey !== admin.secretKey) throw new Error("Invalid Credentials");

         return await Auth.signToken({email:admin.email,id:admin.id,roll:admin.roll})
           
            
            
        }catch(err){return err}

        





    }


}

export default AdminService;