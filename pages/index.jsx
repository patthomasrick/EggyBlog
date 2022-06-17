import { NAME, SUBTITLE } from "../components/config";
import Layout from "../components/layout";
import { getLayoutPostData, getPageData } from "../utils/posts";

export async function getStaticProps() {
  const layoutData = getLayoutPostData();
  const homePageData = await getPageData("home");

  return {
    props: {
      layoutData: layoutData,
      homePageData: homePageData,
    },
  };
}

export default function HomePage({ layoutData, homePageData }) {
  return (
    <>
      <Layout title={NAME} subtitle={SUBTITLE} layoutData={layoutData}>
        <section>
          <div
            dangerouslySetInnerHTML={{ __html: homePageData.content_html }}
          />
        </section>
      </Layout>
    </>
  );
}
