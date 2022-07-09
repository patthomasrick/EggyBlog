import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import animals from "./animals";

export default function Footer() {
  // Pick a random animal based on the current route.
  const router = useRouter();
  // Need to hash router.query.id to get a number between 0 and length of animals. Our hash is just the sum of the characters in the id.
  const hash = (router.query.id ?? "")
    .split("")
    .reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  const Animal = animals[hash % animals.length];

  return (
    <Container className="my-5 py-5 text-center">
      <div
        className="text-center mx-auto"
        style={{
          position: "relative",
          height: "256px",
          width: "80%",
        }}
      >
        {Animal}
      </div>
      <br />
      <p>
        Patrick Thomas, {new Date().getFullYear()}. Clip art images from{" "}
        <a href="https://etc.usf.edu/clipart/">ClipArt ETC</a>.
      </p>
    </Container>
  );
}
