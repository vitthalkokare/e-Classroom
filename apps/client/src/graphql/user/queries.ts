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
        id
        title
        price
        about
        isEnroll
        studentId
      }
      dob
    }
  }
}
`

export const SUBJECT_DATA = gql`
query SubjectData {
  subjectData {
    title
    price
    about
    state
    id
    boardName
    info{
      syllabus
      edition
      exam
      publication
      language
    }
    standard
    exp
    vision
    fname
  }
}

`