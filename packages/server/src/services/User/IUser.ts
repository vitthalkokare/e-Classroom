import { Prisma, User } from "@prisma/client";


export interface IUser{
    FindUserById(id: string):Promise<User | null>
    findUserByEmail(id: string):Promise<User | null>
    

}