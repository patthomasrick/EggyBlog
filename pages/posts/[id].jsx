import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../utils/posts";

export default function Post({ postData: post_data }) {
  return (
    <Layout title={post_data.title} subtitle="">
      {post_data.date}

      <div dangerouslySetInnerHTML={{ __html: post_data.content_html }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
