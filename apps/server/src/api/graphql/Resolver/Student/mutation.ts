
import { prisma } from "../../../../context"
import UserService, { Iuser } from "../../../../services/User/UserService"
import { UserSchema } from "../../../Schemas/StudentSchemas/userSchema";

export const studentMutationResolver = {

    saveUser:async(_:any,userPayload:typeof UserSchema)=>{
        
        const userSchema = UserSchema.parse(userPayload);
        const {email,password} = userSchema
        const varyfyEmail = await UserService.getUserByEmail;
        

            try{
                if(!varyfyEmail){
                    const result = await prisma.user.create({
                    data:{
                        email,
                        password
                    }
                })
                return result.email
                }
                else{
                    throw new Error('Email already exists');
                }
            }

            catch(error){
                 return error;
            }
           
                
            
            


    


   }
   ,


   
 
    
}