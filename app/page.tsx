import { Intro } from "@/components/Intro"
import { SectionDivider } from "@/components/SectionDivider"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
