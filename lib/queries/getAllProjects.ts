import { fetchGraphQL } from "@/lib/functions"
import { Post } from "@/lib/types"

/**
 * Fetch all projects.
 */
export default async function getAllProjects() {
  const query = `
    query GetAllProjects {
      projects(where: {status: PUBLISH}) {
        nodes {
          databaseId
          date
          modified
          title
          slug
          featuredImage {
            node {
              altText
              sourceUrl
              mediaDetails {
                  height
                  width
              }
            }
          }
          seo {
            metaDesc
            title
          }
        }
      }
    }
  `

  const response = await fetchGraphQL(query)

  return response.data.projects.nodes as Post[]
}
