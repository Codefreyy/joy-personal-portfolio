import Intro from "@/components/homepage/Intro"
import SectionDivider from "@/components/homepage/SectionDivider"
import About from "@/components/homepage/About"
import Projects from "@/components/homepage/Projects"
import Skills from "@/components/homepage/Skills"
import Experience from "@/components/homepage/Experience"
// import Contact from "@/components/Contact"

export const metadata = {
  title: "Joy | Personal Portfolio",
  description: "Joy is a full-stack developer with 2 years of experience.",
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      {/* <Contact /> */}
    </main>
  )
}
