import { Header } from "@/components/header";
import { getSortedPosts, PostData } from "@/lib/blog";
import { GetStaticProps } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/datetime";
import Head from "next/head";
import { PAGE_TITLE } from "@/constants";

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = await getSortedPosts();
  return {
    props: {
      allPostData,
    },
  };
};

export default function BlogPage(props: { allPostData: PostData[] }) {
  return (
    <>
      <Head>
        <title>Blog | {PAGE_TITLE}</title>
      </Head>
      <Header />
      <section className="container px-4 mx-auto pt-4">
        <h2 className="text-2xl font-black">Blog</h2>
        <ul className="pt-10 flex flex-col gap-y-10">
          {props.allPostData.map((post) => (
            <li key={post.slug}>
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
      </section>
    </>
  );
}
