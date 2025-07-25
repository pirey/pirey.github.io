import { remarkRelativeAsset } from "@/shared/remark";
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type PostMatter = {
  title: string;
  description: string;
  date: Date;
  tags?: string[];
};

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

export type PostData = {
  slug?: string;
  contentHtml?: string;
  content?: string;
  metadata: PostMetadata;
};

const postsDirectory = path.resolve(process.cwd(), "content/blog");

export async function getSortedPosts() {
  const slugs = getAllPostSlugs();
  const postsData = await Promise.all(slugs.map((slug) => getPostData(slug)));

  return postsData.sort((a, b) => {
    if (!a.metadata.date || !b.metadata.date) return -1;

    if (a.metadata.date < b.metadata.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * @unused for now 1 depth directory is enough. use `getAllPostSlugs`
 */
export function getAllPostSlugsRecursive() {
  const scanPostDirectory = (dir: string) => {
    const absoluteDirPath = path.resolve(postsDirectory, dir);
    const filenames = fs.readdirSync(absoluteDirPath);
    const slugs: string[] = [];
    filenames.forEach((filename) => {
      const absoluteFilepath = path.resolve(absoluteDirPath, filename);
      const relativeFilepath = path.join(dir, filename);
      const stat = fs.statSync(absoluteFilepath);
      if (stat.isDirectory()) {
        const subdirFiles = scanPostDirectory(relativeFilepath);
        subdirFiles.forEach((slug) => {
          slugs.push(slug);
        });
      } else {
        slugs.push(relativeFilepath.replace(/.md$/, ""));
      }
    });
    return slugs;
  };

  const allSlugs = scanPostDirectory("");
  return allSlugs;
}

export function getAllPostSlugs() {
  const subdirs = fs.readdirSync(postsDirectory);
  const slugs: string[] = [];
  subdirs.forEach((subdir) => {
    const absoluteSubdirpath = path.resolve(postsDirectory, subdir);
    const stat = fs.statSync(absoluteSubdirpath);
    if (stat.isDirectory()) {
      const subdirFiles = fs.readdirSync(absoluteSubdirpath);
      subdirFiles.forEach((filename) => {
        if (filename.endsWith(".md")) {
          slugs.push(subdir);
        }
      });
    }
  });
  return slugs;
}

/**
 * @unused use `getPostdirIndex` instead for 1 depth directory post
 */
export function getFilepath(relativepath: string) {
  return path.join(postsDirectory, `${relativepath}.md`);
}

export function getPostdirIndex(dir: string) {
  return path.join(postsDirectory, `${dir}/index.md`);
}

export async function getPostData(slug: string) {
  const filepath = getPostdirIndex(slug);
  const fileContents = fs.readFileSync(filepath, "utf8");
  const matterResult = matter(fileContents);
  const matterData = matterResult.data as PostMatter;

  // prettier-ignore
  const processedContent = await unified()
    .use(remarkParse)                        // parse markdown into ast
    .use(remarkRelativeAsset, { slug })      // convert relative url to static public url
    .use(remarkRehype, { allowDangerousHtml: true })                       // convert markdown ast to html ast
    .use(rehypeHighlight)                    // code block highlight using lowlight/highlight.js
    .use(rehypeStringify, { allowDangerousHtml: true })                    // to html string
  .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const post: PostData = {
    metadata: {
      ...matterData,
      date: matterData.date.toISOString(),
    },
    slug,
    content: matterResult.content,
    contentHtml,
  };
  return post;
}
