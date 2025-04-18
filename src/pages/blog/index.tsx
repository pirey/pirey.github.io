import { BlogPostItem } from "@/components/blog";
import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { Heading } from "@/components/heading";
import { PageLayout } from "@/components/layout";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import { getSortedPosts, PostData } from "@/shared/blog";
import { GetStaticProps } from "next";
import Head from "next/head";

type ContentlessPost = Omit<PostData, "contentHtml" | "content">;

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = await getSortedPosts();
  return {
    props: {
      allPostData: allPostData.map(({ contentHtml, content, ...post }) => post),
    },
  };
};

export default function BlogPage(props: { allPostData: ContentlessPost[] }) {
  return (
    <PageLayout>
      <Head>
        <title>{`Blog | ${PAGE_TITLE}`}</title>
      </Head>
      <TopNavBar />
      <Content>
        <Heading>Blog</Heading>
        <ul className="flex flex-col gap-y-10 py-10">
          {props.allPostData.map((post) => (
            <li key={post.slug}>
              <BlogPostItem post={post} />
            </li>
          ))}
        </ul>
      </Content>
      <Footer />
    </PageLayout>
  );
}
