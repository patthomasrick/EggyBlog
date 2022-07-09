import Link from "next/link";
import Date from "../date";

export default function PostCard({ post, size }) {
  return (
    <div className="card bg-primary text-light mb-3">
      {/* If there is an image, show card image */}
      {post.image && (
        <div
          className="ratio ratio-4x3 card-img-top"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
          }}
        ></div>
      )}
      <div className="card-body pb-1">
        <div>
          {/* Tag for tag in post */}
          {post.tags.map((tag) => (
            <span className="badge text-light p-0" key={tag}>
              #{tag}
            </span>
          ))}
        </div>

        <h3 className={`card-title py-0 ${size == "large" ? "h5" : "h6"}`}>
          <Link href={`/posts/${post.id}`}>
            <a className="text-light stretched-link">{post.title}</a>
          </Link>
        </h3>

        {post.excerpt && <p className="card-text">{post.excerpt}</p>}
      </div>
      <div className="card-footer">
        <div>
          <small className="text-muted">
            <Date dateString={post.date} />
          </small>
        </div>
      </div>
    </div>
  );
}
