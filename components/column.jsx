import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { AUTHOR, BIO, SOCIALS } from './config';
import { motion } from 'framer-motion';

export default function Column({ posts }) {
  return (
    <Container className="py-5 text-center text-light sticky-lg-top">
      <motion.div
        className="card bg-primary text-light mb-3"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
          zIndex: 1,
        }}
      >
        <Link href="/">
          <a>
            <Image
              src="/me.jpg"
              width={128}
              height={128}
              alt="Me"
              style={{ borderRadius: '50%' }}
            ></Image>
          </a>
        </Link>
      </motion.div>

      <h3>{AUTHOR}</h3>

      <p>
        {/* Socials */}
        {SOCIALS.map((social) => (
          <motion.span
            key={social.name}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
              zIndex: 1,
            }}
          >
            <a
              href={social.url}
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={social.icon}
                style={{ fontSize: '18pt' }}
                className="text-light"
              ></FontAwesomeIcon>
            </a>
          </motion.span>
        ))}
      </p>

      <p>{BIO}</p>

      <hr className="m-5" />

      <h4>Recent Posts</h4>

      <ul className="text-left" style={{ textAlign: 'left' }}>
        {(posts ?? []).map((post) => (
          <li key={post.id} className="mb-1">
            <Link href={`/posts/${post.id}`}>
              <a className="text-light">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <p>
        <Link href={`/posts/pages/1`}>
          <a className="text-muted">View all posts</a>
        </Link>
      </p>
    </Container>
  );
}
