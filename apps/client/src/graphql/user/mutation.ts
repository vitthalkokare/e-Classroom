import { gql } from "@apollo/client";

export const  CREATE_USER = gql `
mutation Mutation($email: String, $password: String) {
    createUser(email: $email, password: $password)
  }
  

`
export const SIGN_In = gql `
mutation Mutation($email: String, $password: String) {
  userSignToken(email: $email, password: $password)
}

`
