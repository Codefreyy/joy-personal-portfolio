"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.25 }}
      className="text-gray-500 w-8 h-8 mt-12 mb-20 rounded-full hidden sm:block "
    >
      <Link href="#about">
        <IoIosArrowDown className="transition" />
      </Link>
    </motion.div>
  )
}
