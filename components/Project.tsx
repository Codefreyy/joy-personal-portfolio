"use client"

import { useRef } from "react"
import { projectsData } from "@/lib/data"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { FaGithubSquare } from "react-icons/fa"
import Link from "next/link"
import { FiExternalLink } from "react-icons/fi"
import { useLocale } from "next-intl"

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  desc_zh,
  title_zh,
  tags,
  imageUrl,
  projectUrl,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  const activeLocale = useLocale()

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[28rem]  transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 ">
        <div className="group pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col items-start gap-3 h-full sm:group-even:ml-[18rem]">
          <div className="flex flex-col gap-3 items-start ">
            <h3 className="text-2xl font-semibold group-hover:text-pink dark:group-hover:text-yellow hover:underline">
              {activeLocale === "zh" ? title_zh : title}
            </h3>

            <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-300">
              {" "}
              <Link
                href={projectUrl}
                target="_blank"
                className="w-full flex items-center gap-1  hover:underline underline-offset-2"
              >
                <span className="break-keep">Code</span>

                <FaGithubSquare className="w-5 h-5" />
              </Link>
              {demoUrl && (
                <Link
                  href={demoUrl}
                  target="_blank"
                  className=" w-full flex items-center gap-1 hover:underline underline-offset-2"
                >
                  <span className="break-keep min-w-[4.5rem]">Live demo</span>
                  <FiExternalLink className="w-5 h-5 " />
                </Link>
              )}
            </div>
          </div>

          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {activeLocale === "zh" ? desc_zh : description}
          </p>
          <ul className="flex flex-wrap mt-auto gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  )
}
