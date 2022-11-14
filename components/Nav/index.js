import Link from "next/link"
import { useRouter } from "next/router"

const navLinks = [
  {
    slug: "home",
    name: "Home",
    route: "/",
  },
  {
    slug: "about",
    name: "About",
    route: "/about",
  },
  {
    slug: "projects",
    name: "Projects",
    route: "/projects",
  },
  {
    slug: "contact",
    name: "Contact",
    route: "/contact",
  },
]

export default function Nav() {
  const router = useRouter()
  const currentRoute = router && router.route

  return (
    <nav className="hidden lg:block">
      <ul className="flex  h-[90px] dark:text-white font-medium">
        {navLinks
          ? navLinks.map((route) => (
              <li
                key={route.slug}
                className="w-full relative h-full  px-6 flex items-center"
              >
                <div
                  className={`absolute top-0 left-0 right-0 bottom-0 rounded-br-lg rounded-bl-lg  ${
                    currentRoute === route.route
                      ? "bg-mlr-accent"
                      : "bg-transparent"
                  }`}
                ></div>
                <div className="z-10">
                  <Link href={route.route}>{route.name}</Link>
                </div>
              </li>
            ))
          : null}
      </ul>
    </nav>
  )
}
