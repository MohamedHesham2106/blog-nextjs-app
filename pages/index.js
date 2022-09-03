import { Fragment } from "react";
import Hero from "../components/Home/Hero";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import { featuredPosts } from "../helpers/posts-util";

const Home = ({ posts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};
export async function getStaticProps() {
  const posts = featuredPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1800,
  };
}
export default Home;
