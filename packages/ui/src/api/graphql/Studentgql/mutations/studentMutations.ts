import { gql } from "@apollo/client";

export const ADD_NOVEL = gql`
	mutation AddNovel($image: String, $title: String) {
		addNovel(image: $image, title: $title) {
			authors {
				id
				name
				novelId
			}
			createdAt
			id
			image
			title
			updatedAt
		}
	}
`;

export const CREATE_USER = gql`
	mutation Mutation($email: String, $password: String) {
	saveUser(email: $email, password: $password)
  }
`;

export const UPDATE_NOVEL = gql`
	mutation UpdateNovel($id: ID!, $title: String, $image: String) {
		updateNovel(id: $id, title: $title, image: $image) {
			id
			image
			title
		}
	}
`;

export const ADD_AUTHOR = gql`
	mutation Mutation($novelId: ID!, $name: String) {
		addAuthor(novelId: $novelId, name: $name) {
			id
			name
			novelId
		}
	}
`;

export const DELETE_AUTHOR = gql`
	mutation Mutation($id: ID!) {
		deleteAuthor(id: $id) {
			id
			name
			novelId
		}
	}
`;
