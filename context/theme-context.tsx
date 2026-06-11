"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import useSound from "use-sound"

type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}

type ThemeContextProviderProp = {
  children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ({ children }: ThemeContextProviderProp) => {
  const [theme, setTheme] = useState("light")
  const [playLight] = useSound("/light-on.mp3", { volume: 0.5 })
  const [playDark] = useSound("/light-off.mp3", { volume: 0.5 })

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      playDark()
      try {
        window.localStorage.setItem("theme", "dark")
      } catch {
        // localStorage may be unavailable (e.g. incognito Safari)
      }
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      playLight()
      try {
        window.localStorage.setItem("theme", "light")
      } catch {
        // localStorage may be unavailable
      }
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem("theme")
      if (localTheme) {
        setTheme(localTheme)
        if (localTheme === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark")
        document.documentElement.classList.add("dark")
      }
    } catch {
      // localStorage or matchMedia unavailable; fall back to default "light" theme
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }
  return context
}

export default ThemeContextProvider
