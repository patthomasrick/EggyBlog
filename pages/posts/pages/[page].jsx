import Link from "next/link";
import Layout from "../../../components/layout";
import PostCard from "../../../components/posts/post_card";
import {
  getAllPostIds,
  getLayoutPostData,
  getSortedPostsData,
} from "../../../utils/posts";

export async function getStaticPaths() {
  const postIDs = getAllPostIds();
  const numPages = Math.ceil(postIDs.length / 10);

  // Convert post IDs array to list of pages in a format that Next.js
  // understands.
  const paths = Array.from({ length: numPages }, (_, i) => ({
    params: {
      page: String(i + 1),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const layoutData = getLayoutPostData();
  const crumbs = [
    { label: "Home", url: "/" },
    { label: "Posts", url: "/posts" },
    { label: `Page ${params.page}`, url: `/posts/pages/${params.page}` },
  ];
  const page = Number(params.page);
  const numPages = Math.ceil(layoutData.totalPosts / 10);
  const posts = getSortedPostsData((page - 1) * 10, page * 10);
  return {
    props: {
      layoutData,
      crumbs,
      page,
      numPages,
      posts,
    },
  };
}

export default function Page({ crumbs, layoutData, page, numPages, posts }) {
  return (
    <Layout
      title={`Posts`}
      subtitle={`Viewing page ${page} of ${numPages}`}
      crumbs={crumbs}
      layoutData={layoutData}
    >
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-6 col-12" key={post.id}>
            <PostCard size="large" post={post} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="text-center mt-5">
        <nav aria-label="Page navigation">
          <ul className="pagination ">
            {page - 1 > 0 && (
              <>
                <li className="page-item">
                  <Link href={`/posts/pages/1`}>
                    <a className="page-link">&laquo;</a>
                  </Link>
                </li>
                <li className="page-item">
                  <Link href={`/posts/pages/${page - 1}`}>
                    <a className="page-link">{page - 1}</a>
                  </Link>
                </li>
              </>
            )}
            <li className="page-item active">
              <span className="page-link">{page}</span>
            </li>
            {page < numPages && (
              <>
                <li className="page-item">
                  <Link href={`/posts/pages/${page + 1}`}>
                    <a className="page-link">{page + 1}</a>
                  </Link>
                </li>
                <li className="page-item">
                  <Link href={`/posts/pages/${numPages}`}>
                    <a className="page-link">&raquo;</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </Layout>
  );
}
