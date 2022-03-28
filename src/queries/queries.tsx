import { gql } from "@apollo/client";

export const SEARCH_USERS = gql`
  query searchUsers($searchTerm: String!) {
    search(query: $searchTerm, type: USER, first: 30) {
      edges {
        node {
          ... on User {
            id
            email
            bio
            bioHTML
            company
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      userCount
    }
  }
`;

export const SEARCH_REPOSITORIES = gql`
  query search($searchTerm: String!) {
    search(query: $searchTerm, type: REPOSITORY, first: 30) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              id
              login
              avatarUrl(size: 150)
              resourcePath
            }
            forkCount
            watchers {
              totalCount
            }
            stargazers {
              totalCount
            }
            description
            licenseInfo {
              name
            }
            updatedAt
          }
        }
      }
    }
  }
`;
