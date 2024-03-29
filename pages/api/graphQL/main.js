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
        url(
          transformation: {
            image: { resize: { width: 1200, height: 1200 } }
            document: { output: { format: png } }
          }
        )
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
        url(
          transformation: {
            image: { resize: { width: 1200, height: 1200 } }
            document: { output: { format: png } }
          }
        )
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
        url(
          transformation: {
            image: { resize: { width: 1200, height: 1200 } }
            document: { output: { format: png } }
          }
        )
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
