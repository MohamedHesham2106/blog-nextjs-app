import { Fragment } from "react";
import Hero from "../components/Home/Hero";
import FeaturedPosts from "../components/Home/FeaturedPosts";
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};
export default Home;
