import { useRouter } from "next/router"
import { navLinks } from "../../utils/data"
import { XMarkIcon } from "@heroicons/react/24/solid"

export default function MobileNav({ isOpen, setCloseMenu }) {
  const router = useRouter()
  const currentRoute = router && router.route
  const goToPageAndClose = (route) => {
    router.push(`${route}`)
    setCloseMenu(false)
  }

  return (
    <>
      <div className={`container ${isOpen ? "active" : ""} bg-mlr-primary`}>
        <div className="wrapper">
          <div className="flex flex-col px-4 md:px-6">
            <div className="h-[90px] flex items-center">
              <XMarkIcon
                className="w-10 h-10  text-white"
                role="button"
                onClick={() => setCloseMenu(false)}
              />
            </div>
            <nav>
              <ul>
                {navLinks
                  ? navLinks.map((route) => (
                      <li
                        key={route.slug}
                        className={`text-center px-6 py-2 ${
                          currentRoute === route.route
                            ? "bg-mlr-accent"
                            : "bg-transparent"
                        }`}
                      >
                        <span
                          className="text-white"
                          onClick={() => goToPageAndClose(route.route)}
                        >
                          {route.name}
                        </span>
                      </li>
                    ))
                  : null}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 50vw;
          max-width: 100%;
          box-sizing: border-box;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 2 !important;
          transform: translateX(100%);
          transition: transform 0.5s ease;
          display: flex;
          justify-content: flex-end;
        }
        .container.active {
          opacity: 1;
          visibility: visible;
          max-height: 100%;
          transform: translateX(200%);
        }
        .wrapper {
          width: 100%;
          box-sizing: border-box;
          height: 100%;
        }
      `}</style>
      <style jsx>{`
        body,
        html {
          overflow: ${isOpen ? "hidden" : ""};
        }
      `}</style>
    </>
  )
}
