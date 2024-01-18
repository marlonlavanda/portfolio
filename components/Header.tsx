import Link from "next/link"

import getMenuBySlug from "@/lib/queries/getMenuBySlug"

export default async function Header() {
  const menu = await getMenuBySlug("header-menu")

  return (
    <>
      <header className="lg:h-[90px] flex justify-center items-center">
        <div className="container flex justify-between">
          <div className="h-[90px] flex items-center">
            <Link href="/">
              <span className="font-poppins font-black text-2xl">mlr</span>
            </Link>
          </div>
          <nav className="flex justify-between items-center gap-8">
            {!!menu &&
              menu.menuItems.edges.map((item) => (
                <Link key={item.node.databaseId} href={item.node.uri}>
                  {item.node.label}
                </Link>
              ))}
          </nav>
        </div>
      </header>
    </>
  )
}
