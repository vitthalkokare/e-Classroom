import { Student } from "@prisma/client";
import { IloginUserSchema, IuserCreateSchema, authSchema, creaeUserSchema, loginUserSchrma } from "../../schemas/UserSchemas";
import { prisma } from "../../../context";
import { GraphQLError } from "graphql";
import UserService from "../../../module/User/userService";
import StudentService from "../../../module/Student/StudentServices";


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
        throw new Error("Email already Exists");
      } else {
        try {
          const user = await UserService.createUser(creaeUserInput);
          return {message:"Account Created successful..!"}
        } catch (error:any) {
          return error.message;
        }
      }
    },

    auth0:async(_:any,{email,sid,sub}:{email:string,sid:string,sub:string},ctx:any)=>{
      authSchema.parse({email})

      const user = await UserService.findUserByEmail(email);
      
      if(!user){
        try{
           await prisma.user.create({
            data:{
              email:email,
              sid:sid,
              sub:sub,
              salt:"",
              role:"AUTH0"
            }
          });

          return "User created successfully..!"
         
        

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

        await ctx.res.cookie('token',Token);
       
        return {message:"Login successful..!"}

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
      const uemail = await ctx.auth;
      try {
        const student = await StudentService.findStudentByEmail(uemail.email);
        return student;
      } catch (err) {
        throw new Error("Error: User not found");
      } 
    }
  }

};

export default userMutationResolver;
