import { BlogPost } from "@/components/blog";
import { Content } from "@/components/content";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import { getSortedPosts, PostData } from "@/shared/blog";
import { Project, sortedProjects } from "@/shared/projects";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = await getSortedPosts();
  return {
    props: {
      latestPost: allPostData[0],
      latestProject: sortedProjects[0],
    },
  };
};

export default function HomePage(props: {
  latestPost: PostData;
  latestProject: Project;
}) {
  console.log({ props });
  return (
    <>
      <Head>
        <title>Latest Post | {PAGE_TITLE}</title>
      </Head>
      <TopNavBar />
      <Content>
        <BlogPost post={props.latestPost} />
      </Content>
    </>
  );
}
