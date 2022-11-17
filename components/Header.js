import { Bars3Icon } from "@heroicons/react/24/solid"
import Nav from "./Nav"
import DarkModeSwitch from "./DarkModeSwitch"

export default function Header() {
  return (
    <header className="lg:h-[90px] flex justify-center items-center ">
      <div className="container flex justify-between px-6 md:px-12 xl:px-20 2xl:px-0">
        <div className="h-[90px] flex items-center">
          <span className="font-poppins font-black text-2xl">mlr</span>
        </div>
        <div className="flex items-center gap-4 xl:gap-6">
          <DarkModeSwitch />
          <Nav />
          <div className="block xl:hidden">
            <Bars3Icon className="w-10 h-10  " role="button" />
          </div>
        </div>
      </div>
    </header>
  )
}
