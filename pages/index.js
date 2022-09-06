import { Fragment } from "react";
import Hero from "../components/Home/Hero";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import { featuredPosts } from "../helpers/posts-util";
import Head from "next/head";

const Home = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Mohamed&apos;s Blog</title>
        <meta
          name="description"
          content="I blog about frontend with react and nextjs."
        />
      </Head>
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
