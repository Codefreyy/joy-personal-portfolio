import { projectsData } from "@/lib/data"
import SectionHeading from "./SectionHeading"
import React from "react"
import Project from "./Project"

export function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
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
