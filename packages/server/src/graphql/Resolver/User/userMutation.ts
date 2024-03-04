import UserService from "../../../services/User/UserService";
import { IuserSchema, UserSchema } from "../../schemas/UserSchemas";

 const userMutationResolver ={
    
    createUser: async (_: any, creaeUserPayload: IuserSchema, context: any) => {
        const userSchema = UserSchema.parse(creaeUserPayload);

        const varyfyEmail = await UserService.findUserByEmail(userSchema.email);
    
        if (varyfyEmail) {
          console.log("Email already Exists");
    
        } else {
          try {
            UserService.createUser(creaeUserPayload);
            return "User created successfully";
          } catch (error) {
            return error;
          }
        }
      },




      authUserSignToken:async(_:any,veryfyUserPayload:IuserSchema,context:any)=>{
        UserSchema.parse(veryfyUserPayload)
        const {email,password} = veryfyUserPayload;

        const Token = await UserService.SignUserToken(veryfyUserPayload); 

        // context.res.setHeader('authorization',`Bearer ${Token}`)
       
         

          // context.res.cookie('token', Token)
          console.log(context);
          return Token;    
    
      },
     


}

export default userMutationResolver;