import { LabelBadge } from "@/components/badge";
import { Project } from "@/shared/projects";
import Image from "next/image";
import Link from "next/link";

export function ProjectListItem({ project }: { project: Project }) {
  return (
    <Link
      aria-label={project.title}
      href={`/projects/${project.slug}`}
      className="group flex justify-between gap-x-10"
    >
      <div>
        <h3 className="font-bold">{project.title}</h3>
        <h4 className="text-sm">
          <span className="italic">{project.role}</span> — {project.year}
        </h4>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-x-2 gap-y-1 pt-2">
          {project.tags.map((tag) => (
            <LabelBadge key={tag}>{tag}</LabelBadge>
          ))}
        </div>
      </div>

      <Image
        src={project.images[0].src}
        alt={project.title}
        className="transition-grayscale hidden h-24 w-32 rounded-sm object-cover object-top shadow-sm grayscale duration-300 group-hover:grayscale-0 sm:inline-flex"
      />
    </Link>
  );
}
