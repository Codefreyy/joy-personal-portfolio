"use client"

import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {
  experiencesData,
  experiencesDataZn,
  headerLanguageMap,
} from "@/lib/data"
import SectionHeading from "./SectionHeading"
import { motion } from "framer-motion"
import { useTheme } from "@/context/theme-context"
import { ExperienceLabel } from "./ExperienceLabel"
import { useLocale } from "next-intl"

export default function Experience({ isMobile }: { isMobile: boolean }) {
  const { theme } = useTheme()
  const variants = {
    left: {
      hidden: { x: -200, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    right: {
      hidden: { x: 200, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
  }

  const activeLocale = useLocale()

  const experienceDataShown =
    activeLocale == "zh" ? experiencesDataZn : experiencesData

  return (
    <section className="sm:mb-40 relative mb-20">
      <ExperienceLabel />
      <SectionHeading>
        {" "}
        {activeLocale === "zh"
          ? headerLanguageMap["Experiences"]
          : "My Experiences"}
      </SectionHeading>
      {!isMobile ? (
        <VerticalTimeline lineColor={theme == "light" ? "#e9e9ea" : "#3b3d4f"}>
          {experienceDataShown.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={variants[index % 2 === 0 ? "right" : "left"]}
              className="mb-20"
            >
              <VerticalTimelineElement
                position={index % 2 === 0 ? "left" : "right"}
                visible={true}
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={<>{item.icon}</>}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-bold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </motion.div>
          ))}
        </VerticalTimeline>
      ) : (
        <div className="flex flex-col gap-6">
          {experienceDataShown.map((item, index) => (
            <div
              key={index}
              className={`flex dark:bg-slate-800 dark:text-slate-100 bg-slate-100 border-1 border-opacity-80 rounded-lg p-6 pb-8 flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 `}
            >
              <div className="w-10 h-5 sm:w-24 sm:h-24 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                {item.icon}
              </div>
              {item.date}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
