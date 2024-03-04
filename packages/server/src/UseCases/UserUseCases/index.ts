import { UseCase, UseCaseContext } from "../../common/useCase";
import { IUser } from "../../services/User/IUser";




type fucc = 'not found' | 'db error'
class UserUseCase extends UseCase { 
    constructor(ctx:UseCaseContext,
        private readonly iuser:IUser) {super(ctx)}

        
}

export default UserUseCase;


