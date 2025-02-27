import fs from "fs";
import path from "path";
import fsExtra from "fs-extra";

const fsPromises = fs.promises;
const targetDir = "./public/assets/blog";
const postsDir = "./content/blog";

await fsExtra.emptyDir(targetDir);
await createPostAssetFoldersForCopy();

async function createPostAssetFoldersForCopy() {
  // Get every post folder: post-one, post-two etc.
  const postSlugs = await fsPromises.readdir(postsDir);

  for (const slug of postSlugs) {
    const allowedAssetFileExtensions = [".png", ".jpg", ".jpeg", ".gif"];

    // Read all files inside current post folder
    const postDirFiles = await fsPromises.readdir(`${postsDir}/${slug}`);

    // Filter out files with allowed file extension (assets)
    const assets = postDirFiles.filter((file) =>
      allowedAssetFileExtensions.includes(path.extname(file)),
    );

    if (assets.length) {
      // Create a folder for assets of this post inside public
      await fsPromises.mkdir(`${targetDir}/${slug}`);

      await copyAssetsToPublic(assets, slug); // TODO
    }
  }
}

async function copyAssetsToPublic(assets, slug) {
  for (const asset of assets) {
    await fsPromises.copyFile(
      `${postsDir}/${slug}/${asset}`,
      `${targetDir}/${slug}/${asset}`,
    );
  }
}
