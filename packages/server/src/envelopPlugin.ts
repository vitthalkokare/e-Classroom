
import {makeExecutableSchema} from '@graphql-tools/schema'

import { GraphQLSchema } from 'graphql'
import { resolvers } from './graphql/Resolver'
import { typeDefs } from './graphql/typeDefs'



const executableSchema = makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers,
})


export const envelopPlugin = [
    
]
