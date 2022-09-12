import { gql } from '@apollo/client';

export const QUERY_ALL_ACTIVITIES = gql`
  query AllACTIVITIES {
    activities {
      edges {
        node {
          activity_fields {
            content
            brands {
              ... on Brand {
                title
              }
            }
            companies {
              ... on Company {
                title
                company_fileds {
                  image {
                    altText
                    description(format: RENDERED)
                    caption
                    id
                    sizes
                    sourceUrl(size: BLOG_MEDIUM)
                    srcSet
                  }
                }
              }
            }
            products {
              ... on Product {
                title
              }
            }
          }

          title(format: RENDERED)
          slug
          uri
          featuredImage {
            node {
              altText
              description(format: RENDERED)
              caption
              id
              sizes
              sourceUrl(size: BLOG_MEDIUM)
              srcSet
            }
          }
        }
      }
    }
  }
`;

export const QUERY_ACTIVITY_BY_URI = gql`
  query ActivityBySlug($uri: ID!) {
    activity(id: $uri, idType: URI) {
      id
      activity_fields {
        content
        brands {
          ... on Brand {
            title
            brands_fields {
              content
              image {
                title
                sourceUrl(size: MEDIUM)
                description(format: RENDERED)
              }
            }
          }
        }
        companies {
          ... on Company {
            title
            company_fileds {
              content
              image {
                title
                description(format: RENDERED)
                sourceUrl(size: MEDIUM)
              }
            }
          }
        }
        products {
          ... on Product {
            title
            product_fields {
              image {
                title
                description(format: RENDERED)
                sourceUrl(size: MEDIUM)
              }
            }
          }
        }
      }

      slug
      title(format: RENDERED)
      featuredImage {
        node {
          altText
          description(format: RENDERED)
          title
          caption
          id
          sizes
          sourceUrl(size: BLOG_MEDIUM)
          srcSet
        }
      }
    }
  }
`;
