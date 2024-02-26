import { Prisma, User } from "@prisma/client";
import { Result, ok } from "../../common/result";
import { prisma } from "../../context";
import UserService from "../../services/User/UserService";
import { UseCase, UseCaseContext } from "../../common/useCase";
import { IUser } from "../../services/User/IUser";
type fucc = 'not found' | 'db error'
class UserUseCase extends UseCase { 
    constructor(ctx:UseCaseContext,
        private readonly iuser:IUser) {super(ctx)}

        
}

export default UserUseCase;


