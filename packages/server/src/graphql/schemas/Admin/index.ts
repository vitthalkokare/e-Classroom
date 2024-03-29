import { z } from "zod";


export const JWTPayload = z.object({
  id:z.string(),
  email:z.string().email(),
  Roll:z.enum(["ADMIN","FACULTY","USER"])
})


export const OrgInput = z.object({
  email: z.string().email(),
  password: z
    .string()
    .trim()
    .min(6, { message: "password must be at least 6 characters" }),
    secretKey: z.string({required_error:"Secret are required"}),
    
    
});

export const OrgRegisterInput = z.object({
  email: z.string().email(),
  password: z
    .string()
    .trim()
    .min(6, { message: "password must be at least 6 characters" }),
    secretKey: z.string({required_error:"Secret are required"}),
    name:z.string(),
    sirname:z.string(),
    vision:z.string(),
    exp:z.string(),
    
});


export const AddNewSubjetData = z.object({
  title:z.string(),
  about:z.string(),
  price:z.number(),
  fname:z.string(),
  info:z.string().optional(),
  state:z.string(),
  boardName:z.string(),
  femail:z.string().email(),

  standard:z.enum(["Class1", "Class2", "Class3", "Class4", "Class5", "Class6", "Class7", "Class8", "Class9", "Class10"]),


});

export type IJWTPyload = z.infer<typeof JWTPayload>

export type IAddNewSubjetData = z.infer<typeof AddNewSubjetData>

export type IOrginput = z.infer<typeof OrgInput>
export type IOrgRegisterinput = z.infer<typeof OrgRegisterInput>