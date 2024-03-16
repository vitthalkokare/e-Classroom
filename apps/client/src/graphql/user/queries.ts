import { gql } from "@apollo/client";


export const AUTH_USER = gql`
query AuthUser($email: String) {
  authUser(email: $email) {
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