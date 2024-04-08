import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { SUBJECT_DATA } from '../graphql/common/queries';

// Initialize Apollo Client
const client = new ApolloClient({
 uri: 'YOUR_GRAPHQL_ENDPOINT', // Replace with your GraphQL server endpoint
 cache: new InMemoryCache(),
});

// Define your query


// Function to fetch data
async function fetchSubjects() {
 try {
    const { data } = await client.query({ query: SUBJECT_DATA });
    console.log(data);
    return data;
 } catch (error) {
    console.error("Failed to fetch subjects:", error);
 }
}

// Example usage
fetchSubjects();
