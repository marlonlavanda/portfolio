import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Switch } from "@headlessui/react"

function Sun(props) {
  return (
    <svg width="24" height="24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Moon(props) {
  return (
    <svg width="24" height="24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false)
  const [enabled, setEnabled] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()
  const handleClickEnabled = () => {
    if (!mounted) return null
    const currentTheme = theme === "system" ? systemTheme : theme
    if (currentTheme === "dark") {
      setTheme("light")

      setEnabled(false)
    } else {
      setTheme("dark")
      setEnabled(true)
    }
  }
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Switch
      checked={enabled}
      onChange={handleClickEnabled}
      className={`${
        enabled
          ? "bg-slate-700 text-slate-400 focus-visible:ring-slate-500"
          : "bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600"
      } relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none'`}
    >
      <span className="sr-only">
        {enabled ? "Enable" : "Disable"} dark mode
      </span>
      <Sun
        className={`${
          enabled ? "scale-100 duration-300" : "scale-0 duration-500"
        } transform transition-transform`}
      />
      <Moon
        className={`${
          enabled ? "scale-0 duration-500" : "scale-100 duration-300"
        } ml-3.5 transform transition-transform`}
      />
      <span
        className={`${
          enabled ? "translate-x-[2.625rem]" : ""
        } absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform`}
      >
        <Sun
          className={`${
            enabled ? "opacity-0 scale-0" : "opacity-100 scale-100"
          } flex-none transition duration-500 transform text-cyan-500`}
        />
        <Moon
          className={`${
            enabled ? "opacity-100 scale-100" : "opacity-0 scale-0"
          } flex-none -ml-6 transition duration-500 transform text-slate-700`}
        />
      </span>
    </Switch>
  )
}
