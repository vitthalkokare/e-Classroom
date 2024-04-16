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

export const AdminRegisterInput = z.object({
  email: z.string().email(),
  password: z
    .string()
    .trim()
    .min(6, { message: "password must be at least 6 characters" }),
    name:z.string(),

    secretKey:z.string().optional()

})

export const OrgRegisterInput = z.object({
  email: z.string().email(),
  password: z
    .string()
    .trim()
    .min(6, { message: "password must be at least 6 characters" }),
    name:z.string(),
    sirname:z.string(),
    vision:z.string(),
    exp:z.string(),
    secretKey:z.string().optional()
    
});


export const info = {
  syllabus:z.string(),
  exam:z.string(),
  edition:z.string(),
  languages:z.string(),
  publisher:z.string(),
}


export const AddNewSubjetData = z.object({
  title:z.string({required_error:"Please enter a title"}),
  about:z.string(),
  lectureTime:z.string(),
  price:z.number({required_error:"Price not be null" }),
  facultyEmail:z.string({required_error:"Provide Faculty Email.."}).toLowerCase(),
  info:z.object({
    syllabus:z.string(),
    exam:z.string(),
    edition:z.string(),
    language:z.string(),
    publication:z.string(),}),
  
  state:z.string(),
  boardName:z.string(),

  standard:z.enum(["Class1", "Class2", "Class3", "Class4", "Class5", "Class6", "Class7", "Class8", "Class9", "Class10"]),


});

export const Classenum = z.object({
  Class:z.enum(["Class1", "Class2", "Class3", "Class4", "Class5", "Class6", "Class7", "Class8", "Class9", "Class10"])
})


export type Classs = z.infer<typeof Classenum>

export type IJWTPyload = z.infer<typeof JWTPayload>

export type IAddNewSubjetData = z.infer<typeof AddNewSubjetData>

export type IOrginput = z.infer<typeof OrgInput>
export type IOrgRegisterinput = z.infer<typeof OrgRegisterInput>
export type IAdminRegisterinput = z.infer<typeof AdminRegisterInput>