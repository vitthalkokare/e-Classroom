import { NextFunction,Request,Response } from "express";


export default async function  authenticate(req:Request,res:Response,next:NextFunction){
    // @ts-ignore
    req.myuser = req.method
    
   

    
    next();
  
    

}