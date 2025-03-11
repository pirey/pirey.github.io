import { BlogPost } from "@/components/blog";
import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { PageLayout } from "@/components/layout";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import { getAllPostSlugs, getPostData, PostData } from "@/shared/blog";
import "highlight.js/styles/tokyo-night-dark.min.css";
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

export default function BlogPostPage({ post }: { post: PostData }) {
  return (
    <PageLayout>
      <Head>
        <title>{`${post.metadata.title} | ${PAGE_TITLE}`}</title>
      </Head>
      <TopNavBar />
      <Content>
        <BlogPost post={post} />
      </Content>
      <Footer />
    </PageLayout>
  );
}
