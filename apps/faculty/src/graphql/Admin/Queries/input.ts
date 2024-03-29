import { gql } from "@apollo/client";


export const AUTH_ADMIN = gql`

query AuthAdmin {
    authAdmin {
      id
      name
      email
    }
  }
`


export const SUBJECT_DATA = gql`




query SubjectData {
  subjectData {
    title
    price
    about
    fname
    exp
    vision
    state
    boardName
    info
    standard
  }
}

`