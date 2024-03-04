
import { z } from "zod";

export const createUserPyload = z.object({
  email: z.string().email(),

    password: z
      .string({ required_error: "password is required" })
      .trim()
      .min(6, { message: "password must be at least 6 characters" }),

})
export type createUserPyloads = z.infer<typeof createUserPyload>

