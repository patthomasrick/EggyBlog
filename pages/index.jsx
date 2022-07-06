import { NAME, SUBTITLE } from "../components/config";
import Layout from "../components/layout";
import PostCard from "../components/posts/post_card";
import { getLayoutPostData, getPageData } from "../utils/posts";

export async function getStaticProps() {
  const layoutData = getLayoutPostData();
  const homePageData = await getPageData("home");
  const recentPosts = layoutData.column.slice(0, 5);

  return {
    props: {
      layoutData: layoutData,
      homePageData: homePageData,
      recentPosts: recentPosts,
    },
  };
}

export default function HomePage({ layoutData, homePageData, recentPosts }) {
  return (
    <>
      <Layout title={NAME} subtitle={SUBTITLE} layoutData={layoutData}>
        <section>
          <div
            dangerouslySetInnerHTML={{ __html: homePageData.content_html }}
          />
        </section>

        <section>
          <h2>Recent Posts</h2>

          <div className="row">
            {recentPosts.slice(0, 2).map((post) => (
              <div className="col-md-6 col-12" key={post.id}>
                <PostCard size="large" post={post} />
              </div>
            ))}
            {recentPosts.slice(2, 5).map((post) => (
              <div className="col-md-4 col-6" key={post.id}>
                <PostCard size="small" post={post} />
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
