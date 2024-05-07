import Intro from "@/components/homepage/Intro"
import SectionDivider from "@/components/homepage/SectionDivider"
import About from "@/components/homepage/About"
import Projects from "@/components/homepage/Projects"
import Skills from "@/components/homepage/Skills"
import Experience from "@/components/homepage/Experience"
import { isMobileDevice } from "@/lib/utils"
// import Contact from "@/components/Contact"

export const metadata = {
  title: "Joy | Personal Portfolio",
  description: "Joy is a full-stack developer with 2 years of experience.",
}

export default function Home() {
  const isMobile = isMobileDevice()

  return (
    <main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience isMobile={isMobile} />
      {/* <Contact /> */}
    </main>
  )
}
