import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { AUTHOR, BIO, SOCIALS } from "./config";

export default function Column({ posts }) {
  return (
    <Container className="py-5 text-center text-light sticky-lg-top">
      <div>
        <Link href="/">
          <a>
            <Image
              src="/me.jpg"
              width={128}
              height={128}
              alt="Me"
              style={{ borderRadius: "50%" }}
            ></Image>
          </a>
        </Link>
      </div>

      <h3>{AUTHOR}</h3>

      <p>
        {/* Socials */}
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="mx-2"
            target="_blank"
            rel="noopener noreferrer"
            data-bs-toggle="tooltip"
            title={social.name}
          >
            <FontAwesomeIcon
              icon={social.icon}
              style={{ fontSize: "18pt" }}
              className="text-light"
            ></FontAwesomeIcon>
          </a>
        ))}
      </p>

      <p>{BIO}</p>

      <hr className="m-5" />

      <h4>Recent Posts</h4>

      {(posts ?? []).map((post) => (
        <p key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a className="text-light">{post.title}</a>
          </Link>
        </p>
      ))}

      <p>
        <Link href={`/posts/pages/1`}>
          <a className="text-muted">View all posts</a>
        </Link>
      </p>
    </Container>
  );
}
