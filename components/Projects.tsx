"use client"

import React from "react"
import { headerLanguageMap, projectsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import SectionHeading from "./SectionHeading"
import Project from "./Project"
import { useLocale } from "next-intl"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1)
  const activeLocale = useLocale()

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        {" "}
        {activeLocale === "zh" ? headerLanguageMap["Projects"] : "My Projects"}
      </SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
