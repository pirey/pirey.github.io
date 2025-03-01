import { Header } from "@/components/header";
import { PAGE_TITLE } from "@/constants";
import { getAllPostSlugs, getPostData, PostData } from "@/shared/blog";
import { formatDate } from "@/shared/datetime";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import "highlight.js/styles/tokyo-night-dark.min.css";
import Giscus from "@giscus/react";
import config from "@/shared/config";

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

export default function BlogPostPage({ post }: { post: PostData }) {
  const withStyle = (contentHtml: string = "") => {
    return `
      <style>
      .post-content a { text-decoration: underline; }
      .post-content p { margin-bottom: 2rem; word-wrap: break-word; }
      .post-content ul { margin-bottom: 2rem; list-style: unset; list-style-position: inside; }
      .post-content pre { margin-bottom: 2rem; }
      .post-content pre code { border-radius: .5rem; }
      .post-content code:not(pre code) { background-color: lightgray; display: inline-block; padding-left: 4px; padding-right: 4px; border-radius: 4px; }
      .post-content img { border-radius: .5rem; }
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
        <title>{`${post.metadata.title} | ${PAGE_TITLE}`}</title>
      </Head>
      <Header />
      <section className="mx-auto max-w-3xl px-4 pt-4">
        <h2 className="text-2xl font-black">{post.metadata.title}</h2>
        <p className="text-xs">{formatDate(new Date(post.metadata.date))}</p>
        <div
          className="post-content max-w-2xl pt-10"
          dangerouslySetInnerHTML={{ __html: withStyle(post.contentHtml) }}
        ></div>
        <div className="py-10">
          {config.giscusRepo && config.giscusRepoId && (
            <Giscus
              repo={config.giscusRepo}
              repoId={config.giscusRepoId}
              category={config.giscusCategory}
              categoryId={config.giscusCategoryId}
              mapping="pathname"
              strict="0"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme="preferred_color_scheme"
              lang="en"
              loading="lazy"
            />
          )}
        </div>
      </section>
    </>
  );
}
