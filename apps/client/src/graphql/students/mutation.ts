import { gql } from "@apollo/client";

export const REGISTER_STIDENT = gql`
mutation RegisterStudent($input: studentInput!) {
  RegisterStudent(input: $input) {
    standard
  }
}
`;


export const ENROLL_PAYMENT = gql`

mutation MakePaymet($studentId: ID!, $isEnroll: Enrollstatus, $about: String, $paidstatus: Paymentstatus, $title: String!, $price: Int!) {
  makePaymet(studentId: $studentId, isEnroll: $isEnroll, about: $about, Paidstatus: $paidstatus, title: $title, price: $price) {
    status
  }
}

`


export const ENROLL_SUBJECT = gql`

mutation EnrollSubject($input: [Enrollinput!]!) {
  enrollSubject(input: $input)
}
`
export const REMOVE_SUBJECT = gql `
mutation Mutation($removeSubjectId: String) {
  RemoveSubject(id: $removeSubjectId) {
    title
  }
}
`