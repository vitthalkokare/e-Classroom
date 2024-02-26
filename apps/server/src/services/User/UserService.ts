import { $Enums, Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../../context";
import { IUser } from "./IUser";
import { string } from "ts-pattern/dist/patterns";
import { UserSchema } from "../../api/Schemas/StudentSchemas/userSchema";


export interface Iuser {
  email: string;
  password: string;
}

class UserService {
  constructor(private readonly prisma: PrismaClient , userSchema: typeof UserSchema) {
    
    
  }


   public static async getUserByEmail(email:typeof UserSchema){
    const userEmail = UserSchema.parse(email);
    
    const result = await prisma.user.findUnique({
        where:{
            email:userEmail.email
            
        }
    })
    return result?.email
    
  }

  private static async HashPassword(password:string){



  }

  static async createUser(userPayload: typeof UserSchema) {
    
    const userSchema = UserSchema.parse(userPayload)
    const {email,password} = userSchema
        
    try {
      const user = await prisma.user.create({
        data: {
          email,
          password
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
   
}

export default UserService;
