import { gql } from "@apollo/client";


export const AUTH_USER = gql`

query AuthUser {
  authUser {
    id
    email
    authToken
  }
}


`