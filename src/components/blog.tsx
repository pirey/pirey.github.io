import { PostData } from "@/shared/blog";
import config from "@/shared/config";
import { formatDate } from "@/shared/datetime";
import Giscus from "@giscus/react";
import "highlight.js/styles/tokyo-night-dark.min.css";
import Link from "next/link";
import styles from "./blog.module.css";
import React from "react";
import { useTheme } from "@/context/theme";

export function BlogPost({ post }: { post: PostData }) {
  const { isDark } = useTheme();
  return (
    <>
      <h2 className="text-2xl font-black">{post.metadata.title}</h2>
      <p className="text-sm">{formatDate(new Date(post.metadata.date))}</p>
      <article
        className={styles["post-content"]}
        dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
      ></article>
      <Link href="/blog" className="underline">
        ← View all posts
      </Link>
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
            theme={isDark ? "dark" : "light"}
            lang="en"
            loading="lazy"
          />
        )}
      </div>
    </>
  );
}

export function BlogPostItem({ post }: { post: PostData }) {
  return (
    <Link aria-label={post.metadata.title} href={`/blog/${post.slug}`}>
      <h3 className="font-bold">{post.metadata.title}</h3>
      <h4 className="text-sm">{formatDate(new Date(post.metadata.date))}</h4>
      <p>{post.metadata.description}</p>
    </Link>
  );
}
