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
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
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
            , I found a strong interest in programming. The journey started with
            basic courses in computer science, databases and HTML/CSS, which
            naturally led me to{" "}
            <span className="font-medium italic">front-end development</span>.
          </p>

          <p className="mb-3">
            Internships at Wuhan University&apos;s Big Data Institute and{" "}
            <span className="italic underline">
              <a href="https://www.nio.com/careers" target="_blank">
                NIO Inc.
              </a>
            </span>{" "}
            confirmed that this is the career path I want to pursue. I am
            currently studying for an
            <span className="font-medium italic">
              {" "}
              MSc in Computing and IT
            </span>{" "}
            at the{" "}
            <span className="italic underline">
              <a href="https://www.st-andrews.ac.uk/" target="_blank">
                University of St Andrews.
              </a>
            </span>
          </p>

          <p className="mb-3">
            I thrive on programming challenges and enjoy working with teams to
            solve complex problems. I specialize in technologies such as
            <span className="font-medium italic"> React, Next.js and Vue</span>,
            and have a solid understanding of{" "}
            <span className="font-medium italic">
              JavaScript, TypeScript and HTML/CSS
            </span>
            .{" "}
          </p>

          <p>
            In my spare time, I like to learn new skills and work on interesting
            projects 🛠️. I also run my own accounts on social media like
            Bilibili and Xiaohongshu to share technical knowledge and learning
            resources. If I&apos;m not at the computer, I enjoy
            <span className="font-medium italic">
              {" "}
              cooking, watching movies and working out.
            </span>
            Regular exercise, sleep and diet are my secrets to my energy.
          </p>
        </>
      )}
    </motion.section>
  )
}
