import styles from "./AllPosts.module.css";
import PostList from "./PostList";
const AllPosts = (props) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostList posts={props.posts} />
    </section>
  );
};

export default AllPosts;
