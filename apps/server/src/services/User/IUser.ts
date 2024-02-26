import { Prisma, User } from "@prisma/client";


export interface IUser{
    createUser():Promise<User | null>;

}