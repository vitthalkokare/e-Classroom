import { mergeTypeDefs } from "@graphql-tools/merge"

import  userTypeDefs  from "./user.typeDefs"
import { studentTypeDefs } from "./student.typeDefs";


 const  mergeTypeDef = mergeTypeDefs([userTypeDefs, studentTypeDefs]);
 
 export default mergeTypeDef;
