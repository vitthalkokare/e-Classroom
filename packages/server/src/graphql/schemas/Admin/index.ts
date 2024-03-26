import { z } from "zod";

export const AdminInput = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z
    .string()
    .trim()
    .min(6, { message: "password must be at least 6 characters" }),
    SecretKey: z.string({required_error:"Secret are required"})
    
    
});

export type IAdminInput = z.infer<typeof AdminInput>