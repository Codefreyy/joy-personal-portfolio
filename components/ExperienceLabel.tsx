import { useSectionInView } from "@/lib/hooks"

export function ExperienceLabel() {
  const { ref } = useSectionInView("Experience", 0.1)
  return (
    <section
      className="absolute top-96  mt-28 scroll-mt-[600px] w-10 h-[300px] bg-transparent"
      id="experience"
      ref={ref}
    ></section>
  )
}
