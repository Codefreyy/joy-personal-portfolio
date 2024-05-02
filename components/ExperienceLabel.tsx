import { useSectionInView } from "@/lib/hooks"

export function ExperienceLabel() {
  const { ref } = useSectionInView("Experience", 0.1)
  return (
    <section
      className="absolute left-96 top-96  mt-28 scroll-mt-[600px] w-10 h-[300px] dark:bg-[#121826] "
      id="experience"
      ref={ref}
    ></section>
  )
}
