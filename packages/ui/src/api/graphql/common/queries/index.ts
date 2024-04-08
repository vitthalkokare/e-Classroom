import { gql } from "@apollo/client";

export const SUBJECT_DATA = gql`

query SubjectData {
    subjectData {
      title
      price
      about
      state
      boardName
      info
      standard
      exp
      vision
      fname
    }
  }


`