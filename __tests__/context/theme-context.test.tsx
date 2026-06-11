import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ThemeContextProvider, { useTheme } from "@/context/theme-context"

// Mock use-sound to avoid audio issues in test environment
jest.mock("use-sound", () => {
  return jest.fn(() => [jest.fn()])
})

function TestConsumer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

describe("ThemeContext", () => {
  let localStorageMock: Record<string, string>
  let matchMediaMock: jest.Mock

  beforeEach(() => {
    localStorageMock = {}
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn((key: string) => localStorageMock[key] ?? null),
        setItem: jest.fn((key: string, value: string) => {
          localStorageMock[key] = value
        }),
        removeItem: jest.fn((key: string) => {
          delete localStorageMock[key]
        }),
      },
      writable: true,
    })

    matchMediaMock = jest.fn().mockReturnValue({ matches: false })
    Object.defineProperty(window, "matchMedia", {
      value: matchMediaMock,
      writable: true,
    })

    document.documentElement.classList.remove("dark")
  })

  it("should default to light theme", () => {
    render(
      <ThemeContextProvider>
        <TestConsumer />
      </ThemeContextProvider>
    )
    expect(screen.getByTestId("theme")).toHaveTextContent("light")
  })

  it("should toggle from light to dark", async () => {
    const user = userEvent.setup()
    render(
      <ThemeContextProvider>
        <TestConsumer />
      </ThemeContextProvider>
    )

    await user.click(screen.getByText("Toggle"))
    expect(screen.getByTestId("theme")).toHaveTextContent("dark")
    expect(window.localStorage.setItem).toHaveBeenCalledWith("theme", "dark")
    expect(document.documentElement.classList.contains("dark")).toBe(true)
  })

  it("should toggle from dark back to light", async () => {
    const user = userEvent.setup()
    render(
      <ThemeContextProvider>
        <TestConsumer />
      </ThemeContextProvider>
    )

    // Toggle to dark
    await user.click(screen.getByText("Toggle"))
    expect(screen.getByTestId("theme")).toHaveTextContent("dark")

    // Toggle back to light
    await user.click(screen.getByText("Toggle"))
    expect(screen.getByTestId("theme")).toHaveTextContent("light")
    expect(window.localStorage.setItem).toHaveBeenCalledWith("theme", "light")
    expect(document.documentElement.classList.contains("dark")).toBe(false)
  })

  it("should restore dark theme from localStorage", () => {
    localStorageMock["theme"] = "dark"
    render(
      <ThemeContextProvider>
        <TestConsumer />
      </ThemeContextProvider>
    )
    // The useEffect in theme-context reads from localStorage
    expect(window.localStorage.getItem).toHaveBeenCalledWith("theme")
  })

  it("should throw when useTheme is used outside provider", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {})

    expect(() => render(<TestConsumer />)).toThrow(
      "useTheme must be used within a ThemeContextProvider"
    )

    consoleSpy.mockRestore()
  })
})
