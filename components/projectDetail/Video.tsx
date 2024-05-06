import Image from "next/image"
import Link from "next/link"
import { FaYoutube } from "react-icons/fa"

export default function Video({
  url,
  alt,
  className,
  imageUrl,
}: {
  url: string
  alt: string
  className?: string
  imageUrl: string
}) {
  console.log(url)
  return (
    <div
      className={` group
      rounded-md relative mt-10 w-[30rem] h-[20rem] overflow-hidden ${className} object-cover shadow-2xl hover:opacity-75 hover:cursor-pointer`}
    >
      <Link href={url} target={"_blank"}>
        <Image
          src={imageUrl}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </Link>
      <FaYoutube className="group-hover:w-16 group-hover:h-16 absolute w-10 h-10 left-1/2 top-1/2 -translate-x-1/2 text-white/70 -translate-y-1/2" />
    </div>
  )
}
