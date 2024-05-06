"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        <p>{t("desc")}</p>
      ) : (
        <>
          <p className="mb-3">
            After completing my undergraduate degree in{" "}
            <span className="font-medium italic">Digital Publishing</span> at
            the{" "}
            <span className="italic underline">
              <a
                href="https://en.wikipedia.org/wiki/Wuhan_University"
                target="_blank"
              >
                Wuhan University
              </a>
            </span>
            , I found a deep passion for programming. This journey began with
            classes in the computer science fundamentals, databases and
            HTML/CSS, which led me directly to{" "}
            <span className="font-medium italic">front-end development</span>.
          </p>

          <p className="mb-3">
            {" "}
            After interning at the Big Data Research Institute of Wuhan
            University and{" "}
            <span className="italic underline">
              <a href="https://www.nio.com/careers" target="_blank">
                NIO Inc.
              </a>
            </span>
            , I became even more certain that this was the career path I wanted
            to pursue. Currently, I am pursuing a Master’s degree in
            <span className="font-medium italic"> Computing and IT</span> at the{" "}
            <span className="italic underline">
              <a href="https://www.st-andrews.ac.uk/" target="_blank">
                University of St Andrews
              </a>
            </span>
          </p>

          <p className="mb-3">
            I enjoy the challenge of programming, and the process of working
            with a team to develop projects and solve complex problems brings
            great satisfaction. I specialize in working with technologies such
            as{" "}
            <span className="font-medium italic">React, Vue3, and Next.js</span>
            , and have a solid understanding of{" "}
            <span className="font-medium italic">
              JavaScript, TypeScript and HTML/CSS
            </span>
            .{" "}
          </p>

          <p>
            In my spare time, I like to learn new skills and work on interesting
            projects 🛠️. I also run my own accounts on social media like
            Bilibili and Xiaohongshu to share technical knowledge and learning
            resources 🌐. If I&apos;m not in front of the computer, I like to
            cook, watch movies and work out 🍳🎥💪 Regular exercise, sleep and
            diet are the secret to my energy 🌟.
          </p>
        </>
      )}
    </motion.section>
  )
}
