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
    fname
    title
    state
    standard
    lectureTime
    boardName
  }
}

`