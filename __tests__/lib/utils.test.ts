/**
 * Tests for lib/utils.ts — isMobileDevice()
 *
 * isMobileDevice() reads the user-agent header via next/headers and parses it
 * with UAParser. We mock both dependencies to unit-test the branching logic.
 */

import { UAParser } from "ua-parser-js"

// Mock next/headers
const mockGet = jest.fn()
jest.mock("next/headers", () => ({
  headers: () => ({ get: mockGet }),
}))

// Import after mocks are set up
import { isMobileDevice } from "@/lib/utils"

describe("isMobileDevice", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should return true for a mobile user-agent", () => {
    const mobileUA =
      "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
    mockGet.mockReturnValue(mobileUA)

    expect(isMobileDevice()).toBe(true)
  })

  it("should return false for a desktop user-agent", () => {
    const desktopUA =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    mockGet.mockReturnValue(desktopUA)

    expect(isMobileDevice()).toBe(false)
  })

  it("should return false for a tablet user-agent", () => {
    const tabletUA =
      "Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/604.1"
    mockGet.mockReturnValue(tabletUA)

    // UAParser classifies iPad as tablet, not mobile
    const device = new UAParser(tabletUA).getDevice()
    const expected = device.type === "mobile"
    expect(isMobileDevice()).toBe(expected)
  })

  it("should return false when user-agent header is null", () => {
    mockGet.mockReturnValue(null)

    expect(isMobileDevice()).toBe(false)
  })

  it("should return false for an empty user-agent string", () => {
    mockGet.mockReturnValue("")

    expect(isMobileDevice()).toBe(false)
  })

  it("should return true for Android mobile user-agent", () => {
    const androidUA =
      "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
    mockGet.mockReturnValue(androidUA)

    expect(isMobileDevice()).toBe(true)
  })
})
