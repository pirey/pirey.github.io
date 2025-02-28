import { Header } from "@/components/header";
import { PAGE_TITLE } from "@/constants";
import { getAllPostSlugs, getPostData, PostData } from "@/lib/blog";
import { formatDate } from "@/lib/datetime";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getAllPostSlugs();
  return {
    fallback: false,
    paths: slugs.map((slug) => ({
      params: { slug: slug },
    })),
  };
};

export const getStaticProps: GetStaticProps<{
  slug: string;
  post: PostData;
}> = async (context) => {
  const slugParam = context.params?.slug;
  const slug = (() => {
    if (!slugParam) return "";
    if (Array.isArray(slugParam)) return slugParam.join("/");
    return slugParam;
  })();
  const post = await getPostData(slug);

  return {
    props: {
      slug,
      post,
    },
  };
};

export default function BlogPost({ post }: { post: PostData }) {
  const withStyle = (contentHtml: string = "") => {
    return `
      <style>
      .post-content p { margin-bottom: 2rem; }
      .post-content h1 { margin-bottom: 1rem; font-weight: bold; font-size: 1.75rem; } /* 28px */
      .post-content h2 { margin-bottom: 1rem; font-weight: bold; font-size: 1.5rem; }  /* 24px */
      .post-content h3 { margin-bottom: 1rem; font-weight: bold; font-size: 1.25rem; } /* 20px */
      .post-content h4 { margin-bottom: 1rem; font-weight: bold; font-size: 1.125rem; } /* 18px */
      .post-content h5 { margin-bottom: 1rem; font-weight: bold; font-size: 1rem; }    /* 16px */
      .post-content h6 { margin-bottom: 1rem; font-weight: bold; font-size: 0.875rem; } /* 14px */
      </style>
      ${contentHtml}
    `;
  };
  return (
    <>
      <Head>
        <title>
          {post.metadata.title} | {PAGE_TITLE}
        </title>
      </Head>
      <Header />
      <section className="container mx-auto pt-4">
        <h2 className="text-2xl font-black">{post.metadata.title}</h2>
        <p className="text-xs">{formatDate(new Date(post.metadata.date))}</p>
        <div
          className="pt-10 max-w-xl post-content"
          dangerouslySetInnerHTML={{ __html: withStyle(post.contentHtml) }}
        ></div>
      </section>
    </>
  );
}
