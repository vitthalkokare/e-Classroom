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

`

export const CLASSROOM = gql`


query Classroom {
  Classroom {
    faculty {
      email
      name
      sirname
      exp
      vision
      id
    secretKey

    }
    students {
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
      classlabel
    }
  }
}
`