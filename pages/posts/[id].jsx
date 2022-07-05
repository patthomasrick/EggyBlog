import Date from "../../components/date";
import Layout from "../../components/layout";
import {
  getAllPostIds,
  getLayoutPostData,
  getPostData,
} from "../../utils/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const layoutData = getLayoutPostData();
  const postData = await getPostData(params.id);
  const crumbs = [
    { label: "Home", url: "/" },
    { label: "Posts", url: "/posts/pages/1" },
    { label: postData.title, url: `/posts/${params.id}`, active: true },
  ];
  return {
    props: {
      layoutData,
      postData,
      crumbs,
    },
  };
}

export default function Post({ postData, crumbs, layoutData }) {
  return (
    <Layout
      title={postData.title}
      subtitle=""
      crumbs={crumbs}
      layoutData={layoutData}
    >
      <p>
        <Date dateString={postData.date} />
      </p>
      <div dangerouslySetInnerHTML={{ __html: postData.content_html }} />
    </Layout>
  );
}
