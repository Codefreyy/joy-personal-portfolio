import React from "react"
import { render, screen } from "@testing-library/react"
import Skills from "@/components/Skills"
import { skillsData } from "@/lib/data"
import { ActionSectionContextProvider } from "@/context/action-section-context"

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    li: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, whileInView, viewport, custom, variants, ...domProps } =
        props as Record<string, unknown>
      return <li>{children}</li>
    },
  },
}))

// Mock next-intl
jest.mock("next-intl", () => ({
  useLocale: jest.fn(() => "en"),
}))

// Mock react-intersection-observer
jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(() => ({ ref: jest.fn(), inView: false })),
}))

describe("Skills", () => {
  const renderWithProvider = () =>
    render(
      <ActionSectionContextProvider>
        <Skills />
      </ActionSectionContextProvider>
    )

  it("should render 'My Skills' heading in English", () => {
    renderWithProvider()
    expect(screen.getByText("My Skills")).toBeInTheDocument()
  })

  it("should render all skills from skillsData", () => {
    renderWithProvider()
    for (const skill of skillsData) {
      expect(screen.getByText(skill)).toBeInTheDocument()
    }
  })

  it("should render the correct number of skill items", () => {
    const { container } = renderWithProvider()
    const items = container.querySelectorAll("li")
    expect(items.length).toBe(skillsData.length)
  })

  it("should render Chinese heading when locale is zh", () => {
    const { useLocale } = require("next-intl")
    ;(useLocale as jest.Mock).mockReturnValue("zh")

    renderWithProvider()
    expect(screen.getByText("我的技能")).toBeInTheDocument()
  })
})
