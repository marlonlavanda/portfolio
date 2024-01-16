import { notFound } from "next/navigation"

import getAllPosts from "@/lib/queries/getAllPosts"
import getPageBySlug from "@/lib/queries/getPageBySlug"

/**
 * The homepage route.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */

export default async function Home() {
  const homepage = await getPageBySlug("homepage")
  const posts = await getAllPosts()

  // No data? Bail...
  if (!posts || !posts.length || !homepage) {
    notFound()
  }

  return (
    <main className="flex flex-col gap-8">
      <article>
        <h1 dangerouslySetInnerHTML={{ __html: homepage.title }} />
        <div dangerouslySetInnerHTML={{ __html: homepage.content }} />
      </article>
    </main>
  )
}
