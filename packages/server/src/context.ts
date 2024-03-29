
import {Faculty, PrismaClient, User} from '@prisma/client'
import { UseCaseContext } from './common/useCase';



export const prisma = new PrismaClient({
    log:[
        {emit:'event',
        level:'query'
        },
        {emit:'stdout',
        level:'error'
        },
        {emit:'stdout',
        level:'info'},
        {emit:'stdout',
        level:'warn'}
    ]
});


export interface GraphQlServerContext{
    prisma: PrismaClient
   
    auth?:{
       uid:string
       sid:string
       aid:string


    }
    authToken?:string
    
}

function createContext(ctx:Pick<GraphQlServerContext,'auth'  | 'prisma'> & {req:Request}):GraphQlServerContext{

    const {auth,prisma,req} = ctx
    const authToken = req.headers.get('Authorization') ?? '';     

    const useCaseContext:UseCaseContext ={
        prisma,
        authToken,
        auth,
        
        
    }

    return{
        prisma,
    }

    


    

}




