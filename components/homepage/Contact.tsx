// "use client"
// import React from "react"
// import SectionHeading from "./SectionHeading"
// import { motion } from "framer-motion"
// import { useSectionInView } from "@/lib/hooks"
// import toast, { Toaster } from "react-hot-toast"
// import SubmitBtn from "./SubmitBtn"

// export default function Contact() {
//   // const { ref } = useSectionInView("Contact")
//   return (
//     <motion.section
//       id="contact"
//       // ref={ref}
//       className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{
//         opacity: 1,
//       }}
//       transition={{
//         duration: 1,
//       }}
//       viewport={{
//         once: true,
//       }}
//     >
//       <SectionHeading>Contact Me</SectionHeading>
//       <p className="text-gray-700 -mt-6 dark:text-white/80">
//         Please contact me directly at{" "}
//         <a className="underline" href="mailto:joyyujiepeng@gmail.com">
//           joyyujiepeng@gmail.com
//         </a>{" "}
//         or through this form.
//       </p>
//       <Toaster />
//       <form
//         className="mt-10 flex flex-col dark:text-black"
//         action={async (formData) => {
//           const { data, error } = await sendEmail(formData)
//           if (error) {
//             toast.error(error)
//             return
//           }
//           toast.success("Email sent successfully!")
//         }}
//       >
//         <input
//           className="h-14 px-4 rounded-lg border dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all outline-none"
//           name="senderEmail"
//           type="email"
//           required
//           maxLength={500}
//           placeholder="Your email"
//         />

//         <input
//           className="h-14 border-t border-x mt-3 px-4 rounded-tl-lg rounded-tr-lg  dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all outline-none "
//           name="subject"
//           maxLength={500}
//           placeholder="Subject (optional)"
//         />
//         <textarea
//           className=" h-52 border-b border-x  p-4 rounded-bl-lg rounded-br-lg  dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100  transition-all outline-none max-h-[20rem] resize-none"
//           name="message"
//           placeholder="Your message"
//           required
//           maxLength={5000}
//         />

//         <SubmitBtn className="mt-5" />
//       </form>
//     </motion.section>
//   )
// }
