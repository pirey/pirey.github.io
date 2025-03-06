import { LabelBadge, LabelBadgeList } from "@/components/badge";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import { Project, sortedProjects } from "@/shared/projects";
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
    <>
      <Head>
        <title>{`${project.title} | ${PAGE_TITLE}`}</title>
      </Head>
      <TopNavBar />
      <section className="mx-auto max-w-3xl px-4 pt-4">
        <h2 className="text-2xl font-black">{project.title}</h2>
        <p className="text-sm">{project.year}</p>
        <Link href="/projects" className="block pt-4 underline">
          ← All projects
        </Link>
        <p className="pt-10">{project.description}</p>
        <LabelBadgeList>
          {project.tags.map((tag) => (
            <LabelBadge key={tag}>{tag}</LabelBadge>
          ))}
        </LabelBadgeList>
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

        <article className="pt-10">
          <h3 className="text-xl font-bold">Role</h3>
          <p>
            <span className="italic">{project.role}</span> —{" "}
            {project.roleDescription}
          </p>
        </article>

        <div className="flex flex-wrap justify-center gap-10 py-10 sm:justify-start">
          {project.images.map((img) => (
            <figure key={img.alt} className="text-center">
              <Image
                priority
                src={img.src}
                alt={img.alt}
                className="rounded-lg shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              />
              <figcaption className="pt-2 text-sm text-gray-600">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
