import { LabelBadge } from "@/components/badge";
import { Content } from "@/components/content";
import { Heading } from "@/components/heading";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import { Project, sortedProjects } from "@/shared/projects";
import Head from "next/head";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>{`Projects | ${PAGE_TITLE}`}</title>
      </Head>
      <TopNavBar />
      <Content>
        <Heading>Projects</Heading>
        <ul className="flex flex-col gap-y-10 py-10">
          {sortedProjects.map((project) => {
            return (
              <li role="article" key={project.title}>
                <ProjectListItem project={project} />
              </li>
            );
          })}
        </ul>
      </Content>
    </>
  );
}

function ProjectListItem({ project }: { project: Project }) {
  return (
    <>
      <Link className="font-bold" href={`/projects/${project.slug}`}>
        {project.title}
      </Link>
      <p className="text-sm">
        <span className="italic">{project.role}</span> — {project.year}
      </p>
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-x-2 gap-y-1 pt-2">
        {project.tags.map((tag) => (
          <LabelBadge key={tag}>{tag}</LabelBadge>
        ))}
      </div>
    </>
  );
}
