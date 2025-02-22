import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";
import { remark } from "remark";
import html from "remark-html";

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
  metadata: PostMetadata;
};

const postsDirectory = path.resolve(process.cwd(), "posts");

export async function getSortedPosts() {
  const slugs = getAllPostSlugs();
  const postsData = await Promise.all(
    slugs.map((slug) => getPostData(getFilepath(slug))),
  );

  return postsData.sort((a, b) => {
    if (!a.metadata.date || !b.metadata.date) return -1;

    if (a.metadata.date < b.metadata.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
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

export function getFilepath(slug: string) {
  return path.join(postsDirectory, `${slug}.md`);
}

export async function getPostData(path: string) {
  if (path.indexOf(postsDirectory) !== 0) {
    throw Error(`Invalid path`);
  }
  const slug = path.replace(postsDirectory, "").replace(/.md$/, "");
  const fileContents = fs.readFileSync(path, "utf8");
  const matterResult = matter(fileContents);
  const matterData = matterResult.data as PostMatter;

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const post: PostData = {
    metadata: {
      ...matterData,
      date: matterData.date.toISOString(),
    },
    slug,
    contentHtml,
  };

  return post;
}
