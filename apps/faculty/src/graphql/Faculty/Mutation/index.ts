import { gql } from "@apollo/client";

export const REGISTER_FACULTY = gql`

mutation RegisterFaculty($input: fRegisterInput) {
    RegisterFaculty(input: $input){
      message
    }
  }

`

export const LOGIN_FACULTY = gql`

mutation LoginFaculty($input: OrgLogininput) {
    LoginFaculty(input: $input){
      message 
    }
  }

`


export const GET_STUDETNS_BY_CLASS = gql `
mutation GetStudentByInfo($state: String!, $boardName: String!, $standard: String!) {
  getStudentByInfo(state: $state, boardName: $boardName, standard: $standard) {
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
    classlabel
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