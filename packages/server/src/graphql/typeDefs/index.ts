import { mergeTypeDefs } from "@graphql-tools/merge"

import  userTypeDefs  from "./user.typeDefs"


 const  mergeTypeDef = mergeTypeDefs([userTypeDefs]);
 
 export default mergeTypeDef;
