import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LanguageSwitch from "@/components/LanguageSwitch"

const mockReplace = jest.fn()

jest.mock("next-intl", () => ({
  useLocale: jest.fn(() => "en"),
}))

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/en"),
  useRouter: jest.fn(() => ({
    replace: mockReplace,
  })),
}))

describe("LanguageSwitch", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should display 'EN' when locale is en", () => {
    render(<LanguageSwitch />)
    expect(screen.getByText("EN")).toBeInTheDocument()
  })

  it("should display 'ZH' when locale is zh", () => {
    const { useLocale } = require("next-intl")
    ;(useLocale as jest.Mock).mockReturnValue("zh")

    render(<LanguageSwitch />)
    expect(screen.getByText("ZH")).toBeInTheDocument()
  })

  it("should have an accessible label", () => {
    render(<LanguageSwitch />)
    expect(screen.getByText("Change Language")).toBeInTheDocument()
  })

  it("should call router.replace with zh path when switching from en", async () => {
    const { useLocale } = require("next-intl")
    ;(useLocale as jest.Mock).mockReturnValue("en")

    const user = userEvent.setup()
    render(<LanguageSwitch />)

    await user.click(screen.getByRole("button"))
    expect(mockReplace).toHaveBeenCalledWith("/zh/", { scroll: false })
  })

  it("should call router.replace with en path when switching from zh", async () => {
    const { useLocale } = require("next-intl")
    ;(useLocale as jest.Mock).mockReturnValue("zh")

    const { usePathname } = require("next/navigation")
    ;(usePathname as jest.Mock).mockReturnValue("/zh")

    const user = userEvent.setup()
    render(<LanguageSwitch />)

    await user.click(screen.getByRole("button"))
    expect(mockReplace).toHaveBeenCalledWith("/en/", { scroll: false })
  })
})
