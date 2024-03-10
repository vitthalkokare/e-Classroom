
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
        sub: string
        iss: string
        aud: string[]
        iat: number
        exp: number
        azp: string
        scope: string


    }
    authToken?:string
    currentStudent?:User | null
    currentFaculty?:Faculty | null

}

function createContext(ctx:Pick<GraphQlServerContext,'auth' | 'currentStudent' | 'currentFaculty' | 'prisma'> & {req:Request}):GraphQlServerContext{

    const {auth,currentFaculty,currentStudent,prisma,req} = ctx
    const authToken = req.headers.get('Authorization') ?? '';     

    const useCaseContext:UseCaseContext ={
        prisma,
        authToken,
        auth,
        
        
    }

    return{
        prisma,
        currentFaculty,
        currentStudent
    }

    


    

}




