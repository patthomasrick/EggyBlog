import { Button, Container } from "react-bootstrap";
import Head from "next/head";

export default function Header({ title }) {
  return (
    <>
      <Head>
        <title>{title ? title : "Eggy Blog"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
