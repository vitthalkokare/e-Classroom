


export  const validate = (schmma:any) => async(req:Request,res:Response,next:any) =>{

    try{
        
        const parssBody = await schmma.parseAsync(req.body);

        
        
        next();

    }catch(error){

    }

}