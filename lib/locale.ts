import { headerLanguageMap } from "@/lib/data"

type HeaderLanguageKey = keyof typeof headerLanguageMap

/**
 * Resolves a section heading based on the active locale.
 * Returns the Chinese translation for "zh", otherwise the English fallback.
 */
export function getLocalizedHeading(
  locale: string,
  key: HeaderLanguageKey,
  fallback: string
): string {
  return locale === "zh" ? headerLanguageMap[key] : fallback
}
