import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Header from "@/components/Header"
import { ActionSectionContextProvider } from "@/context/action-section-context"

// Mock framer-motion to render plain elements
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...filterDOMProps(props)}>{children}</div>
    ),
    li: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <li {...filterDOMProps(props)}>{children}</li>
    ),
    span: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <span {...filterDOMProps(props)}>{children}</span>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}))

// Helper to filter out non-DOM props
function filterDOMProps(props: Record<string, unknown>) {
  const domProps: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(props)) {
    if (
      !["initial", "animate", "exit", "whileHover", "whileInView", "whileTap",
        "variants", "transition", "viewport", "custom", "layoutId", "style",
      ].includes(key)
    ) {
      domProps[key] = value
    }
  }
  return domProps
}

// Mock next-intl
jest.mock("next-intl", () => ({
  useLocale: jest.fn(() => "en"),
}))

// Mock next/link
jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    ...props
  }: React.PropsWithChildren<{ href: string }>) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
})

describe("Header", () => {
  const renderWithProvider = () =>
    render(
      <ActionSectionContextProvider>
        <Header />
      </ActionSectionContextProvider>
    )

  it("should render all navigation links", () => {
    renderWithProvider()
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
    expect(screen.getByText("Projects")).toBeInTheDocument()
    expect(screen.getByText("Skills")).toBeInTheDocument()
    expect(screen.getByText("Experiences")).toBeInTheDocument()
  })

  it("should render navigation links as anchors with correct hashes", () => {
    renderWithProvider()
    const homeLink = screen.getByText("Home").closest("a")
    expect(homeLink).toHaveAttribute("href", "#home")

    const aboutLink = screen.getByText("About").closest("a")
    expect(aboutLink).toHaveAttribute("href", "#about")
  })

  it("should render a header element", () => {
    const { container } = renderWithProvider()
    expect(container.querySelector("header")).toBeInTheDocument()
  })

  it("should render a nav element", () => {
    const { container } = renderWithProvider()
    expect(container.querySelector("nav")).toBeInTheDocument()
  })
})
