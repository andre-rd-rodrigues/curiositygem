import baseURL from "pages/api/baseURL";

const { GraphQLClient, gql } = require("graphql-request");

export const graphcms = new GraphQLClient(baseURL);

export const ARTICLES_CARD_QUERY = gql`
  {
    posts(orderBy: createdAt_ASC) {
      id
      title
      category
      createdAt
      description
      isTopPick
      slug
      coverPhoto {
        url
      }
    }
  }
`;

export const ARTICLES_QUERY = gql`
  {
    posts(orderBy: createdAt_ASC) {
      id
      title
      category
      createdAt
      description
      isTopPick
      slug
      content {
        html
      }
      coverPhoto {
        url
      }
    }
  }
`;

export const ARTICLE_QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      category
      createdAt
      description
      isTopPick
      slug
      content {
        html
      }
      coverPhoto {
        url
      }
    }
  }
`;

export const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;
