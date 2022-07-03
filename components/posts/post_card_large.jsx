export default function PostCardLarge({ post }) {
  return (
    <div className="card bg-primary text-light">
      {/* If there is an image, show card image */}
      {post.image && (
        <div
          className="ratio ratio-4x3"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
          }}
        ></div>
      )}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.excerpt}</p>
        <a href={post.url} className="btn btn-primary">
          Read More
        </a>
      </div>
      <div className="card-footer">
        <small className="text-muted">{post.date}</small>
      </div>
    </div>
  );
}
