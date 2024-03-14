import { gql } from "@apollo/client";

export const REGISTER_STIDENT = gql `
mutation CreateStudent($name: String, $email: String, $sirname: String, $userId: ID, $phone: String, $state: String, $gender: Gender, $city: String, $boardName: String, $standard: Class) {
    createStudent(name: $name, email: $email, sirname: $sirname, userId: $userId, phone: $phone, state: $state, gender: $gender, city: $city, boardName: $boardName, standard: $standard) {
      name
    }
  }

`
