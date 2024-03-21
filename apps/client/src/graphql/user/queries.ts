import { gql } from "@apollo/client";


export const AUTH_USER = gql`
query AuthUser($email: String) {
  authUser(email: $email) {
    authToken
    email
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
        id
        title
        price
        about
        isEnroll
        studentId
      }
    }
  }
}
`