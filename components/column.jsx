import { Container } from "react-bootstrap";
import Image from "next/image";
import { AUTHOR, BIO, SOCIALS } from "./config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Column() {
  return (
    <Container className="pt-5 text-center text-light sticky-lg-top">
      <div>
        <Image
          src="/me.jpg"
          width={96}
          height={96}
          alt="Me"
          style={{ borderRadius: "50%" }}
        ></Image>
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
    </Container>
  );
}
