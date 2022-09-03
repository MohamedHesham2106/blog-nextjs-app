import PostList from "../Posts/PostList";
import styles from "./FeaturedPosts.module.css";
const FeaturedPosts = (props) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostList posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
