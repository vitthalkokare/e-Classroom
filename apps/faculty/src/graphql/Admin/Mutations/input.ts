import { gql } from "@apollo/client";


export const ADMIN_LOGIN= gql`


mutation AdminLogin($input: OrgLogininput) {
  AdminLogin(input: $input) {
    email
    id
    name
  }
}

`

export const REGISTER_ADMIN_INPUT= gql`

mutation RegisterAdmin($input: Admininput) {
    RegisterAdmin(input: $input)
  }
`


export const ADD_NEW_SUBJECT_DATA = gql`

mutation AddSubjectData($input: subjectDatainput) {
  AddSubjectData(input: $input)
}
`