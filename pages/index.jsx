import Head from "next/head";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Layout from "../components/layout";

// function Header({ title }) {
//   return <h1 className="my-5">{title ? title : "Default title"}</h1>;
// }

export default function HomePage() {
  // const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  // const [likes, setLikes] = useState(0);

  // function handleClick() {
  //   setLikes(likes + 1);
  // }

  // return (
  //   <>
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <Container>
  //       <Header title="Develop. Preview. Ship. 🚀" />
  //       <ul>
  //         {names.map((name) => (
  //           <li key={name}>{name}</li>
  //         ))}
  //       </ul>

  //       <Button onClick={handleClick}>Like ({likes})</Button>
  //     </Container>
  //   </>
  // );

  return (
    <>
      <Layout>
        <p>Develop. Preview. Ship. 🚀</p>
      </Layout>
    </>
  );
}
