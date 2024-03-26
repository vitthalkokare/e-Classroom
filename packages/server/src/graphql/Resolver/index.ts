
import { mergeResolvers } from '@graphql-tools/merge';
import userMutationResolver from './User/user.mutation';
import userQueryResolver from './User/user.queries';
import { studentMutationResolver } from './Student/student.resolver';
import { studetnQueryResolver } from './Student/student.queries';
import { SubjectMutation } from './Student/subject.resolver';
import { adminMutationResolvers } from './Admin/admin.Mresolver';
import { adminQueryResolvers } from './Admin/admin.Qresolver';
adminQueryResolvers

const mergeResolver = mergeResolvers([adminMutationResolvers,adminQueryResolvers,userQueryResolver,userMutationResolver,studentMutationResolver,studetnQueryResolver,SubjectMutation]);

export default mergeResolver;