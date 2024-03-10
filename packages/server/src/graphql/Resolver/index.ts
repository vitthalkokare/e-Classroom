
import { mergeResolvers } from '@graphql-tools/merge';
import userMutationResolver from './User/user.mutation';
import userQueryResolver from './User/user.queries';

 const mergeResolver = mergeResolvers([userQueryResolver,userMutationResolver]);

export default mergeResolver;