"use client"

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'

const GqlProvider = ({children}:{children:any}) => {
    const client = new ApolloClient({
        uri: "http://localhost:8000/api/graphql",
        cache: new InMemoryCache(),
        credentials:"include"

    })
  return (
    <ApolloProvider client={client}>
        {children}
      
    </ApolloProvider>
  )
}

export default GqlProvider;
