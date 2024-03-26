import { randomBytes } from "crypto";
import { prisma } from "../../context";
import Auth from "./auth";
import { AdminInput, IAdminInput } from "../../graphql/schemas/Admin";

class AdminService extends Auth{
    
    constructor(){
        super()
    }
    

    static async Admin(adminInput:IAdminInput){
        const {email,password,SecretKey,name} = adminInput;
        
        try{
            const salt = randomBytes(32).toString("hex")

            const hp = await this.generateHash(password,salt);
    
            return  await prisma.admin.create({
                data:{
                    email:email,
                    password:hp,
                    salt:salt,
                    secretKey:SecretKey,
                    name:name
                    
                }
            })

           

        }catch(err){
            return err

        }
    }



    static async veryfyAdmin(input:IAdminInput){

        AdminInput.parse(input)

        const {password,email,SecretKey} = input
        if(password === '' || email === '' || SecretKey === '') throw new Error("Something wrong wrong")

        const admin = await prisma.admin.findUnique({
            where:{email:email}
        })

        if(!admin) throw new Error("Internal Server Error");

        try{
            const salt =  admin.salt
            const varyfypass = await this.generateHash(password,salt)
            if(varyfypass !== admin.password) throw new Error("Invalid Credentials");

            const token = await this.signToken({email:admin.email,id:admin.id,roll:admin.roll})
            return token;
            
            
        }catch(err){return err}

        





    }


}

export default AdminService;