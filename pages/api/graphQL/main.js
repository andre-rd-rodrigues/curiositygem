import baseURL from "pages/api/baseURL";

const { GraphQLClient, gql } = require("graphql-request");

export const graphcms = new GraphQLClient(baseURL);

export const ARTICLES_CARD_QUERY = gql`
  {
    posts(orderBy: createdAt_DESC, first: 100) {
      id
      title
      category
      publishedDate
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
    posts(orderBy: createdAt_DESC, first: 100) {
      id
      title
      category
      publishedDate
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
      publishedDate
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
    posts(first: 100) {
      slug
    }
  }
`;
