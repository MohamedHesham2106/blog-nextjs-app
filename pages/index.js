import { Fragment } from "react";
import Hero from "../components/Home/Hero";
import FeaturedPosts from "../components/Home/FeaturedPosts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - it makes building fullstack React apps easier and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - it makes building fullstack React apps easier and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - it makes building fullstack React apps easier and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - it makes building fullstack React apps easier and ships with built-in SSR",
    date: "2022-02-10",
  },
];

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};
export default Home;
