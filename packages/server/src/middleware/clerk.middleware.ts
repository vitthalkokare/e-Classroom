import {
    ClerkExpressWithAuth,
    LooseAuthProp,
    WithAuthProp,
  } from '@clerk/clerk-sdk-node';
import { NextFunction } from 'express';
  
  
  declare global {
    namespace Express {
      interface Request extends LooseAuthProp {}
    }
  }

 const  clerkMiddelware = async(req:WithAuthProp<Request>,res:Response,next:NextFunction)=>{

    
    next();

}
export default clerkMiddelware;