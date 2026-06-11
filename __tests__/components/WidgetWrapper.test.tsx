import React from "react"
import { render, screen } from "@testing-library/react"
import WidgetWrapper from "@/components/WidgetWrapper"

describe("WidgetWrapper", () => {
  it("should render children", () => {
    render(
      <WidgetWrapper>
        <span data-testid="child">Hello</span>
      </WidgetWrapper>
    )
    expect(screen.getByTestId("child")).toBeInTheDocument()
    expect(screen.getByTestId("child")).toHaveTextContent("Hello")
  })

  it("should wrap children in a div with fixed positioning classes", () => {
    const { container } = render(
      <WidgetWrapper>
        <span>Widget</span>
      </WidgetWrapper>
    )
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.tagName).toBe("DIV")
    expect(wrapper).toHaveClass("fixed")
  })
})
