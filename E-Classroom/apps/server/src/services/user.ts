import mongoose from "mongoose";
import { createHash, createHmac, randomBytes ,  } from "crypto";
import User from '../model/user'
import JWT from 'jsonwebtoken'
const fake = "fakesalt"

const jwt_secret = 'fuckingsecret'

export interface createUserPyload{
    Name: string;
    Sirname: string;
    Email: string;
    Password: string;
    Salt: string;

}

export interface LoginPayload{
    Email: string;
    Password: string;
}


class UserService{

    private static async getUserByEmail(Email:string){
        
         return   await User.findOne({Email:Email});
         
         
             
    }


   private static GenerateHash(Password: string,Salt: string){

    const hashedPass = createHmac('sha256', Salt).update(Password).digest('hex');
    return hashedPass;


   }

   public static createUser(userPayload: createUserPyload) {
    const { Name, Sirname, Email, Password, Salt } = userPayload;
    const secret = randomBytes(32).toString('hex');

    const hashedPass = UserService.GenerateHash(Password, fake);

    const user = User.create({
        Name: Name,
        Sirname: Sirname,
        Email: Email,
        Password: hashedPass,
        Salt: fake,  // Make sure the property name matches the User model
        
    });

    return user;
}


    public static async  UserSignIn(Payload:LoginPayload){
        const {Email,Password} = Payload;
       const  user = await UserService.getUserByEmail(Email);
       
       if(!user)  throw new Error(`User not found`);

       const ChecHashPass = UserService.GenerateHash(Password, fake);
       if(ChecHashPass !== user.Password) throw new Error(`Wrong password`);


        const token = JWT.sign({id:user.id,Email:user.Email},jwt_secret);
        return token;

    }



   


}


export default UserService;


