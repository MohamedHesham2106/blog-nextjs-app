import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

const PostContent = (props) => {
  const { post } = props;
  const { slug, image, title, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
