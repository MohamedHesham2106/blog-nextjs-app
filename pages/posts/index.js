import AllPosts from "../../components/Posts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";
const Posts = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
