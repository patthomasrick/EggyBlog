import { NAME, SUBTITLE } from "../components/config";
import Layout from "../components/layout";
import { getPageData, getSortedPostsData } from "../utils/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const homePageData = await getPageData("home");

  return {
    props: {
      allPostsData,
      homePageData,
    },
  };
}

export default function HomePage({ allPostsData, homePageData }) {
  return (
    <>
      <Layout title={NAME} subtitle={SUBTITLE}>
        <section>
          <div
            dangerouslySetInnerHTML={{ __html: homePageData.content_html }}
          />
        </section>
      </Layout>
    </>
  );
}
