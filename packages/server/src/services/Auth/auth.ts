import { createHmac } from "crypto";
import JWT from "jsonwebtoken";

enum Roll{
    ADMIN,
    FACULTY,
    USER,
    AUTH0,
    STUDENT

}
interface Payload{
    id: string;
    roll:string,
    email: string;
}

class Auth{

     static async generateHash(password: string, salt: string) {
        const HashPassword = createHmac("sha256", salt)
          .update(password)
          .digest("hex");
        return HashPassword;
      }



    static async signToken({id,roll,email}:Payload){

        return JWT.sign({ id:id, email:email,roll:roll }, "superman");
        

    }
}


export default Auth;