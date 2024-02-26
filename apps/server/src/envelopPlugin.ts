
import {makeExecutableSchema} from '@graphql-tools/schema'
import { typeDefs } from './api/graphql/typeDefs'
import { resolvers } from './api/graphql/Resolver'
import { GraphQLSchema } from 'graphql'



const executableSchema = makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers,
})


export const envelopPlugin = [
    
]
