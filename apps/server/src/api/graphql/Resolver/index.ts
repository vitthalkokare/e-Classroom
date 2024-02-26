
import { studetnQueryResolver } from "./Student/query";
import { studentMutationResolver} from "./Student/mutation";
import { GraphQlServerContext } from "../../../context";


export const resolvers= {
    Query:{
        ...studetnQueryResolver

    },

    Mutation:{
        ...studentMutationResolver,
        



    }


}