import JWT from "jsonwebtoken";
import { prisma } from "../../context";

import { createHmac, randomBytes } from "crypto";
import { IloginUserSchema, IuserCreateSchema,creaeUserSchema, loginUserSchrma } from "../../graphql/schemas/UserSchemas";
import { User } from "@prisma/client";
import Auth from "../Auth/auth";

class UserService{
 
  
  public  static async findUserByEmail(email: string){
    if(!email) return null;
    try{
      const result = await prisma.user.findUnique({
        where: {
          email:email
        },
      });
      return result;
    }catch(e){
    
    }
  }

  static async FindUserById(id: string){
    if(!id) return null;
    try{
      const result = await prisma.user.findUnique({
        where: {
          id:id
        },
      });
      return result;
    }catch(e){
    }
  }

  private static async generateHash(password: string, salt: string) {
    const HashPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    return HashPassword;
  }

  static async createUser(createUserPayload: IuserCreateSchema):Promise<User | string> {
    const userSchema = creaeUserSchema.parse(createUserPayload);
    const { email, password } = userSchema;
    if(email === "" || password ==="") throw new Error("all fields are required");
    const salt = randomBytes(34).toString("hex");
    const hashedPassword = await UserService.generateHash(password, salt);

    try {
      const result = await prisma.user.create({
        data: {
          email:email.toLowerCase(),
          password: hashedPassword,
          salt,
          role:"USER"
        },
      });
      return Promise.resolve(result);
    } catch (error) {
      return "Error creating user"
    }
  }

 

  static async SignUserToken(loginUserPayload: IloginUserSchema) {
    const { email, password } = loginUserPayload;
    const user = await UserService.findUserByEmail(email);

    if (!user) throw new Error("user not found,Create new Account.!");

    if(email === "" || password === "" ) throw new Error("all fields are required");

    const userSalt = user.salt;
    const veryfyPassword = await UserService.generateHash(password, userSalt);

    if (veryfyPassword !== user.password) throw new Error("invalid password");

    // Generate Token

   const token = await Auth.signToken({id:user.id,email:user.email,roll:user.role})
   return token;

   
  }

 
}
 
export default UserService;
