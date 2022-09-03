import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPostFiles = () => {
  return fs.readdirSync(path.join(process.cwd(), "content"));
};

export const readPostsData = (identifier) => {
  const slug = identifier.replace(/\.md$/, ""); // remove file extension
  const MarkdownContent = fs.readFileSync(
    path.join(process.cwd(), "content", `${slug}.md`),
    "utf-8"
  );
  const { data, content } = matter(MarkdownContent); // return => metadata in data property and markdown in content

  const postData = {
    slug,
    ...data,
    content,
  };
  return postData;
};

export const getAllPosts = () => {
  const files = getPostFiles();

  const posts = files.map((postFile) => {
    return readPostsData(postFile);
  });
  // sorting by dates from recent to oldest
  const sortedPosts = posts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};

export const featuredPosts = () => {
  const posts = getAllPosts();
  return posts.filter((post) => post.isFeatured);
};
