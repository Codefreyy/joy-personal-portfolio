import SubInfo from "@/components/projectDetail/SubInfo"
import Video from "@/components/projectDetail/Video"
import ProjectIntro from "@/components/projectDetail/projectIntro"
import { projectsData } from "@/lib/data"
import Link from "next/link"
import { IoIosArrowBack } from "react-icons/io"

export default function Page() {
  const project = projectsData.find(
    (project) => project.title === "Typing Speed"
  )
  return (
    <>
      <Link
        href={"/#projects"}
        className="absolute top-5 left-5 hover:cursor-pointer hover:scale-[1.25]"
      >
        <IoIosArrowBack className="w-6 h-6" />
      </Link>
      <main className="flex flex-col p-5 sm:py-[3rem] sm:px-[10rem]">
        <ProjectIntro title={project?.title!} desc={project?.description!} />
        <SubInfo
          tags={project?.tags!}
          demoUrl={project?.demoUrl!}
          projectUrl={project?.projectUrl!}
        />
        {/* <Image
        src={project?.imageUrl!}
        alt="projectImage"
        className="mt-10 w-[30rem] h-[20rem]"
      /> */}
        <Video
          imageUrl={"/typing-speed.png"}
          url={"https://www.youtube.com/watch?v=3JZ_D3ELwOQ"}
          alt="typing-speed-cover"
          className="text-center"
        />
      </main>
    </>
  )
}
