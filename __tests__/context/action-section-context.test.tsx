import React from "react"
import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  ActionSectionContextProvider,
  useActiveSectionContext,
} from "@/context/action-section-context"

function TestConsumer() {
  const { activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick } =
    useActiveSectionContext()
  return (
    <div>
      <span data-testid="active-section">{activeSection}</span>
      <span data-testid="time-of-last-click">{timeOfLastClick}</span>
      <button onClick={() => setActiveSection("About")}>Set About</button>
      <button onClick={() => setActiveSection("Projects")}>Set Projects</button>
      <button onClick={() => setTimeOfLastClick(12345)}>Set Click Time</button>
    </div>
  )
}

describe("ActionSectionContext", () => {
  it("should provide default values", () => {
    render(
      <ActionSectionContextProvider>
        <TestConsumer />
      </ActionSectionContextProvider>
    )
    expect(screen.getByTestId("active-section")).toHaveTextContent("Home")
    expect(screen.getByTestId("time-of-last-click")).toHaveTextContent("0")
  })

  it("should update activeSection when setActiveSection is called", async () => {
    const user = userEvent.setup()
    render(
      <ActionSectionContextProvider>
        <TestConsumer />
      </ActionSectionContextProvider>
    )

    await user.click(screen.getByText("Set About"))
    expect(screen.getByTestId("active-section")).toHaveTextContent("About")

    await user.click(screen.getByText("Set Projects"))
    expect(screen.getByTestId("active-section")).toHaveTextContent("Projects")
  })

  it("should update timeOfLastClick when setTimeOfLastClick is called", async () => {
    const user = userEvent.setup()
    render(
      <ActionSectionContextProvider>
        <TestConsumer />
      </ActionSectionContextProvider>
    )

    await user.click(screen.getByText("Set Click Time"))
    expect(screen.getByTestId("time-of-last-click")).toHaveTextContent("12345")
  })

  it("should throw when used outside the provider", () => {
    // Suppress console.error for this expected error
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {})

    expect(() => render(<TestConsumer />)).toThrow(
      "useActiveSectionContext must be used within a ActionSectionContextProvider"
    )

    consoleSpy.mockRestore()
  })
})
