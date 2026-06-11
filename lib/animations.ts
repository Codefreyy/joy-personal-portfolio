import type { Variants } from "framer-motion"

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInUpProps = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
} as const
