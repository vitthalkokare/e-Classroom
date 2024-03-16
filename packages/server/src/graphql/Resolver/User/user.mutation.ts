import { Student } from "@prisma/client";
import StudentService from "../../../services/Student/StudentServices";
import UserService from "../../../services/User/UserService";
import { IloginUserSchema, IuserCreateSchema, authSchema, creaeUserSchema, loginUserSchrma } from "../../schemas/UserSchemas";
import { prisma } from "../../../context";
import { GraphQLError } from "graphql";


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
          return  "user created successfully"
        } catch (error) {
          return GraphQLError
        }
      }
    },

    auth0:async(_:any,{email,sid,sub}:{email:string,sid:string,sub:string},ctx:any)=>{
      authSchema.parse({email})

      const user = await UserService.findUserByEmail(email);
      
      if(!user){
        try{
          return await prisma.user.create({
            data:{
              email:email,
              sid:sid,
              sub:sub,
              salt:"",
              role:"AUTH0"
            }
          });

         
        

      }catch(err){
        console.log(err);
         return GraphQLError
      }

      }
     

      return user;
      

    },

    userSignToken: async (
      _: any,
      creaeUserInput: IloginUserSchema,
      ctx: any
    ) => {
      const { email, password } = creaeUserInput;


      try{

      const Token = await UserService.SignUserToken(creaeUserInput);

        if(ctx.req.cookies && ctx.req.cookies.token){
          ctx.res.clearCookie('token');
        }

        ctx.res.cookie('token',Token);
       
        return Token;

      }catch(err:any){
        
        return err;
         
      }

    },

    userLogout:async(_:any,args:any,ctx:any)=>{
      try{
        if(ctx.req.cookies && ctx.req.cookies.token){
          ctx.res.clearCookie("token");
        }
        return {message:"User logged out successfully"}


      }catch(error){
        return {message:error}
      }

    }

  },

  User: {
    studentData: async (parent: any, args: any, ctx: any)=> {
      const useremail = ctx.user.email || parent.email;
      try {
       
  
        const student = await StudentService.findStudentByEmail(useremail);
        return student;
      } catch (err) {
        throw new Error("Error: User not found");
      } 
    }
  }

};

export default userMutationResolver;
