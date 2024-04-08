import { randomBytes } from "crypto";
import { prisma } from "../../context";
import { IOrgRegisterinput, IOrginput, OrgInput, OrgRegisterInput } from "../../graphql/schemas/Admin";
import Auth from "../Auth/auth";

class facultySerivces{
    static async getFacultyByEmail(email:string){
        if(!email) throw new Error("Email should not be empty")
        try{
            return await prisma.faculty.findUnique({where:{email:email}})
           
        }catch(e:any){
            return e;
        }

    }
    

    static async facultyRegister(facultyInput:IOrgRegisterinput){

        OrgRegisterInput.parse(facultyInput);
        const {email,password,name,sirname,vision,exp} = facultyInput;

    

        
        if(email === "" || password ==="") throw new Error("all fields are required");

        const fid = await prisma.faculty.findUnique({where:{email:email}})
        if(fid) return "Account Already exists.!"

        try{
            const salt = randomBytes(32).toString("hex")

            const hp = await Auth.generateHash(password,salt);
    
            return  await prisma.faculty.create({
                data:{
                    email:email.toLowerCase().trim(),
                    password:hp,
                    salt:salt,
                    name:name,                    
                    sirname:sirname,
                    vision:vision,
                    exp:exp + " Year of Experience"
                
                    
                    
                    
                }
            })


           

        }catch(err){
            return err

        }
    }


    static async signFacultyToken(input:IOrginput){

        OrgInput.parse(input);
        const {password,email,secretKey} = input

        if(password === '' || email === '' || secretKey === '') throw new Error("Something wrong wrong")

        const faculty = await prisma.faculty.findUnique({
            where:{email:email} 
        })

        if(!faculty) throw new Error("Not a Valid Credentials");
        console.log(faculty);
        try{
            const salt =  faculty.salt 
            const varyfypass = await Auth.generateHash(password,salt)
            if(varyfypass !== faculty.password) throw new Error("Invalid Credentials");
            if(secretKey !== faculty.secretKey) throw new Error("Invalid Credentials");

            const token = await Auth.signToken({email:faculty.email,id:faculty.id,roll:faculty.role})
            return token;
            
            
            
        }catch(err){return err}

        





    }



}

export default facultySerivces;