import { mergeTypeDefs } from "@graphql-tools/merge"

import  userTypeDefs  from "./user.typeDefs"
import { studentTypeDefs } from "./student.typeDefs";
import { SubscriptionTypeDefs } from "./subscription.typeDefs";
import { AdmintypeDefs } from "./admin.typeDefs";


 const  mergeTypeDef = mergeTypeDefs([AdmintypeDefs,userTypeDefs, studentTypeDefs,SubscriptionTypeDefs]);
 
 export default mergeTypeDef;
  