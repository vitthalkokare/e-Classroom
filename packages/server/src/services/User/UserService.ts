import JWT from "jsonwebtoken";
import { prisma } from "../../context";

import { createHmac, randomBytes } from "crypto";
import { IloginUserSchema, IuserCreateSchema,creaeUserSchema, loginUserSchrma } from "../../graphql/schemas/UserSchemas";
import { User } from "@prisma/client";

class UserService {
  constructor() {}
 
  
  public  static async findUserByEmail(email: string){
    const result = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return Promise.resolve(result);
  }

  static async FindUserById(id: string){
    return await prisma.user.findUnique({
      where: { id },
    });
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
    const salt = randomBytes(34).toString("hex");
    const hashedPassword = await UserService.generateHash(password, salt);

    try {
      const result = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          salt,
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

    const userSalt = user.salt;
    const veryfyPassword = await UserService.generateHash(password, userSalt);

    if (veryfyPassword !== user.password) throw new Error("invalid password");

    // Generate Token

    const token = JWT.sign({ id: user.id, email: user.email }, "superman");
    return token;
  }

  static  veryfyUserToken(token: string) {
    try{
      if(!token){
          throw new Error("User not authenticated");

      }
      const verifiedToken = JWT.verify(token, 'superman');
      return {success:true,data:verifiedToken}
      
    }catch(err){
     return {success:false, data:"token is not valid"}
    }
  }
}

export default UserService;
