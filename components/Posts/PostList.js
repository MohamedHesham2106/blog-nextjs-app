import styles from "./PostList.module.css";
import PostItem from "./PostItem";
const PostList = ({ posts }) => {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
