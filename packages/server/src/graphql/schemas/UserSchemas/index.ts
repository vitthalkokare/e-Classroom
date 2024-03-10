import { z } from "zod";

export const creaeUserSchema = z.object({
  email: z.string().email(),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(6, { message: "password must be at least 6 characters" }),
    
    
});

export const loginUserSchrma = z.object({
  email:z.string({ required_error: "invalid credentials"}).email(),
  password:z.string({ required_error: "password is required"})
  .trim()
  .min(6,{message:"invalid credentials"})
})

export type IloginUserSchema = z.infer<typeof loginUserSchrma>


export type IuserCreateSchema = z.infer<typeof creaeUserSchema> 
