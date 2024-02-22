
import { studetnQueryResolver } from "./Student/query";
import { studentMutationResolver} from "./Student/mutation";


export const resolvers = {
    Query:{
        ...studetnQueryResolver

    },

    Mutation:{
        ...studentMutationResolver



    }


}