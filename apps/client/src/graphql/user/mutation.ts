import { gql } from "@apollo/client";

export const  CREATE_USER = gql `
mutation Mutation($email: String, $password: String) {
    createUser(email: $email, password: $password)
  }
  

`
export const USER_SIGN_In = gql `
mutation UserSignToken($email: String, $password: String) {
  userSignToken(email: $email, password: $password) {
    message
  }
}

`

export const USER_LOG_out = gql `
mutation userLogout {
  userLogout {
    message
  }
}

`

// export const  CREATE_AUTH_USER = gql `
// query CurrentStudent($email: String) {
//   authUser(email: $email) {
//     authToken
//     email
//     id
//     studentData {
//       id
//       standard
//       name
//       sirname
//       gender
//       email
//       city
//       state
//       boardName
//       userId
//       phone
//       Subjects {
//         title
//         price
//         about
//         isEnroll
//       }
//     }
//   }
// }
// `
