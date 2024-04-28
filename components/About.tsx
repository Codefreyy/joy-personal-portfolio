"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

export function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my undergraduate degree in{" "}
        <span className="font-medium italic">Digital Publishing</span>, I found
        a deep passion for programming. This journey began with classes in the
        computer science fundamentals, databases and HTML/CSS, which led me
        directly to{" "}
        <span className="font-medium italic">front-end development</span>. After
        several internships, I confirmed my commitment to this career path.
        Currently, I am pursuing a Master’s degree in
        <span className="font-medium italic"> Computing and IT</span> at the{" "}
        <span className="italic underline">
          <a href="https://www.st-andrews.ac.uk/" target="_blank">
            University of St Andrews
          </a>
        </span>
        . I thrive on the challenges of coding and the satisfaction that comes
        from solving complex problems. I am proficient in technologies such as{" "}
        <span className="font-medium italic">React, Vue3, and Next.js</span>,
        and have a solid understanding of{" "}
        <span className="font-medium italic">TypeScript and HTML/CSS</span>.
      </p>

      <p>
        In my spare time, I enjoy learning new skills and building fun projects.
        I also enjoy cooking, watching movies, and boxing and working out with
        friends.
      </p>
    </motion.section>
  )
}
