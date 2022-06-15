import { Container } from "react-bootstrap";
import Image from "next/image";

export default function Column() {
  return (
    <Container className="pt-5">
      <div className="text-center">
        <Image
          src="/me.jpg"
          width={96}
          height={96}
          alt="Me"
          style={{ borderRadius: "50%" }}
        ></Image>
      </div>

      <h3 className="text-center">Patrick Thomas</h3>
    </Container>
  );
}
