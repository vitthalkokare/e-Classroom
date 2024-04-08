

import { gql } from "@apollo/client";


export const AUTH_FACULTY = gql`

query AuthFaculty {
  authFaculty {
    id
    name
    email
    subjectData {
      title
      price
      about
      state
      boardName
      info{
        exam
        syllabus
        language
        edition
        publication
      }
      standard
     
    }
  }
}
`