import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/Posts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";
const Posts = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="a list of all programming posts" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};
export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}
export default Posts;
