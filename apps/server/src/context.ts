
import {Faculty, PrismaClient, User} from '@prisma/client'
import UserUseCase from './UseCases/UserUseCases';
import FacultyUseCases from './UseCases/FacultyUseCases';
import StudentUseCases from './UseCases/StudetnUseCases';
import UserService from './services/User/UserService';
import StudentService from './services/Student/StudentServices';
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
    useCases:{
        user:UserUseCase
        student:StudentUseCases
        faculty:FacultyUseCases 

    }
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

function createContext(ctx:Pick<GraphQlServerContext,'auth' | 'currentStudent' | 'currentFaculty' | 'prisma' | 'useCases'> & {req:Request}):GraphQlServerContext{

    const {auth,currentFaculty,currentStudent,prisma,useCases,req} = ctx
    const authToken = req.headers.get('Authorization') ?? '';     

    const useCaseContext:UseCaseContext ={
        prisma,
        authToken,
        auth,
        
        
    }

    return{
        prisma,
        useCases,
        currentFaculty,
        currentStudent
    }

    


    

}




