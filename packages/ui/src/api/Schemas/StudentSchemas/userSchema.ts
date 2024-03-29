import { type } from "os";
import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().email(),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(6, { message: "password must be at least 6 characters" }),
});


export type IuserSchema = z.infer<typeof UserSchema>
