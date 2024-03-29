
import zod from 'zod'

export const studentInputSchema = zod.object({
  sid:zod.string(),
  email:zod.string().email(),
  boardName:zod.string({required_error:"Please enter a board name"}),
  name:zod.string({required_error:"name not provided"}),
  sirname:zod.string({required_error:"sirname not provided"}),
  phone:zod.string({required_error:"phone not provided"}),
  gender:zod.enum(["MALE", "FEMALE","OTHER"]),
  state:zod.string({required_error:"state not provided"}),
  city:zod.string({required_error:"city not provided"}),
  classlabel:zod.string(),
 standard:zod.enum(["Class1", "Class2", "Class3", "Class4", "Class5", "Class6", "Class7", "Class8", "Class9", "Class10"]),
  
  


})

export type IstudentInputSchema = zod.infer<typeof studentInputSchema>
