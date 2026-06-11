"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Unhandled error:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
      >
        Try again
      </button>
    </div>
  )
}
