import { getAllPostSlugs, getPostData, PostData } from "@/lib/blog";
import { GetStaticPaths, GetStaticProps } from "next";

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

export default function Post({ post }: { post: PostData }) {
  return (
    <div>
      <h1>{post.metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}></div>
    </div>
  );
}
