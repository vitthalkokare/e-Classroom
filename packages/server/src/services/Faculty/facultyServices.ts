import { randomBytes } from "crypto";
import { prisma } from "../../context";
import { IOrgRegisterinput, IOrginput, OrgInput } from "../../graphql/schemas/Admin";
import Auth from "../Auth/auth";

class facultySerivces{
    static async getFacultyByEmail(email:string){
        if(!email) throw new Error("Email is not valid")
        try{
            const admin = await prisma.admin.findFirst({where:{email:email}})
            return admin;
        }catch(e:any){
            return e.message;
        }

    }
    

    static async facultyRegister(facultyInput:IOrgRegisterinput){

        const {email,password,secretKey,name,sirname,vision,exp} = facultyInput;
        
        if(email === "" || password ==="") throw new Error("all fields are required");

        try{
            const salt = randomBytes(32).toString("hex")

            const hp = await Auth.generateHash(password,salt);
    
            return  await prisma.faculty.create({
                data:{
                    email:email,
                    password:hp,
                    salt:salt,
                    secretKey:secretKey,
                    name:name,
                    
                    sirname:sirname,
                    vision:vision,
                    exp:exp,
                
                    
                    
                    
                }
            })


           

        }catch(err){
            return err

        }
    }


    static async signFacultyToken(input:IOrginput){


        const {password,email,secretKey} = input

        if(password === '' || email === '' || secretKey === '') throw new Error("Something wrong wrong")

        const faculty = await prisma.faculty.findUnique({
            where:{email:email} 
        })

        if(!faculty) throw new Error("Internal Server Error");

        try{
            const salt =  faculty.salt 
            const varyfypass = await Auth.generateHash(password,salt)
            if(varyfypass !== faculty.password && secretKey !== faculty.secretKey) throw new Error("Invalid Credentials");
            
            const token = await Auth.signToken({email:faculty.email,id:faculty.id,roll:faculty.role})
            return token;
            
            
            
        }catch(err){return err}

        





    }



}

export default facultySerivces;