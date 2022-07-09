import Head from "next/head";
import { SHORT_NAME } from "./config";

export default function Header({ title, description = "" }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />

        <title>
          {title ? title : "Eggy Blog"} | {SHORT_NAME}
        </title>
        <link rel="icon" href="/favicon.ico" />

        {description && <meta name="description" content={description} />}
      </Head>
    </>
  );
}
