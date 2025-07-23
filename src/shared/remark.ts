import { BASEPATH } from "@/constants";
import { Root } from "mdast";
import { visit } from "unist-util-visit";

export function remarkRelativeAsset({ slug }: { slug: string }) {
  return function (tree: Root) {
    // Raw HTML: <video src="./file.mp4">...</video>
    visit(tree, "html", (node) => {
      node.value = node.value.replace(
        /src=["']\.\/(.*?)["']/g,
        `src="${BASEPATH}/assets/blog/${slug}/$1"`,
      );
    });
    visit(tree, "paragraph", (node) => {
      const image = node.children.find((child) => child.type === "image");
      if (image && !/^https?:\/\//.test(image.url)) {
        const filename = image.url.replace(/^\.\//, "");
        image.url = `${BASEPATH}/assets/blog/${slug}/${filename}`;
      }
    });
  };
}
