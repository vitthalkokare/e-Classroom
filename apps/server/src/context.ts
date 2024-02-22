
import {PrismaClient} from '@prisma/client'


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
    currentStudent?:string | null
    currentFaculty?:string | null

}

export function createContext(
    ctx: Pick<GraphQlServerContext,'auth' |'currentStudent'> & {req:any}

):GraphQlServerContext{
    const {auth, currentStudent,req} = ctx;
    const authToken = req.headers.authorization;
    



    return {
        prisma,
        auth,
        authToken,
        currentStudent
    }

}




