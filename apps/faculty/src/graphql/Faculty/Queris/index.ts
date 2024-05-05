

import { gql } from "@apollo/client";


export const AUTH_FACULTY = gql`

query AuthFaculty {
  authFaculty {
    id
    name
    email
    subjectData {
      id
      fname
      facultyEmail
      title
      price
      about
      state
      boardName
      lectureTime
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


export const   GET_STUDETNS_BY_INFO = gql `

query GetStudentByInfo($state: String!, $boardName: String!, $standard: String!, $title: String) {
  getStudentByInfo(state: $state, boardName: $boardName, standard: $standard, title: $title) {
    id
    standard
    name
    sirname
    gender
    email
    city
    imageUrl
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
    classlabel
  }
}

`