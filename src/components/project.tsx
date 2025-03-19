import { TechBadge } from "@/components/badge";
import { Project } from "@/shared/projects";
import Image from "next/image";
import Link from "next/link";

export function ProjectListItem({ project }: { project: Project }) {
  return (
    <Link
      aria-label={project.title}
      href={`/projects/${project.slug}`}
      className={`
        group relative flex flex-col justify-between gap-10
        sm:flex-row
      `}
    >
      <div>
        <h3 className="font-bold">{project.title}</h3>
        <h4 className="text-sm">
          <span className="italic">{project.role}</span> — {project.year}
        </h4>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-x-2 gap-y-1 pt-2">
          {project.tags.map((tag) => (
            <TechBadge key={tag} tech={tag} />
          ))}
        </div>
      </div>

      <div
        className={`
          hidden h-24 w-32 flex-none
          sm:group-hover:block
        `}
      ></div>
      <Image
        src={project.images[0].src}
        alt={project.title}
        className={`
          sm:transition-grayscale sm:h-24 sm:w-32 sm:grayscale
          sm:group-hover:absolute sm:group-hover:top-0 sm:group-hover:right-0
          sm:group-hover:h-auto sm:group-hover:max-h-48 sm:group-hover:scale-200
          sm:group-hover:grayscale-0
          max-h-56 flex-none rounded-sm object-cover object-top shadow-sm
          duration-200
          group-hover:z-10 group-hover:shadow-2xl
        `}
      />
    </Link>
  );
}
