import { gql } from "@apollo/client";


export const ADMIN_LOGIN= gql`


mutation Mutation($input: OrgLogininput) {
  AdminLogin(input: $input) {
    message
  }
}

`

export const REGISTER_ADMIN_INPUT= gql`

mutation RegisterAdmin($input: Admininput) {
    RegisterAdmin(input: $input){
      message
    }
  }
`


export const ADD_NEW_SUBJECT_DATA = gql`

mutation AddSubjectData($input: subjectDatainput) {
  AddSubjectData(input: $input){
    message
  }
}
`

export const VERYFY_FACULTY = gql`

mutation VerifyFaculty($email: String, $secretKey: String) {
  verifyFaculty(email: $email, secretKey: $secretKey){
    message
  }
}
`

export const USER_LOG_out = gql `
mutation userLogout {
  userLogout {
    message
  }
}

`