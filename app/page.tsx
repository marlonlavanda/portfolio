import { notFound } from "next/navigation"

// import getAllPosts from "@/lib/queries/getAllPosts"
import getPageBySlug from "@/lib/queries/getPageBySlug"
import PageLayouts from "@/components/PageLayouts"
/**
 * The homepage route.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */

export default async function Home() {
  const homepage = await getPageBySlug("homepage")
  // const posts = await getAllPosts()
  // No data? Bail...
  if (!homepage) {
    notFound()
  }

  return (
    <main className="flex flex-col gap-8">
      <article>
        <h1 dangerouslySetInnerHTML={{ __html: homepage.title }} />
        <div dangerouslySetInnerHTML={{ __html: homepage.content }} />
        <PageLayouts layouts={homepage?.pageBuilder?.pageLayouts} />
      </article>
    </main>
  )
}
