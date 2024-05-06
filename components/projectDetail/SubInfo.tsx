import { ProjectTags } from "@/lib/data"

export default function SubInfo({
  tags,
  projectUrl,
  demoUrl,
}: {
  tags: ProjectTags
  projectUrl: string
  demoUrl: string
}) {
  return (
    <section className="pt-10 flex gap-5">
      <div>
        <h6 className="font-extrabold mb-5 uppercase">Stack</h6>
        <ul className="space-y-2 text-sm">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>

      <div>
        <h6 className="font-extrabold mb-5 uppercase">Link</h6>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href={demoUrl}
              className="text-pink dark:text-yellow hover:underline font-semibold"
            >
              View Site
            </a>
          </li>
          <li>
            <a
              href={projectUrl}
              className="text-pink dark:text-yellow hover:underline font-semibold"
            >
              Source Code
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
