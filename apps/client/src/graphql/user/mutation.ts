import { gql } from "@apollo/client";

export const  CREATE_USER = gql `
mutation Mutation($email: String, $password: String) {
    createUser(email: $email, password: $password)
  }
  

`
export const USER_SIGN_In = gql `
mutation Mutation($email: String, $password: String) {
  userSignToken(email: $email, password: $password)
}

`

export const USER_LOG_out = gql `
mutation userLogout {
  userLogout {
    message
  }
}

`

export const  CREATE_AUTH_USER = gql `

mutation Auth0($email: String, $sid: String, $sub: String) {
  auth0(email: $email, sid: $sid, sub: $sub) {
    authToken
    email
    id
    studentData {
      id
      standard
      name
      sirname
      gender
      email
      city
      state
      boardName
      userId
      phone
      subjects {
        title
        price
        description
        isEnrolled
      }
    }
  }
}
`
