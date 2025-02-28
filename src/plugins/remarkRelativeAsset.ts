import { BASEPATH } from "@/constants";
import { Root } from "mdast";
import { visit } from "unist-util-visit";

export default function remarkRelativeAsset({ slug }: { slug: string }) {
  return function (tree: Root) {
    visit(tree, "paragraph", (node) => {
      const image = node.children.find((child) => child.type === "image");
      if (image && !/^https?:\/\//.test(image.url)) {
        const filename = image.url.replace(/^\.\//, "");
        image.url = `${BASEPATH}/assets/blog/${slug}/${filename}`;
      }
    });
  };
}
