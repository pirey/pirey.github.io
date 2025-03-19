import { BadgeList, TechBadge } from "@/components/badge";
import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { PageLayout } from "@/components/layout";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import { Project, ProjectClient, sortedProjects } from "@/shared/projects";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: sortedProjects.map((project) => ({
      params: { slug: project.slug },
    })),
  };
};

export const getStaticProps: GetStaticProps<{
  slug: string;
  project: Project;
}> = async (context) => {
  const slugParam = context.params?.slug;

  const slug = (() => {
    if (!slugParam) return "";
    if (Array.isArray(slugParam)) return slugParam.join("/");
    return slugParam;
  })();

  const project = sortedProjects.find((p) => p.slug === slug)!;

  return {
    props: {
      slug,
      project,
    },
  };
};

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <PageLayout>
      <Head>
        <title>{`Project ${project.title} | ${PAGE_TITLE}`}</title>
      </Head>
      <TopNavBar />
      <Content>
        <h2 className="text-2xl font-black">{project.title}</h2>
        <h4 className="text-sm">{project.year}</h4>
        <ProjectClientDisplay client={project.client} />

        <article className="pt-4">
          <p className="pt-4">{project.description}</p>
          <BadgeList>
            {project.tags.map((tag) => (
              <TechBadge key={tag} tech={tag} />
            ))}
          </BadgeList>
          {project.links && (
            <div className="flex gap-x-2 gap-y-1 pt-2">
              <span>Links:</span>
              {project.links.map((link, i) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  {i < Number(project.links?.length) - 1 ? ", " : ""}
                </a>
              ))}
            </div>
          )}
        </article>

        <article className="pt-10">
          <h3 className="text-xl font-bold">Description</h3>
          <p className="pt-4">
            <span className="italic">{project.role}</span> —{" "}
            {project.roleDescription}
          </p>
        </article>

        <div
          className={`
            flex flex-wrap justify-center gap-10 py-10
            sm:justify-start
          `}
        >
          {project.images.map((img) => (
            <figure key={img.alt} className="text-center">
              <Image
                priority
                src={img.src}
                alt={img.alt}
                className={`
                  rounded-lg shadow-sm transition-transform
                  hover:-translate-y-1 hover:shadow-lg
                `}
              />
              <figcaption className="pt-2 text-sm">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
        <Link href="/projects" className="block pb-10 underline">
          ← View all projects
        </Link>
      </Content>
      <Footer />
    </PageLayout>
  );
}

function ProjectClientDisplay({ client }: { client?: ProjectClient }) {
  if (!client) return null;
  if (!client.logo) {
    return <h4>{client.name}</h4>;
  }
  const bgClass =
    client.logoBg === "black"
      ? "bg-bg-dark p-1 rounded-sm"
      : client.logoBg === "white"
        ? "dark:bg-bg-light dark:p-1 dark:rounded-sm"
        : "";
  return (
    client.logo && (
      <a href={client.url ?? "#"} className="inline-block pt-2">
        <Image
          src={client.logo}
          alt={client.name}
          height={32}
          className={bgClass}
        />
      </a>
    )
  );
}
