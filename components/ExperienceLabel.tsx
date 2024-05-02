import { useSectionInView } from "@/lib/hooks"

export function ExperienceLabel() {
  const { ref } = useSectionInView("Experience")
  return (
    <section
      className="absolute left-96 top-96  mt-28 scroll-mt-[600px] w-10 h-1 dark:bg-[#121826] "
      id="experience"
      ref={ref}
    ></section>
  )
}
