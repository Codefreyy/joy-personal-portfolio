"use client"

import { IoLanguageOutline } from "react-icons/io5"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

export default function LanguageSwitch() {
  const localActive = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const onChangeLanguage = (e: any) => {
    const nextLocale = localActive == "en" ? "zh" : "en"

    const replaceLangInPath = (newLang: string) => {
      const newPath = pathname.replace(/^\/(en|zh)/, `/${newLang}/`)
      console.log(pathname, newLang, newPath, 666) // /zh en /zh 666
      router.replace(newPath)
    }

    replaceLangInPath(nextLocale)
  }

  return (
    <>
      <button
        onClick={onChangeLanguage}
        className="z-50 fixed bottom-8 right-[6rem] w-[2.5rem] h-[2.5rem] bg-opacity-80 flex items-center justify-center gap-1 transition-all "
      >
        <span className="sr-only">Change Language</span>
        <IoLanguageOutline />

        <span className="text-sm hover:scale-[1.15] active:scale-105 transition-all">
          {" "}
          {localActive == "en" ? "EN" : "ZH"}
        </span>
      </button>
    </>
  )
}
