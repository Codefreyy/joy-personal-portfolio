import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ThemeSwitch from "@/components/ThemeTwich"
import ThemeContextProvider from "@/context/theme-context"

// Mock use-sound
jest.mock("use-sound", () => {
  return jest.fn(() => [jest.fn()])
})

// Mock react-icons
jest.mock("react-icons/bs", () => ({
  BsMoon: () => <span data-testid="moon-icon">Moon</span>,
  BsSun: () => <span data-testid="sun-icon">Sun</span>,
}))

describe("ThemeSwitch", () => {
  beforeEach(() => {
    const localStorageMock: Record<string, string> = {}
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn((key: string) => localStorageMock[key] ?? null),
        setItem: jest.fn((key: string, value: string) => {
          localStorageMock[key] = value
        }),
        removeItem: jest.fn(),
      },
      writable: true,
    })
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn().mockReturnValue({ matches: false }),
      writable: true,
    })
    document.documentElement.classList.remove("dark")
  })

  it("should render a button", () => {
    render(
      <ThemeContextProvider>
        <ThemeSwitch />
      </ThemeContextProvider>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("should have an accessible label", () => {
    render(
      <ThemeContextProvider>
        <ThemeSwitch />
      </ThemeContextProvider>
    )
    expect(screen.getByText("change dark mode")).toBeInTheDocument()
  })

  it("should show sun icon in light mode", () => {
    render(
      <ThemeContextProvider>
        <ThemeSwitch />
      </ThemeContextProvider>
    )
    expect(screen.getByTestId("sun-icon")).toBeInTheDocument()
  })

  it("should toggle to moon icon after click", async () => {
    const user = userEvent.setup()
    render(
      <ThemeContextProvider>
        <ThemeSwitch />
      </ThemeContextProvider>
    )

    await user.click(screen.getByRole("button"))
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument()
  })
})
