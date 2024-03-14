import { gql } from "@apollo/client";


export const AUTH_USER = gql`
query AuthUser {
  authUser {
    email
    authToken
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
        description
        isEnrolled
        price
        title
      }
    }
  }
}



`