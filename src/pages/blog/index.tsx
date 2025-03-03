import { Content } from "@/components/content";
import { Heading } from "@/components/heading";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import { getSortedPosts, PostData } from "@/shared/blog";
import { formatDate } from "@/shared/datetime";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

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
    <>
      <Head>
        <title>{`Blog | ${PAGE_TITLE}`}</title>
      </Head>
      <TopNavBar />
      <Content>
        <Heading>Blog</Heading>
        <ul className="flex flex-col gap-y-10 py-10">
          {props.allPostData.map((post) => (
            <li role="article" key={post.slug}>
              <Link className="font-bold" href={`/blog/${post.slug}`}>
                {post.metadata.title}
              </Link>
              <p className="text-xs">
                {formatDate(new Date(post.metadata.date))}
              </p>
              <p>{post.metadata.description}</p>
            </li>
          ))}
        </ul>
      </Content>
    </>
  );
}
