import { Content } from "@/components/content";
import { Heading } from "@/components/heading";
import { TopNavBar } from "@/components/navbar";
import { ProjectListItem } from "@/components/project";
import { PAGE_TITLE } from "@/constants";
import { sortedProjects } from "@/shared/projects";
import Head from "next/head";

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
