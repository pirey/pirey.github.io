import { Root } from "mdast";
import { visit } from "unist-util-visit";

export default function remarkRelativeAsset({ slug }: { slug: string }) {
  return function (tree: Root) {
    visit(tree, "paragraph", (node) => {
      const image = node.children.find((child) => child.type === "image");
      if (image) {
        const filename = image.url.replace("./", "");
        image.url = `/assets/posts/${slug}/${filename}`;
      }
    });
  };
}
