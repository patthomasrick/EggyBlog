import { format, parseISO } from "date-fns";
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
      subtitle={format(parseISO(postData.date), "d MMM yyyy")}
      crumbs={crumbs}
      layoutData={layoutData}
    >
      <div dangerouslySetInnerHTML={{ __html: postData.content_html }} />
    </Layout>
  );
}
