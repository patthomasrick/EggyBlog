import Head from "next/head";
import { SHORT_NAME } from "./config";

export default function Header({
  title,
  description = "",
  shortNameHidden = false,
}) {
  if (shortNameHidden) {
    var pageTitle = title ?? "Eggy Blog";
  } else {
    var pageTitle = `${title ?? "Eggy Blog"} | ${SHORT_NAME}`;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />

        {description && <meta name="description" content={description} />}
      </Head>
    </>
  );
}
