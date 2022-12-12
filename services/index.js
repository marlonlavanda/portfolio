import { request, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getProjects = async () => {
  const query = gql`
    query Projects {
      projects {
        description {
          text
        }
        createdAt
        title
        slug
        id
        projectLink
        technologies {
          name
          slug
        }
        projectImage {
          url
          id
        }
      }
    }
  `
  const data = await request(graphqlAPI, query)

  return data?.projects
}
