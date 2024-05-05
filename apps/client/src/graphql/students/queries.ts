import { gql } from "@apollo/client";

export const ENROLLED_SUBJECT = gql`
query EnrolledSubject {
    EnrolledSubject {
      id
      title
      price
      about
      isEnroll
      studentId
    }
  }

`

export const CLASSES_DATA = gql`
query Classes {
  Classes {
    id
    fname
    title
    state
    standard
    lectureTime
    boardName
    facultyEmail
  }
}

`

export  const STUDENT_DATA = gql`

query studentData{
  studentData{
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
      dob
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


`