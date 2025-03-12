import { BlogPostItem } from "@/components/blog";
import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { Heading } from "@/components/heading";
import { PageLayout } from "@/components/layout";
import { TopNavBar } from "@/components/navbar";
import { ProjectListItem } from "@/components/project";
import { PAGE_TITLE } from "@/constants";
import { getSortedPosts, PostData } from "@/shared/blog";
import { sortedProjects } from "@/shared/projects";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = await getSortedPosts();
  return {
    props: {
      allPostData,
    },
  };
};

export default function HomePage(props: { allPostData: PostData[] }) {
  return (
    <PageLayout>
      <Head>
        <title>{PAGE_TITLE}</title>
      </Head>
      <TopNavBar />
      <Content>
        <Heading>Latest Post</Heading>
        <ul className="flex flex-col gap-y-10 pt-10">
          {props.allPostData.slice(0, 3).map((post) => (
            <li role="article" key={post.slug}>
              <BlogPostItem post={post} />
            </li>
          ))}
        </ul>

        <Link href="/blog" className="block pt-10 underline">
          View {props.allPostData.length - 3} more posts →
        </Link>

        <Heading className="pt-10">Latest Projects</Heading>
        <ul className="flex flex-col gap-y-10 pt-10">
          {sortedProjects.slice(0, 3).map((project) => (
            <li role="article" key={project.slug}>
              <ProjectListItem project={project} />
            </li>
          ))}
        </ul>

        <Link href="/projects" className="block py-10 underline">
          View {sortedProjects.length - 3} more projects →
        </Link>
      </Content>
      <Footer />
    </PageLayout>
  );
}
