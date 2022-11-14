import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react"
import Nav from "./Nav"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === "system" ? systemTheme : theme

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-mlr-primary "
          role="button"
          onClick={() => setTheme("dark")}
        />
      )
    }
  }
  return (
    <header className="lg:h-[90px] flex justify-center items-center px-6">
      <div className="container flex justify-between">
        <div className="h-[90px] flex items-center">
          <span className="font-poppins font-black text-2xl">mlr</span>
        </div>
        <div className="flex items-center">
          {renderThemeChanger()}
          <Nav />
        </div>
      </div>
    </header>
  )
}
