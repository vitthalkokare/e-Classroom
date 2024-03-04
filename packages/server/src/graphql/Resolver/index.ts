
import { studetnQueryResolver } from "./Student/studentQuerisResolver";
import { studentMutationResolver} from "./Student/studentMutationResolver";
import { userQueryResolver } from "./User/userQuery";
import userMutationResolver from "./User/userMutation";

export const resolvers= {
    Query:{
        
        ...userQueryResolver,
        ...studetnQueryResolver,

        
        

    },

    Mutation:{        
        ...userMutationResolver,
        ...studentMutationResolver,
        



    }


}