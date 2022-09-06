import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/Posts/PostDetail/PostContent";
import { getPostFiles, readPostsData } from "../../helpers/posts-util";

const PostDetail = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};
export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = readPostsData(slug);
  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}
export async function getStaticPaths() {
  const slug = getPostFiles().map((file) => file.replace(/\.md$/, ""));
  return {
    paths: slug.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
export default PostDetail;
