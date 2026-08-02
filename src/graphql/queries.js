import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories(orderBy: CREATED_AT, orderDirection: ASC) {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;
