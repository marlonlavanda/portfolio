import Link from "next/link"
export default function Header() {
  return (
    <>
      <header className="lg:h-[90px] flex justify-center items-center ">
        <div className="container flex justify-between px-6 md:px-12 xl:px-20 2xl:px-0">
          <div className="h-[90px] flex items-center">
            <Link href="/">
              <span className="font-poppins font-black text-2xl">mlr</span>
            </Link>
          </div>
          <div className="flex items-center gap-4 xl:gap-6">
            <ul>
              <li>Nav Item</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
