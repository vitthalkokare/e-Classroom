import { mergeTypeDefs } from "@graphql-tools/merge"

import  userTypeDefs  from "./user.typeDefs"
import { studentTypeDefs } from "./student.typeDefs";
import { SubscriptionTypeDefs } from "./subscription.typeDefs";
import { AdmintypeDefs } from "./admin.typeDefs";
import { facultyTypeDefs } from "./faculty.typeDefs";

 const  mergeTypeDef = mergeTypeDefs([AdmintypeDefs,userTypeDefs, studentTypeDefs,SubscriptionTypeDefs,facultyTypeDefs]);
 
 export default mergeTypeDef;
  