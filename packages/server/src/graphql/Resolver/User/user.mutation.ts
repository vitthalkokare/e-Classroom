import { User } from "@prisma/client";
import UserService from "../../../services/User/UserService";
import { IuserCreateSchema, creaeUserSchema } from "../../schemas/UserSchemas";
import JWT from "jsonwebtoken";


const userMutationResolver = {
  Mutation: {
    createUser: async (
      _: any,
      creaeUserInput: IuserCreateSchema,
      context: any
    ) => {
      const userSchema = creaeUserSchema.parse(creaeUserInput);

      const varyfyEmail = await UserService.findUserByEmail(userSchema.email);

      if (varyfyEmail) {
        console.log("Email already Exists");
        throw new Error("Email already Exists");
      } else {
        try {
          const user = await UserService.createUser(creaeUserInput);
          console.log(user);
          return { message: "user created successfully" };
        } catch (error) {
          return error;
        }
      }
    },

    userSignToken: async (
      _: any,
      creaeUserInput: IuserCreateSchema,
      ctx: any
    ) => {
      creaeUserSchema.parse(creaeUserInput);
      const { email, password } = creaeUserInput;

      const Token = await UserService.SignUserToken(creaeUserInput);

      try{
        if(ctx.req.cookies && ctx.req.cookies.token){
          ctx.res.clearCookie('token');
        }
  
  
      }catch(err){}
      ctx.res.cookie('token',Token);



        if (!Token) return Promise.resolve("Enternal Server Error");
          console.log(ctx.user)
        
      
        return Promise.resolve(Token);


    },

  },
};

export default userMutationResolver;
