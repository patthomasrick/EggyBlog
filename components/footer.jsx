import { Container } from "react-bootstrap";
import animals from "./animals";

// Pick a random animal.
const Animal = animals[Math.floor(Math.random() * animals.length)];

export default function Footer() {
  return (
    <Container className="my-5 pt-5 text-center">
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
    </Container>
  );
}
