import PostContent from "../../components/Posts/PostDetail/PostContent";
import { getPostFiles, readPostsData } from "../../helpers/posts-util";

const PostDetail = ({ post }) => {
  return <PostContent post={post} />;
};
export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = readPostsData(slug);
  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}
export async function getStaticPaths() {
  const slug = getPostFiles().map((file) => file.replace(/\.md$/, ""));
  return {
    paths: slug.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
export default PostDetail;
