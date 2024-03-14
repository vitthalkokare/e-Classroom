
import { mergeResolvers } from '@graphql-tools/merge';
import userMutationResolver from './User/user.mutation';
import userQueryResolver from './User/user.queries';
import { studentMutationResolver } from './Student/student.mutation';
import { studetnQueryResolver } from './Student/student.queries';

const mergeResolver = mergeResolvers([userQueryResolver,userMutationResolver,studentMutationResolver,studetnQueryResolver]);

export default mergeResolver;