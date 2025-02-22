import { getSortedPosts, PostData } from "@/lib/post";
import { GetStaticProps } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = await getSortedPosts();
  return {
    props: {
      allPostData,
    },
  };
};

export default function Home(props: { allPostData: PostData[] }) {
  return (
    <main>
      <h1>My Blog</h1>
      <ul>
        {props.allPostData.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts${post.slug}`}>{post.metadata.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
