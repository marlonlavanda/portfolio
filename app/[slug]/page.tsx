import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import getPageBySlug from "@/lib/queries/getPageBySlug"
import getAllPosts from "@/lib/queries/getAllPosts"
import getAllProjects from "@/lib/queries/getAllProjects"
import { Page, Post } from "@/lib/types"

async function fetchData(slug: string) {
  // If the slug is 'articles', fetch all posts.
  if (slug === "articles") {
    return { posts: await getAllPosts(), context: "articles" }
  }

  // If the slug is 'projects', fetch all projects.
  if (slug === "projects") {
    return { posts: await getAllProjects(), context: "projects" }
  }

  // Otherwise, this could be a page.
  const page = await getPageBySlug(slug)

  // If page data exists, return it.
  if (page) {
    return { post: page }
  }

  // Otherwise, return an error.
  return { error: "No data found" }
}

/**
 * Render a single page.
 */
function RenderPage({ page }: { page: Page }) {
  return (
    <main className="flex justify-center gap-8">
      <div className="container">
        <article>
          <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </article>
      </div>
    </main>
  )
}

/**
 * Render posts list.
 */
function RenderPostsList({
  posts,
  context,
}: {
  posts: Post[]
  context: string
}) {
  return (
    <main className="flex justify-center gap-8">
      <div className="container flex flex-wrap gap-8">
        <h1 className="capitalize">Latest {context}</h1>
        {posts.map((post: Post) => (
          <article className="w-72" key={post?.databaseId}>
            <Image
              alt={post?.featuredImage?.node?.altText}
              height={post?.featuredImage?.node?.mediaDetails?.height}
              src={post?.featuredImage?.node?.sourceUrl}
              width={post?.featuredImage?.node?.mediaDetails?.width}
              priority={true}
            />
            <Link href={`/${context}/${post?.slug}`}>
              <h2 dangerouslySetInnerHTML={{ __html: post?.title }} />
            </Link>
            <p className="text-sm text-gray-500">
              {post?.commentCount} Comments
            </p>
            <div dangerouslySetInnerHTML={{ __html: post?.excerpt }} />
            <Link className="button" href={`/${context}/${post?.slug}`}>
              View Post
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}

/**
 * Catch-all Archive Page route.
 */
export default async function Archive({
  params,
}: {
  params: { slug: string }
}) {
  // Get the slug from the params.
  const { slug } = params

  // Fetch data from WordPress.
  const data = await fetchData(slug)

  // If there's an error, return a 404 page.
  if (data.error) {
    notFound()
  }

  // If this is a single page, render the page.
  if (data.post) {
    return <RenderPage page={data.post} />
  }

  // Otherwise, this must be an archive. Render the posts list.
  if (data.posts && data.posts.length > 0) {
    return <RenderPostsList posts={data.posts} context={data.context} />
  }

  // Otherwise, return a 404 page.
  notFound()
}
