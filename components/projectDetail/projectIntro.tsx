export default function ProjectIntro({
  title,
  desc,
}: {
  title: string
  desc: string
}) {
  return (
    <section className="pt-10">
      <h2 className="text-4xl font-extrabold capitalize mb-8 text-start">
        {title}
      </h2>
      <p className="mt-10 tracking-wide">{desc} </p>
    </section>
  )
}
