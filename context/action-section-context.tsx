"use client"

import React, {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useContext,
} from "react"
import { links } from "@/lib/data"

export type SectionName = (typeof links)[number]["name"]
type ActionSectionContextProviderProps = {
  children: React.ReactNode
}

type ActionSectionContextType = {
  activeSection: SectionName
  setActiveSection: Dispatch<
    SetStateAction<"Home" | "About" | "Projects" | "Skills" | "Experiences">
  >
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActionSectionContext = createContext<ActionSectionContextType | null>(
  null
)

export function ActionSectionContextProvider({
  children,
}: ActionSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home")
  const [timeOfLastClick, setTimeOfLastClick] = useState(0) // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActionSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActionSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActionSectionContext)
  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within a ActionSectionContextProvider"
    )
  }
  return context
}
