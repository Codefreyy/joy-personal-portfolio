import React from "react"
import { render, screen } from "@testing-library/react"
import SectionHeading from "@/components/SectionHeading"

describe("SectionHeading", () => {
  it("should render children text", () => {
    render(<SectionHeading>My Skills</SectionHeading>)
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "My Skills"
    )
  })

  it("should render as an h2 element", () => {
    render(<SectionHeading>Test</SectionHeading>)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading.tagName).toBe("H2")
  })

  it("should apply the expected CSS classes", () => {
    render(<SectionHeading>Styled</SectionHeading>)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading).toHaveClass("text-3xl", "font-medium", "capitalize", "mb-8", "text-center")
  })
})
