import React from "react"
import { render, screen } from "@testing-library/react"
import Footer from "@/components/Footer"

describe("Footer", () => {
  it("should render the copyright notice", () => {
    render(<Footer />)
    expect(screen.getByText(/2024 Yujie\(Joy\)/)).toBeInTheDocument()
  })

  it("should render the technology description", () => {
    render(<Footer />)
    expect(screen.getByText(/React & Next\.js/)).toBeInTheDocument()
  })

  it("should render a footer element", () => {
    const { container } = render(<Footer />)
    expect(container.querySelector("footer")).toBeInTheDocument()
  })
})
