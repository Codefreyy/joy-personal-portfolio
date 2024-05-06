"use client"
import Header from "@/components/homepage/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import ThemeContextProvider from "@/context/theme-context"
import { ActionSectionContextProvider } from "@/context/action-section-context"
import Footer from "@/components/homepage/Footer"
import ThemeSwitch from "@/components/homepage/ThemeTwich"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isProjectDetail = pathname.includes("projects")
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative ${
          isProjectDetail ? "pt-0" : "pt-28"
        } ${
          isProjectDetail ? "pt-0" : "sm:pt-36"
        } dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5b3b3c]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#433f68]"></div>

        <ThemeContextProvider>
          <ActionSectionContextProvider>
            {isProjectDetail ? null : <Header />}
            {children}
            <Footer />
            <ThemeSwitch />
          </ActionSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
